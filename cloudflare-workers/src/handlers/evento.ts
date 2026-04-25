/**
 * Handler para requisições de páginas de evento
 */

import type { Env, Evento, ApiResponse } from '../types';
import { generateMetaTags } from '../utils/meta-tags';

const CACHE_TTL = 3600; // 1 hora em segundos

/**
 * Processa requisições de crawlers para páginas de evento
 */
export async function handleEventoRequest(
  request: Request,
  env: Env
): Promise<Response> {
  const url = new URL(request.url);
  const slug = extractSlug(url.pathname);

  if (!slug) {
    return fetch(request);
  }

  try {
    // 1. Buscar dados do evento na API
    const evento = await fetchEvento(slug, env);
    if (!evento) {
      console.log(`Evento não encontrado: ${slug}`);
      return fetch(request);
    }

    // 2. Buscar HTML original do origin
    const originResponse = await fetch(request);
    if (!originResponse.ok) {
      return originResponse;
    }

    const html = await originResponse.text();

    // 3. Injetar meta tags no HTML
    const modifiedHtml = injectMetaTags(html, evento, url.href);

    // 4. Retornar HTML modificado
    return new Response(modifiedHtml, {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': `public, max-age=${CACHE_TTL}`,
        'x-robots-tag': 'index, follow',
      },
    });
  } catch (error) {
    console.error('Erro no Worker:', error);
    // Em caso de erro, retorna a página original
    return fetch(request);
  }
}

/**
 * Extrai o slug do pathname
 */
function extractSlug(pathname: string): string | null {
  // /evento/nome-do-evento -> nome-do-evento
  const match = pathname.match(/^\/evento\/([^/?]+)/);
  return match ? match[1] : null;
}

/**
 * Busca dados do evento na API
 */
async function fetchEvento(slug: string, env: Env): Promise<Evento | null> {
  // Tentar cache primeiro (se KV estiver configurado)
  if (env.EVENTO_CACHE) {
    const cached = await env.EVENTO_CACHE.get(slug);
    if (cached) {
      console.log(`Cache hit: ${slug}`);
      return JSON.parse(cached);
    }
  }

  // Buscar na API
  const apiUrl = `${env.API_BASE_URL}/api/evento/${slug}`;
  console.log(`Fetching: ${apiUrl}`);

  const response = await fetch(apiUrl, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'Duevento-SEO-Worker/1.0',
    },
  });

  if (!response.ok) {
    console.log(`API retornou ${response.status} para ${slug}`);
    return null;
  }

  const data: ApiResponse<Evento> = await response.json();
  const evento = data.data;

  // Cachear resultado (se KV estiver configurado)
  if (env.EVENTO_CACHE && evento) {
    await env.EVENTO_CACHE.put(slug, JSON.stringify(evento), {
      expirationTtl: CACHE_TTL,
    });
    console.log(`Cache set: ${slug}`);
  }

  return evento;
}

/**
 * Injeta meta tags no HTML
 */
function injectMetaTags(html: string, evento: Evento, url: string): string {
  const metaTags = generateMetaTags(evento, url);

  // Substitui o conteúdo do <head>
  // Mantém apenas o que vem depois das meta tags originais (scripts, etc)
  const headMatch = html.match(/<head>([\s\S]*?)<\/head>/i);

  if (!headMatch) {
    // Se não encontrar <head>, retorna original
    return html;
  }

  // Extrai scripts do head original para preservar
  const originalHead = headMatch[1];
  const scripts = originalHead.match(/<script[\s\S]*?<\/script>/gi) || [];
  const moduleScript = scripts.find((s) => s.includes('type="module"')) || '';

  // Monta novo head com meta tags + script do Vue
  const newHead = `<head>${metaTags}\n${moduleScript}</head>`;

  return html.replace(/<head>[\s\S]*?<\/head>/i, newHead);
}

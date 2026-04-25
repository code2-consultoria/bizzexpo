/**
 * Cloudflare Worker - Duevento SEO
 *
 * Intercepta requisições de crawlers para páginas de evento
 * e injeta meta tags dinâmicas para melhorar o SEO e
 * compartilhamento em redes sociais.
 */

import type { Env } from './types';
import { isCrawler } from './utils/crawler';
import { handleEventoRequest } from './handlers/evento';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const userAgent = request.headers.get('user-agent') || '';

    // Log para debug
    console.log(`Request: ${url.pathname} | UA: ${userAgent.slice(0, 50)}...`);

    // Apenas processar rotas de evento
    if (!url.pathname.startsWith('/evento/')) {
      return fetch(request);
    }

    // Se não for crawler, passar direto para origin
    if (!isCrawler(userAgent)) {
      console.log('Não é crawler, passando para origin');
      return fetch(request);
    }

    console.log('Crawler detectado, processando meta tags');

    // Processar para crawlers
    return handleEventoRequest(request, env);
  },
};

/**
 * Geração de meta tags para SEO
 */

import type { Evento } from '../types';

// Logo padrão do Duevento para Open Graph
const DEFAULT_OG_IMAGE = 'https://duevento.com.br/logo-icon.png';

// Descrição padrão para todos os eventos
const DEFAULT_DESCRIPTION = 'duevento.com.br - Gestão de eventos e feiras';

/**
 * Gera as meta tags HTML para um evento
 */
export function generateMetaTags(evento: Evento, url: string): string {
  const title = evento.nome;
  const description = DEFAULT_DESCRIPTION;
  // Prioridade: og_image > banner > DEFAULT_OG_IMAGE
  const image = evento.og_image || evento.banner || DEFAULT_OG_IMAGE;
  const siteName = 'Duevento';

  return `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Básico -->
  <title>${escapeHtml(title)} | ${siteName}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${url}">

  <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escapeHtml(title)}">
  <meta property="og:url" content="${url}">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:locale" content="pt_BR">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${image}">

  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  ${generateJsonLd(evento, url)}
  </script>

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <!-- PWA -->
  <meta name="theme-color" content="#006b44">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="${siteName}">
  <link rel="manifest" href="/manifest.json">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">

  <!-- Google Material Symbols -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
`;
}

/**
 * Gera o JSON-LD para Schema.org Event
 */
function generateJsonLd(evento: Evento, url: string): string {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: evento.nome,
    description: extractTextFromDescription(evento.descricao),
    startDate: evento.data_inicio,
    endDate: evento.data_fim,
    location: {
      '@type': 'Place',
      name: evento.local,
    },
    image: evento.og_image || evento.banner || DEFAULT_OG_IMAGE,
    url: url,
    organizer: {
      '@type': 'Organization',
      name: 'Duevento',
      url: 'https://duevento.com.br',
    },
  };

  return JSON.stringify(jsonLd, null, 2);
}

/**
 * Extrai texto puro da descrição (que pode ser JSON do Editor.js)
 */
function extractTextFromDescription(descricao: string): string {
  if (!descricao) {
    return DEFAULT_DESCRIPTION;
  }

  try {
    // Tenta parsear como JSON (Editor.js)
    const parsed = JSON.parse(descricao);
    if (parsed.blocks && Array.isArray(parsed.blocks)) {
      const texts = parsed.blocks
        .filter((block: { type: string }) => block.type === 'paragraph')
        .map((block: { data?: { text?: string } }) => block.data?.text || '')
        .join(' ');

      // Remove tags HTML e limita tamanho
      return stripHtml(texts).slice(0, 160);
    }
  } catch {
    // Não é JSON, trata como texto/HTML
  }

  // Remove tags HTML e limita tamanho
  return stripHtml(descricao).slice(0, 160);
}

/**
 * Remove tags HTML de uma string
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

/**
 * Escapa caracteres HTML especiais
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

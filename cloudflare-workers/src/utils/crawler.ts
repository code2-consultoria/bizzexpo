/**
 * Detecção de crawlers/bots de redes sociais e mecanismos de busca
 */

const CRAWLER_USER_AGENTS = [
  // Google
  'googlebot',
  'google-inspectiontool',
  'googleweblight',
  'adsbot-google',

  // Facebook
  'facebookexternalhit',
  'facebookcatalog',

  // Twitter/X
  'twitterbot',

  // LinkedIn
  'linkedinbot',

  // WhatsApp
  'whatsapp',

  // Telegram
  'telegrambot',

  // Discord
  'discordbot',

  // Slack
  'slackbot',
  'slack-imgproxy',

  // Microsoft
  'bingbot',
  'msnbot',

  // Outros buscadores
  'yandexbot',
  'duckduckbot',
  'baiduspider',
  'applebot',

  // Ferramentas de preview
  'embedly',
  'quora link preview',
  'showyoubot',
  'outbrain',
  'pinterest',
  'vkshare',
  'w3c_validator',
];

/**
 * Verifica se o User-Agent pertence a um crawler
 */
export function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some((crawler) => ua.includes(crawler));
}

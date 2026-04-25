/**
 * Testes para detecção de crawlers
 */

import { describe, it, expect } from 'vitest';
import { isCrawler } from './crawler';

describe('isCrawler', () => {
  describe('deve detectar crawlers conhecidos', () => {
    const crawlers = [
      'Googlebot/2.1 (+http://www.google.com/bot.html)',
      'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
      'Twitterbot/1.0',
      'LinkedInBot/1.0 (compatible; Mozilla/5.0)',
      'WhatsApp/2.21.12.21 A',
      'TelegramBot (like TwitterBot)',
      'Discordbot/2.0',
      'Slackbot-LinkExpanding 1.0 (+https://api.slack.com/robots)',
    ];

    crawlers.forEach((ua) => {
      it(`detecta: ${ua.slice(0, 30)}...`, () => {
        expect(isCrawler(ua)).toBe(true);
      });
    });
  });

  describe('não deve detectar navegadores comuns', () => {
    const browsers = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    ];

    browsers.forEach((ua) => {
      it(`não detecta: ${ua.slice(0, 40)}...`, () => {
        expect(isCrawler(ua)).toBe(false);
      });
    });
  });

  it('deve retornar false para User-Agent vazio', () => {
    expect(isCrawler('')).toBe(false);
  });
});

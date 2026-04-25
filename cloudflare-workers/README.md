# Duevento SEO Worker

Cloudflare Worker para injeção dinâmica de meta tags em páginas de evento, melhorando o SEO e compartilhamento em redes sociais.

## Funcionamento

1. Intercepta requisições para `/evento/*`
2. Detecta se é um crawler (Google, Facebook, Twitter, etc.)
3. Se for crawler:
   - Busca dados do evento na API
   - Injeta meta tags Open Graph e Twitter Cards
   - Retorna HTML modificado
4. Se não for crawler, passa direto para o origin (SPA Vue.js)

## Card de Compartilhamento

Ao compartilhar um evento nas redes sociais, o card exibirá:

- **Imagem**: Logo do Duevento
- **Título**: Nome do evento
- **Descrição**: "duevento.com.br - Gestão de eventos e feiras"

## Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Rodar localmente
pnpm dev

# Rodar testes
pnpm test

# Verificar tipos
pnpm typecheck
```

## Deploy

```bash
# Deploy para staging
pnpm deploy:staging

# Deploy para produção
pnpm deploy:production
```

## Configuração no Cloudflare

1. Acesse o painel da Cloudflare
2. Vá em Workers & Pages
3. Crie um novo Worker ou faça deploy via CLI
4. Configure as rotas:
   - `duevento.com.br/evento/*`
   - `www.duevento.com.br/evento/*`

### Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `API_BASE_URL` | URL base da API (ex: https://api.duevento.com.br) |
| `FRONTEND_URL` | URL do frontend (ex: https://duevento.com.br) |

### KV Cache (Opcional)

Para melhor performance, configure um KV namespace:

1. Crie um KV namespace no painel da Cloudflare
2. Copie o ID do namespace
3. Descomente e configure no `wrangler.toml`

## Teste de Meta Tags

Use estas ferramentas para validar as meta tags:

- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)
- [Metatags.io](https://metatags.io/)

## Estrutura

```
cloudflare-workers/
├── src/
│   ├── index.ts              # Entry point
│   ├── types.ts              # Tipos TypeScript
│   ├── handlers/
│   │   └── evento.ts         # Handler de eventos
│   └── utils/
│       ├── crawler.ts        # Detecção de bots
│       ├── crawler.test.ts   # Testes
│       └── meta-tags.ts      # Geração de meta tags
├── wrangler.toml             # Configuração Wrangler
├── package.json
└── tsconfig.json
```

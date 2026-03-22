# Sprint 06

> **Periodo:** 2026-03-19 a 2026-04-02
> **Status:** Concluido
> **Objetivo:** Implementar integracao com Pagar.me, sistema de catalogo de produtos e faturas

## Backlog da Sprint

### Features

| ID | Feature | Prioridade | Status | Responsavel |
|----|---------|------------|--------|-------------|
| F01 | [Integracao Pagar.me e Catalogo](../analises/features/integracao-pagarme-catalogo.md) | Alta | Concluido | - |

### User Stories

| ID | User Story | Prioridade | Status |
|----|------------|------------|--------|
| US-F01 | Gestao de Catalogo (Admin) | Alta | Concluido |
| US-F02 | Precos por Evento | Media | Concluido |
| US-F03 | Criacao de Faturas | Alta | Concluido |
| US-F04 | Pagamento com Cartao | Alta | Concluido |
| US-F05 | Pagamento com PIX | Alta | Concluido |
| US-F06 | Parcelamento | Media | Concluido |

---

## Fase 1: Estrutura Base

### Tarefas

| # | Tarefa | Tipo | Status |
|---|--------|------|--------|
| 1.1 | Criar enum TipoProduto | Enum | Concluido |
| 1.2 | Criar enum StatusFatura | Enum | Concluido |
| 1.3 | Criar enum StatusTransacao | Enum | Concluido |
| 1.4 | Criar enum MetodoPagamento | Enum | Concluido |
| 1.5 | Criar migration categorias_produto | Migration | Concluido |
| 1.6 | Criar migration produtos | Migration | Concluido |
| 1.7 | Criar migration produtos_evento | Migration | Concluido |
| 1.8 | Criar migration faturas | Migration | Concluido |
| 1.9 | Criar migration itens_fatura | Migration | Concluido |
| 1.10 | Alterar migration pagamentos (novos campos) | Migration | Concluido |
| 1.11 | Criar model CategoriaProduto | Model | Concluido |
| 1.12 | Criar model Produto | Model | Concluido |
| 1.13 | Criar model ProdutoEvento | Model | Concluido |
| 1.14 | Criar model Fatura | Model | Concluido |
| 1.15 | Criar model ItemFatura | Model | Concluido |
| 1.16 | Atualizar model Pagamento | Model | Concluido |
| 1.17 | Criar factories | Factory | Concluido |
| 1.18 | Criar seeders | Seeder | Concluido |
| 1.19 | Rodar migrations | Infra | Concluido |

---

## Fase 2: Catalogo de Produtos (Admin)

### Testes (TDD)

| # | Teste | Cenarios | Status |
|---|-------|----------|--------|
| 2.1 | CriarCategoriaTest | Sucesso, validacoes, duplicado | Concluido |
| 2.2 | AtualizarCategoriaTest | Sucesso, nao encontrada | Concluido |
| 2.3 | RemoverCategoriaTest | Sucesso, com produtos vinculados | Concluido |
| 2.4 | CriarProdutoTest | Sucesso, validacoes, categoria invalida | Concluido |
| 2.5 | AtualizarProdutoTest | Sucesso, nao encontrado | Concluido |
| 2.6 | RemoverProdutoTest | Sucesso, em uso | Concluido |
| 2.7 | DefinirPrecoEventoTest | Sucesso, produto/evento invalido | Concluido |

### Actions

| # | Action | Descricao | Status |
|---|--------|-----------|--------|
| 2.8 | Catalogo/Categoria/Criar | Criar categoria | Concluido |
| 2.9 | Catalogo/Categoria/Atualizar | Atualizar categoria | Concluido |
| 2.10 | Catalogo/Categoria/Remover | Remover categoria | Concluido |
| 2.11 | Catalogo/Categoria/Listar | Listar categorias | Concluido |
| 2.12 | Catalogo/Produto/Criar | Criar produto | Concluido |
| 2.13 | Catalogo/Produto/Atualizar | Atualizar produto | Concluido |
| 2.14 | Catalogo/Produto/Remover | Remover produto | Concluido |
| 2.15 | Catalogo/Produto/Listar | Listar produtos | Concluido |
| 2.16 | Catalogo/Produto/DefinirPrecoEvento | Preco por evento | Concluido |

### Controllers

| # | Controller | Metodo | Status |
|---|------------|--------|--------|
| 2.17 | Admin/Catalogo/Categoria/Index | GET | Concluido |
| 2.18 | Admin/Catalogo/Categoria/Store | POST | Concluido |
| 2.19 | Admin/Catalogo/Categoria/Update | PUT | Concluido |
| 2.20 | Admin/Catalogo/Categoria/Destroy | DELETE | Concluido |
| 2.21 | Admin/Catalogo/Produto/Index | GET | Concluido |
| 2.22 | Admin/Catalogo/Produto/Store | POST | Concluido |
| 2.23 | Admin/Catalogo/Produto/Update | PUT | Concluido |
| 2.24 | Admin/Catalogo/Produto/Destroy | DELETE | Concluido |
| 2.25 | Admin/Catalogo/Produto/PrecoEvento | POST | Concluido |

---

## Fase 3: Sistema de Faturas

### Testes (TDD)

| # | Teste | Cenarios | Status |
|---|-------|----------|--------|
| 3.1 | CriarFaturaTest | Sucesso, cliente invalido | Concluido |
| 3.2 | AdicionarItemTest | Sucesso, fatura nao rascunho, produto invalido | Concluido |
| 3.3 | RemoverItemTest | Sucesso, item nao encontrado | Concluido |
| 3.4 | AplicarDescontoTest | Sucesso, desconto > total | Concluido |
| 3.5 | FinalizarFaturaTest | Sucesso, sem itens, ja finalizada | Concluido |
| 3.6 | CancelarFaturaTest | Sucesso, ja paga | Concluido |
| 3.7 | GerarNumeroFaturaTest | Formato correto, sequencial | Concluido |

### Actions

| # | Action | Descricao | Status |
|---|--------|-----------|--------|
| 3.8 | Fatura/Criar | Criar fatura em rascunho | Concluido |
| 3.9 | Fatura/AdicionarItem | Adicionar item | Concluido |
| 3.10 | Fatura/RemoverItem | Remover item | Concluido |
| 3.11 | Fatura/AplicarDesconto | Aplicar desconto | Concluido |
| 3.12 | Fatura/Finalizar | Rascunho → Pendente | Concluido |
| 3.13 | Fatura/Cancelar | Cancelar fatura | Concluido |
| 3.14 | Fatura/Listar | Listar faturas | Concluido |
| 3.15 | Fatura/GerarNumero | Gerar numero sequencial | Concluido |

### Controllers

| # | Controller | Metodo | Status |
|---|------------|--------|--------|
| 3.16 | Admin/Fatura/Index | GET | Concluido |
| 3.17 | Admin/Fatura/Store | POST | Concluido |
| 3.18 | Admin/Fatura/Show | GET | Concluido |
| 3.19 | Admin/Fatura/Item/Store | POST | Concluido |
| 3.20 | Admin/Fatura/Item/Destroy | DELETE | Concluido |
| 3.21 | Admin/Fatura/Desconto | POST | Concluido |
| 3.22 | Admin/Fatura/Finalizar | POST | Concluido |
| 3.23 | Admin/Fatura/Cancelar | POST | Concluido |
| 3.24 | Fatura/Index | GET (cliente) | Concluido |
| 3.25 | Fatura/Show | GET (cliente) | Concluido |

---

## Fase 4: Integracao Pagar.me

### Configuracao

| # | Tarefa | Status |
|---|--------|--------|
| 4.1 | Criar config/pagarme.php | Concluido |
| 4.2 | Adicionar variaveis .env | Concluido |
| 4.3 | Usar HTTP Facade Laravel | Concluido |

### Testes (TDD)

| # | Teste | Cenarios | Status |
|---|-------|----------|--------|
| 4.4 | PagarCartaoCreditoTest | Sucesso, recusado, dados invalidos, parcelado | Concluido |
| 4.5 | PagarPixTest | Gerar QR, expiracao, reutilizar PIX valido | Concluido |
| 4.6 | WebhookPagarmeTest | Auth valida/invalida, paid, failed, refunded | Concluido |
| 4.7 | CalcularParcelasTest | 1x a 12x, juros, valor minimo | Concluido |
| 4.8 | ConsultarPagamentoTest | Status, PIX expirado, cartao | Concluido |
| 4.9 | ReutilizarPixExistenteTest | Fluxo completo PIX | Concluido |

### Services

| # | Service | Descricao | Status |
|---|---------|-----------|--------|
| 4.10 | Contracts/GatewayPagamento | Interface | Concluido |
| 4.11 | Pagarme/Pagarme | Implementacao gateway (HTTP) | Concluido |
| 4.12 | Providers/PagamentoServiceProvider | Binding no container | Concluido |

### Actions

| # | Action | Descricao | Status |
|---|--------|-----------|--------|
| 4.13 | Pagamento/ProcessarCartao | Pagamento cartao | Concluido |
| 4.14 | Pagamento/GerarPix | Gerar QR PIX | Concluido |
| 4.15 | Pagamento/ProcessarWebhook | Tratar webhook | Concluido |
| 4.16 | Pagamento/CalcularParcelas | Calcular parcelamento | Concluido |
| 4.17 | Pagamento/ConsultarStatus | Consultar gateway | Concluido |

### Controllers

| # | Controller | Metodo | Status |
|---|------------|--------|--------|
| 4.18 | Pagamento/Cartao | POST | Concluido |
| 4.19 | Pagamento/Pix | POST | Concluido |
| 4.20 | Pagamento/Status | GET | Concluido |
| 4.21 | Webhook/Pagarme | POST (publico) | Concluido |

---

## Fase 5: Events e Listeners

### Events

| # | Event | Descricao | Status |
|---|-------|-----------|--------|
| 5.1 | EventoCriado | Evento criado (gera fatura) | Concluido |
| 5.2 | FaturaQuitada | Fatura paga | Concluido |
| 5.3 | FaturaCancelada | Fatura cancelada | Concluido |
| 5.4 | PagamentoConfirmado | (coberto por FaturaQuitada) | Concluido |
| 5.5 | PagamentoFalhou | Pagamento falhou | Concluido |

### Listeners

| # | Listener | Evento | Descricao | Status |
|---|----------|--------|-----------|--------|
| 5.6 | GerarFaturaEvento | EventoCriado | Gera fatura ao criar evento | Concluido |
| 5.7 | NotificarCliente | FaturaQuitada | Notificacao in-app | Concluido |
| 5.8 | EnviarEmailConfirmacao | FaturaQuitada | Email de confirmacao | Concluido |
| 5.9 | BroadcastFaturaQuitada | FaturaQuitada | Broadcast WebSocket | Concluido |
| 5.10 | AtualizarStatusEvento | FaturaQuitada | Marca evento como pago | Concluido |
| 5.11 | NotificarFalha | PagamentoFalhou | Notificacao de falha | Concluido |
| 5.12 | NotificarCancelamento | FaturaCancelada | Notificacao de cancelamento | Concluido |

---

## Fase 6: Frontend (Vue 3)

### Stores

| # | Store | Responsabilidade | Status |
|---|-------|------------------|--------|
| 6.1 | catalogo | Gestao de produtos/categorias | Concluido |
| 6.2 | faturas | Gestao de faturas | Concluido |
| 6.3 | pagamento | Processamento de pagamentos | Concluido |

### Views Admin

| # | View | Descricao | Status |
|---|------|-----------|--------|
| 6.4 | CatalogoView | Lista de produtos e categorias | Concluido |
| 6.5 | ProdutoFormView | Criar/editar produto (modal) | Concluido |
| 6.6 | FaturasAdminView | Lista de faturas admin | Concluido |
| 6.7 | FaturaAdminDetailView | Detalhes da fatura admin | Concluido |

### Views Cliente

| # | View | Descricao | Status |
|---|------|-----------|--------|
| 6.8 | MinhasFaturasView | Lista de faturas do cliente | Concluido |
| 6.9 | FaturaDetailView | Visualizar fatura | Concluido |
| 6.10 | PagamentoView | Tela de pagamento | Concluido |
| 6.11 | PagamentoConfirmacaoView | Confirmacao pos-pagamento | Concluido |

### Componentes

| # | Componente | Responsabilidade | Status |
|---|------------|------------------|--------|
| 6.12 | CategoriaSelect | Seletor de categoria (inline no CatalogoView) | Concluido |
| 6.13 | ProdutoCard | Card de produto (inline no CatalogoView) | Concluido |
| 6.14 | ProdutoForm | Formulario de produto (modal no CatalogoView) | Concluido |
| 6.15 | FaturaTable | Tabela de faturas (inline no FaturasAdminView) | Concluido |
| 6.16 | FaturaItemList | Lista de itens (inline no FaturaAdminDetailView) | Concluido |
| 6.17 | AdicionarItemForm | Adicionar item a fatura | Concluido |
| 6.18 | CartaoForm | Campos do cartao | Concluido |
| 6.19 | ParcelamentoSelector | Seletor de parcelas | Concluido |
| 6.20 | PixQrCode | QR Code PIX | Concluido |
| 6.21 | MetodoSelector | Seletor de metodo de pagamento | Concluido |

---

## Decisoes Tomadas

### 2026-03-19 - Model Pagamento Unificado

**Contexto:** Decidir entre criar novo model Transacao ou expandir Pagamento existente.

**Opcoes Consideradas:**
1. Criar Transacao separado - mais limpo, quebra compatibilidade
2. Manter ambos - redundancia, complexidade
3. Unificar em Pagamento - compatibilidade, menos models

**Decisao:** Unificar em Pagamento, adicionando campos fatura_id, parcelas, valor_parcela, juros, pix_qrcode, pix_expira_em.

**Consequencias:**
- Retrocompatibilidade mantida
- evento_id e fatura_id sao mutuamente exclusivos (nullable)
- Pagamentos manuais continuam funcionando

### 2026-03-19 - Formas de Pagamento

**Contexto:** Definir quais formas de pagamento aceitar.

**Decisao:** Cartao de credito, cartao de debito e PIX. Boleto nao sera aceito.

**Consequencias:**
- Parcelamento disponivel apenas para credito
- PIX com QR Code e expiracao de 30 minutos

### 2026-03-19 - Parcelamento

**Contexto:** Definir politica de parcelamento.

**Decisao:** Ate 12x com juros repassados ao cliente.

**Consequencias:**
- Taxa de juros configuravel em config/pagarme.php
- Valor das parcelas calculado e exibido antes da confirmacao

---

## Dependencias

### Pagar.me

| Recurso | Status | Acao |
|---------|--------|------|
| Conta Pagar.me | Concluido | Configurada |
| API Key (sandbox) | Concluido | sk_649d6fb... |
| API Key (producao) | Pendente | Gerar apos homologacao |
| Webhook URL | Pendente | Configurar ngrok (dev) |

### Ambiente

| Recurso | Status | Acao |
|---------|--------|------|
| ngrok ou similar | Pendente | Instalar para teste webhook local |
| Variaveis .env | Concluido | PAGARME_* configuradas |

---

## Artefatos Produzidos

### Documentacao

| Tipo | Caminho | Descricao |
|------|---------|-----------|
| Analise Feature | [docs/analises/features/integracao-pagarme-catalogo.md](../analises/features/integracao-pagarme-catalogo.md) | Especificacao completa |

### Codigo (a produzir)

| Tipo | Caminho | Descricao |
|------|---------|-----------|
| Enums | api/app/Enums/TipoProduto.php | Tipos de produto |
| Enums | api/app/Enums/StatusFatura.php | Status de fatura |
| Enums | api/app/Enums/StatusTransacao.php | Status de transacao |
| Enums | api/app/Enums/MetodoPagamento.php | Metodos de pagamento |
| Models | api/app/Models/CategoriaProduto.php | Categoria de produto |
| Models | api/app/Models/Produto.php | Produto |
| Models | api/app/Models/ProdutoEvento.php | Preco por evento |
| Models | api/app/Models/Fatura.php | Fatura |
| Models | api/app/Models/ItemFatura.php | Item de fatura |
| Service | api/app/Services/Pagarme/Service.php | Integracao Pagar.me |
| Config | api/config/pagarme.php | Configuracoes |

---

## Impedimentos e Riscos

| ID | Descricao | Impacto | Mitigacao | Status |
|----|-----------|---------|-----------|--------|
| R01 | Conta Pagar.me nao configurada | Alto | Criar conta antes de iniciar Fase 4 | Resolvido |
| R02 | Webhook nao acessivel em dev | Medio | Usar ngrok ou similar | Aberto |
| R03 | Taxa de parcelamento pode mudar | Baixo | Configurar via .env | Resolvido |

---

## Metricas

| Metrica | Planejado | Realizado |
|---------|-----------|-----------|
| Migrations | 6 | 10+ |
| Models | 5 (novos) + 1 (alterado) | 8 |
| Actions | ~25 | 25+ |
| Controllers | ~25 | 25+ |
| Testes | ~40 | 669 (total da suite) |
| Componentes Vue | ~15 | 15+ |

---

**Criado em:** 2026-03-19
**Ultima atualizacao:** 2026-03-22

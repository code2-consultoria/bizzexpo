# Sprint 07

> **Periodo:** 2026-03-22 a 2026-04-05
> **Status:** Concluido
> **Objetivo:** Implementar gestao do perfil do organizador

## Backlog da Sprint

### Features

| ID | Feature | Prioridade | Status | Responsavel |
|----|---------|------------|--------|-------------|
| F01 | Gestao de Perfil do Organizador | Alta | Concluido | - |

### User Stories

| ID | User Story | Prioridade | Status |
|----|------------|------------|--------|
| US-9.1 | Editar Perfil do Organizador | Alta | Concluido |
| US-9.2 | Alterar Senha | Alta | Concluido |

---

## Fase 1: Editar Perfil do Organizador

> **Status:** JA IMPLEMENTADO - Backend completo com 9 testes

### Testes (TDD)

| # | Teste | Cenarios | Status |
|---|-------|----------|--------|
| 1.1 | AtualizarOrganizadorTest | Sucesso, validacoes, CNPJ duplicado | Concluido |

### Actions

| # | Action | Descricao | Status |
|---|--------|-----------|--------|
| 1.2 | Organizador/AtualizarOrganizador | Atualizar dados do organizador | Concluido |

### Controllers

| # | Controller | Metodo | Status |
|---|------------|--------|--------|
| 1.3 | Organizador/Visualizar | GET /api/organizador | Concluido |
| 1.4 | Organizador/Atualizar | PUT /api/organizador | Concluido |

---

## Fase 2: Alterar Senha

> **Status:** Concluido - 8 testes passando

### Testes (TDD)

| # | Teste | Cenarios | Status |
|---|-------|----------|--------|
| 2.1 | AlterarSenhaTest | 8 cenarios (sucesso, validacoes, tokens) | Concluido |

**Cenarios de teste:**
- Altera senha com dados validos
- Invalida tokens apos alterar senha
- Falha com senha atual incorreta
- Falha com nova senha muito curta
- Falha com confirmacao de senha diferente
- Falha com nova senha igual a atual
- Falha sem informar campos obrigatorios
- Falha sem autenticacao

### Actions

| # | Action | Descricao | Status |
|---|--------|-----------|--------|
| 2.2 | Auth/AlterarSenha | Alterar senha e revogar tokens | Concluido |

### Controllers

| # | Controller | Metodo | Status |
|---|------------|--------|--------|
| 2.3 | Auth/Senha/Update | PUT /api/auth/senha | Concluido |

---

## Fase 3: Frontend (Vue 3)

> **Status:** Concluido

### Views

| # | View | Descricao | Status |
|---|------|-----------|--------|
| 3.1 | PerfilView | Visualizar/editar perfil do organizador | Concluido |
| 3.2 | AlterarSenhaView | Formulario de alteracao de senha | Concluido |

### Funcionalidades Implementadas

- **PerfilView:**
  - Exibe avatar com iniciais do usuario
  - Mostra nome e email do usuario
  - Formulario de edicao do organizador (empresa, CNPJ, telefone, cargo)
  - Mascaras de formatacao para CNPJ e telefone
  - Link para alterar senha
  - Mensagens de sucesso/erro

- **AlterarSenhaView:**
  - Campos: senha atual, nova senha, confirmacao
  - Botoes de mostrar/ocultar senha
  - Validacao de requisitos de senha
  - Redirecionamento apos sucesso
  - Breadcrumb para voltar ao perfil

### Router e Navegacao

| # | Alteracao | Descricao | Status |
|---|-----------|-----------|--------|
| 3.3 | Router | Rotas /perfil e /perfil/alterar-senha | Concluido |
| 3.4 | Sidebar | Link "Meu Perfil" no menu | Concluido |

---

## Campos do Perfil

### Organizador

| Campo | Tipo | Obrigatorio | Validacao |
|-------|------|-------------|-----------|
| telefone | string | Sim | formato BR |
| empresa | string | Sim | max:255 |
| cnpj | string | Sim | CNPJ valido |
| cargo | string | Nao | max:100 |

### Alteracao de Senha

| Campo | Tipo | Obrigatorio | Validacao |
|-------|------|-------------|-----------|
| senha_atual | string | Sim | verificar hash |
| nova_senha | string | Sim | min:8, mixed case, number |
| nova_senha_confirmation | string | Sim | same:nova_senha |

---

## Regras de Negocio

1. **Email unico:** Nao pode usar email ja cadastrado por outro usuario
2. **CNPJ valido:** Validar digitos verificadores do CNPJ
3. **Senha forte:** Minimo 8 caracteres, maiuscula, minuscula e numero
4. **Senha atual:** Obrigatoria para alterar senha (seguranca)
5. **Revogacao de tokens:** Ao alterar senha, todos os tokens sao revogados

---

## Arquivos Criados/Modificados

### Backend

| Tipo | Arquivo | Status |
|------|---------|--------|
| Test | tests/Feature/Auth/AlterarSenhaTest.php | Concluido |
| Action | app/Actions/Auth/AlterarSenha.php | Concluido |
| Controller | app/Http/Controllers/Auth/Senha/Update.php | Concluido |
| Request | app/Http/Requests/Auth/AlterarSenhaRequest.php | Concluido |
| Routes | routes/api.php | Modificado |

### Frontend

| Tipo | Arquivo | Status |
|------|---------|--------|
| Vue | front/src/views/perfil/PerfilView.vue | Concluido |
| Vue | front/src/views/perfil/AlterarSenhaView.vue | Concluido |
| Router | front/src/router/index.ts | Modificado |
| Sidebar | front/src/components/layout/Sidebar.vue | Modificado |

---

## Metricas

| Metrica | Planejado | Realizado |
|---------|-----------|-----------|
| Testes | 6-8 | 8 |
| Actions | 1 | 1 |
| Controllers | 1 | 1 |
| Views Vue | 2 | 2 |

---

**Criado em:** 2026-03-22
**Ultima atualizacao:** 2026-03-22
**Concluido em:** 2026-03-22

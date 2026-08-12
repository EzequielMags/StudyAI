# StudyFlow AI

Plataforma de organização e acompanhamento de estudos. O objetivo é ajudar estudantes a gerenciar matérias, tópicos, metas, sessões de estudo, provas e disponibilidade semanal — com suporte futuro a recomendações inteligentes via IA.

> **Status:** em desenvolvimento. A base do backend e o modelo de dados já existem, mas a aplicação ainda não está funcional de ponta a ponta.

---

## Visão geral

O StudyFlow AI é dividido em dois pacotes:

| Pacote | Stack | Status |
|--------|-------|--------|
| `backend-node` | Node.js, TypeScript, Fastify, Prisma, PostgreSQL | Em progresso |
| `frontend-react` | React (planejado) | Não iniciado |

---

## Funcionalidades planejadas

- **Usuários** — cadastro, autenticação e perfil
- **Matérias e tópicos** — organização do conteúdo de estudo
- **Metas** — horas-alvo e prazos por tópico
- **Sessões de estudo** — registro de horários e anotações
- **Provas** — datas, dificuldade, notas e tópicos cobrados
- **Disponibilidade** — janelas de estudo por dia da semana
- **IA** — sugestões de cronograma e priorização (futuro)

---

## O que já foi feito

### Backend

- Modelagem do banco de dados com Prisma (PostgreSQL)
- Migração inicial aplicável via Prisma Migrate
- Estrutura modular por domínio (`controller` → `service` → `repository`)
- Módulo de **usuário** parcialmente implementado:
  - Repository com CRUD completo
  - Service com hash de senha (`bcryptjs`)
  - Controller com endpoint de criação
- Tratamento básico de erros (`ConflictError`)

### Ainda pendente

- Configuração e inicialização do servidor Fastify (`server.ts` vazio)
- Rotas REST para os demais módulos (pastas criadas, sem código)
- Autenticação (JWT ou similar)
- Scripts `dev` / `build` no `package.json`
- Frontend React
- Integração com IA

---

## Modelo de dados

```
Usuario
  ├── Materia
  │     └── Topico
  │           ├── Meta
  │           ├── SessaoEstudo
  │           └── ProvaTopico ←→ Prova
  └── DisponibilidadeEstudo
```

**Entidades principais:**

| Entidade | Descrição |
|----------|-----------|
| `Usuario` | Nome, e-mail e senha |
| `Materia` | Disciplina vinculada ao usuário |
| `Topico` | Assunto dentro de uma matéria |
| `Meta` | Horas-alvo e data limite por tópico |
| `SessaoEstudo` | Registro de estudo com horário e anotações |
| `Prova` | Prova com data, dificuldade e nota |
| `DisponibilidadeEstudo` | Horários disponíveis por dia da semana |

---

## Estrutura do projeto

```
StudyFlow AI/
├── backend-node/
│   ├── prisma/
│   │   ├── models/          # Schemas Prisma por entidade
│   │   └── migrations/      # Migrações do banco
│   └── src/
│       ├── modules/         # Módulos por domínio
│       ├── errors/          # Erros customizados
│       ├── prisma.ts        # Cliente Prisma
│       └── server.ts        # Entrada da API (a configurar)
└── frontend-react/          # Interface (a iniciar)
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [PostgreSQL](https://www.postgresql.org/)
- npm ou yarn

---

## Como rodar (backend)

```bash
# 1. Entrar na pasta do backend
cd backend-node

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
# Crie um arquivo .env na raiz de backend-node com:
# DATABASE_URL="postgresql://usuario:senha@localhost:5432/studyflow"

# 4. Gerar o client Prisma e aplicar migrações
npx prisma generate
npx prisma migrate dev

# 5. Iniciar o servidor (após configurar server.ts e scripts no package.json)
# npm run dev
```

---

## Stack técnica

**Backend**
- **Fastify** — servidor HTTP
- **Prisma 7** — ORM e migrações
- **PostgreSQL** — banco de dados
- **bcryptjs** — hash de senhas
- **TypeScript** — tipagem estática

**Frontend** *(planejado)*
- React

---

## Roadmap

- [ ] Finalizar servidor Fastify e registrar rotas
- [ ] Completar CRUD de usuários e demais módulos
- [ ] Implementar autenticação
- [ ] Iniciar frontend React
- [ ] Dashboard de progresso e metas
- [ ] Integração com IA para sugestão de cronograma

---

## Licença

A definir.

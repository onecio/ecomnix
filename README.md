# ECOMNIX

Plataforma de referência nacional em **democratização do crédito de carbono**.
Conteúdo educacional — não é oferta de crédito de carbono nem promessa de renda.

## Módulos

1. **Diagnóstico** — concentração do crédito de carbono no Brasil, com dados públicos citados.
2. **Biblioteca** — iniciativas (queimadas, matas ciliares, reflorestamento, economia circular, cidades).
3. **Calculadora** — pegada de carbono (transporte/energia/resíduos) em créditos simulados.
4. **Simulador de resgate** — simulação educativa do ciclo de vida do crédito (sem transação real).
5. **App móvel** — mockup navegável (smartphone/smartwatch), especificação funcional.
6. **Conhecimento** — base de conhecimento (21 capítulos do livro).

## Stack

React 18 · TypeScript (strict) · Vite 6 · react-router-dom (HashRouter) · recharts · Vitest.
Design system em CSS custom properties (tokens no `DESIGN.md`). Zero backend.

## Privacidade

Calculadora e simulador processam **100% no cliente** e **não persistem dados**. Nenhum dado
pessoal é coletado, transmitido ou armazenado.

## Desenvolvimento

```bash
npm install
npm run dev       # dev server
npm test          # vitest (motores)
npm run build     # tsc --noEmit + vite build → dist/
```

## Publicação

GitHub Pages via Actions (`.github/workflows/deploy.yml`). Domínio: `ecomnix.com.br`.
`base: './'` + HashRouter → funciona no domínio customizado e no subpath
`onecio.github.io/ecomnix/`.

## Documentação

- `ARCHITECTURE.md` — decisões de arquitetura e mapeamento da refatoração.
- `DESIGN.md` — tokens de design (fonte única de verdade).
- `docs/ECOMNIX_White_Paper.pdf` — white paper (conteúdo-fonte).

## Integridade dos dados

Todos os números factuais do Diagnóstico são citados com fonte verificada (ver
`src/data/painel.ts`). Não altere valores sem revalidar a fonte primária.

# ECOMNIX v2 — Arquitetura (proposta de refatoração)

Projeto **PI Optimus**. Refatoração da plataforma `brasil-regenerativo` (v1 "Carbono para
Todos") na **ECOMNIX v2** — plataforma de referência nacional em democratização de crédito
de carbono.

> Estado: proposta + esqueleto + motores interativos (calculadora e simulador) implementados
> e testados. Conteúdo final dos capítulos em elaboração pelo pesquisador.

## 1. Decisão de stack (recomendada)

**Manter React 18 + TypeScript (strict) + Vite 6 + HashRouter + recharts + Vitest.**

Racional:
- Os motores de cálculo já validados (`src/utils/carbon.ts`, `points.ts`) e 36 páginas de
  conteúdo verificado são React/TS — reusáveis de imediato.
- GitHub Pages (subpath) já funciona com `base: './'` + HashRouter (sem rewrites).
- recharts cobre o painel de diagnóstico (gráficos SVG acessíveis).
- Migrar para Astro seria uma **reescrita**, não uma refatoração, e descartaria trabalho
  validado em produção. Astro só valeria se o peso do conteúdo (livro) dominasse e a
  interatividade fosse mínima — não é o caso (calculadora/simulador são ricos).

Alternativa considerada e descartada por ora: Astro 7 + React islands (melhor para MDX em
massa, pior para reaproveitar os 36 módulos e os motores existentes).

## 2. Estrutura de módulos (6 rotas)

```
/src
  /modules
    1-diagnostico/     Painel de Diagnóstico (dados públicos de concentração de créditos)
    2-biblioteca/      Biblioteca de iniciativas (queimadas, matas ciliares,
                       reflorestamento, economia circular, cidades)
    3-calculadora/     Calculadora de pegada (transporte/energia/resíduos → créditos simulados)
    4-simulador/       Simulador de resgate (educativo, NÃO transação real)
    5-app/             Mockup navegável de app móvel (smartphone/smartwatch)
    6-conhecimento/    Base de conhecimento (capítulos do livro)
  /engine             Motores puros (framework-agnostic, testáveis)
  /components          UI compartilhada (NatureTag, SourceRef, FichaTecnica, Sim, …)
  /data                Fontes, dados do painel, iniciativas
  /styles              Design tokens + CSS custom properties
```

Mapeamento do v1 → v2 (reuso, não re-hospedagem):
- Painel → 1-diagnostico · Iniciativas dispersas → 2-biblioteca · Pegada → 3-calculadora
- Wallet/Pontos → 4-simulador · AppEmulator+Smartwatch → 5-app · páginas educativas → 6-conhecimento

## 3. Privacidade (requisito obrigatório)

- Calculadora e simulador processam **100% no cliente** (funções puras, sem I/O).
- **Sem persistência** para esses dois módulos (deliberadamente mais restrito que o v1, que
  usava LocalStorage para o wallet): resultado é efêmero e some ao recarregar.
- Nenhum dado pessoal sensível é coletado, transmitido ou armazenado. Zero backend.
- Aviso educacional embutido: "crédito simulado ≠ crédito certificado; redução estimada ≠
  medição".

## 4. Modelo de conteúdo (capítulos do livro)

- Capítulos em Markdown (arquivos `.md` em `src/modules/6-conhecimento/capitulos/`).
- Renderização **segura**: `react-markdown` sem HTML bruto (sem `dangerouslySetInnerHTML`,
  sem `innerHTML`) — mantém a garantia de 0 XSS do SECURITY-REPORT v1.
- Frontmatter por capítulo: `slug`, `titulo`, `ordem`, `resumo`, `fontes[]`.
- A biblioteca (módulo 2) usa o mesmo padrão: fichas de iniciativa em Markdown/TS tipado.

## 5. Design tokens

`DESIGN.md` (raiz) é a fonte única de verdade dos tokens (cores, tipografia, espaçamento,
componentes). Exportável para Tailwind/DTCG via `npx @google/design.md`. Paleta "Amazônia +
terra" (ver tokens). Evita estética genérica; reaproveita a direção "observatório de dados"
já validada no v2.2.

## 6. Publicação

GitHub Pages (project site `onecio.github.io/ecomnix/`), workflow de deploy com testes+build.
`base` hardcoded no `vite.config.ts`.

## 7. Acessibilidade

Alvo **WCAG 2.2 AA** (supera o requisito WCAG 2.1 AA): skip-link, landmarks, `:focus-visible`,
`aria-pressed`/`aria-label`, `prefers-reduced-motion`, contraste AA, navegação por teclado.

## 8. Decisões pendentes (preciso de você)

1. **Repositório**: novo repo `onecio/ecomnix` (limpo) vs. refatorar in-place no
   `brasil-regenerativo` (mantendo v1 como tag/archive). Recomendo repo novo.
2. **Identidade/brand**: confirmar nome, paleta e tom do DESIGN.md.
3. **Estrutura dos capítulos**: títulos/ordem para montar o índice da base de conhecimento.
4. **Dados do diagnóstico**: quais datasets/órgãos usar no painel (SBCE, SEEG, PRODES, B3…).

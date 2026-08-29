---
version: alpha
name: ECOMNIX
description: Amazônia profunda + terra brasileira. Editorial, técnico, confiável.
colors:
  primary: "#0E3B2E"
  secondary: "#2F6B4F"
  tertiary: "#C2571B"
  neutral: "#F6F3ED"
  ink: "#10231C"
typography:
  display:
    fontFamily: Sora
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Sora
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.25
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 12px
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 16px
---

## Overview

ECOMNIX comunica seriedade institucional e enraizamento brasileiro: o verde profundo da
Amazônia, o musgo das florestas, e o terra (âmbar queimado) do solo. Não é o "verde genérico"
de startup de clima — é editorial e técnico, como um observatório de dados com gravidade
jornalística.

## Colors

- **Primary (#0E3B2E):** verde-floresta profundo. Fundo de cabeçalhos, botões primários,
  superfícies escuras.
- **Secondary (#2F6B4F):** musgo/fern. Hover de primário, links em superfície clara.
- **Tertiary (#C2571B):** terra/âmbar. Único driver de destaque e ações de alta ênfase sobre
  fundo claro (usar em texto grande/UI, não em corpo pequeno sobre claro).
- **Neutral (#F6F3ED):** papel quente. Fundo padrão de leitura.
- **Ink (#10231C):** texto principal (quase-preto esverdeado), contraste AAA sobre neutral.

## Typography

Sora para títulos (display/h2), Inter para corpo, JetBrains Mono para dados, números e
fichas técnicas. Números de simulação e métricas SEMPRE em mono.

## Layout

Grades de 1 coluna (leitura) e 2 colunas (simulador: controles à esquerda, resultados à
direita). Largura máxima de leitura 900px; conteúdo editorial 720px.

## Elevation & Depth

3 níveis: `card` (sombra sutil), superfície elevada de resultados (borda + sombra média),
hero escuro (superfície primária). Sem exagero de sombra — a hierarquia vem de cor e tipografia.

## Shapes

Cantos levemente arredondados (4/8/16px). Botões e chips em `sm`, cards em `md`, containers
de destaque em `lg`.

## Components

- `button-primary`: fundo primary, texto branco. Única ação de alta ênfase.
- `card`: branco sobre neutral, borda fina, raio md.
- `chip`/`tag`: rótulos de natureza (DADO OBSERVADO / ESTIMATIVA / CENÁRIO / PROPOSTA /
  CONCEITO EXPERIMENTAL) — obrigatórios em todo conteúdo factual-hipotético.

## Do's and Don'ts

- Use mono para todo número de simulação e para fichas técnicas.
- Use `tertiary` com moderação, apenas para o que é acionável ou de alerta.
- Não use gradientes chamativos nem sombras pesadas.
- Não deixe conteúdo factual-hipotético sem sua etiqueta de natureza.

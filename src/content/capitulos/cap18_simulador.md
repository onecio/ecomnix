# Capítulo 18 — Simulador de acúmulo e resgate de créditos

> **Registro:** rascunho v1.0. Especificação funcional — implementada como Módulo 4 da
> plataforma ECOMNIX v2 (engine `resgate.ts`, motores em teste).

## 18.1 Objetivo

Demonstrar, de forma **lúdica e educativa**, como funciona a lógica de acumular e
resgatar créditos — sem que o usuário confunda simulação com transação real.

## 18.2 A mecânica

O usuário acumula "créditos simulados" (a partir da calculadora do Cap. 17 ou de
cenários pré-definidos) e os converte em **categorias de recompensa**:

- **Mobilidade** — passagens, bicicleta, transporte público.
- **Bem-estar** — hospedagem, experiências de turismo regenerativo.
- **Educação** — cursos, materiais.
- **Doação** — aporte a cooperativas e projetos comunitários (a destinação mais coerente
  com a tese do livro).

## 18.3 O aviso de não-transação (obrigatório)

A interface deve deixar **explícito e permanente** que se trata de **simulação
educativa**, não de uma transação real: nenhum valor é movimentado, nenhum crédito é
emitido, nenhum dado é persistido em servidor.

## 18.4 A função pedagógica

O simulador ensina três conceitos que estruturam o livro:

1. **Acúmulo** — a pegada reduzida "rende" crédito proporcional ao esforço.
2. **Resgate** — o crédito tem valor de uso social, não só financeiro.
3. **Integridade** — a simulação mostra que crédito sem adicionalidade e verificação
   "não vale" (o resgate é bloqueado para créditos sem lastro, ilustrando o MRV).

## 18.5 Por que simular e não transacionar

A escolha por simulação (e não por um marketplace real) é deliberada: um marketplace
real exigiria licença financeira, verificação de créditos e exporia usuários a risco de
greenwashing. A simulação entrega o valor educacional **sem** os riscos — e prepara o
terreno para um eventual mercado regulado futuro (SBCE).

## Fonte metodológica

- Lei nº 15.042/2024 (SBCE) — enquadramento do mercado regulado/voluntário.
- Cap. 15 deste livro — limites e riscos do crédito individual.

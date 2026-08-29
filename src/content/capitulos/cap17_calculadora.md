# Capítulo 17 — Calculadora de pegada gamificada

> **Registro:** rascunho v1.0. Especificação funcional — implementada como Módulo 3 da
> plataforma ECOMNIX v2 (engine `calculadora.ts`, motores em teste).

## 17.1 Objetivo

Transformar o conceito abstrato de "pegada de carbono" em uma **experiência mensurável
e engajadora** para o cidadão. A calculadora não é um fim em si: é a porta de entrada
educativa que conecta o indivíduo à transição (ver Cap. 15).

## 17.2 O que a calculadora mede

Três eixos de consumo cotidiano, com fatores de emissão de referência pública (GHG
Protocol / BNDES):

1. **Transporte** — km percorridos por modal (carro, ônibus, moto, bicicleta, a pé),
   com fatores por tipo de combustível.
2. **Energia** — consumo residencial (kWh/mês) e fonte da matriz.
3. **Resíduos** — geração de lixo (kg/mês) e percentual reciclado/compostado.

**Saída:** estimativa em **tCO₂e/ano** + equivalência em "créditos simulados"
(1 crédito = 1 tCO₂e), mais comparações pedagógicas ("equivale a X árvores/ano").

## 17.3 Camada de gamificação

Para engajar sem banalizar o problema:

- **Missões semanais** — trocar uma viagem de carro por bicicleta, reduzir consumo,
  separar recicláveis.
- **Marcos progressivos** — níveis de "descarbonização pessoal" com recompensas
  simbólicas (selos), nunca monetização real.
- **Feedback comparativo** — evolução do próprio usuário ao longo do tempo (não ranking
  entre pessoas, para evitar competição social).

## 17.4 Privacidade por desenho

Requisito não-negociável (briefing §6.3): **todo o cálculo roda no navegador do
usuário**, sem envio de dados a servidor, sem persistência e sem coleta de informação
pessoal sensível. A gamificação usa apenas estado local e opcional, mediante
consentimento explícito.

## 17.5 O que a calculadora NÃO faz

- Não emite crédito real nem transaciona valores.
- Não substitui a redução estrutural de emissões (a compensação individual é
  complementar, não substituta — Cap. 15).
- Não usa metodologia proprietária: os fatores são públicos e citáveis.

## Fonte metodológica

- BNDES — calculadoras públicas de emissões evitadas/removidas.
- GHG Protocol — fatores de emissão de referência.
- FGV — Registro Público de Emissões.

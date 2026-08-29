/** MÓDULO 6 — Base de Conhecimento: índice dos 21 capítulos do livro. */

export interface Capitulo {
  numero: number;
  parte: string;
  titulo: string;
}

export const CAPITULOS: Capitulo[] = [
  { numero: 1, parte: 'Parte I — Fundamentos', titulo: 'Emissões de GEE: origem e fontes' },
  { numero: 2, parte: 'Parte I — Fundamentos', titulo: 'Linha do tempo climática' },
  { numero: 3, parte: 'Parte I — Fundamentos', titulo: 'Consequências' },
  { numero: 4, parte: 'Parte I — Fundamentos', titulo: 'Por que mitigar compensa' },
  { numero: 5, parte: 'Parte II — O mercado', titulo: 'Como funciona um crédito de carbono (regulado/voluntário, MRV, SBCE)' },
  { numero: 6, parte: 'Parte II — O mercado', titulo: 'Diagnóstico de assimetria' },
  { numero: 7, parte: 'Parte II — O mercado', titulo: 'O paradoxo da conservação' },
  { numero: 8, parte: 'Parte III — Eixos de atuação', titulo: 'Biomas: Caatinga e Cerrado' },
  { numero: 9, parte: 'Parte III — Eixos de atuação', titulo: 'Matas ciliares' },
  { numero: 10, parte: 'Parte III — Eixos de atuação', titulo: 'Reflorestamento e desertificação' },
  { numero: 11, parte: 'Parte III — Eixos de atuação', titulo: 'Monitoramento tecnológico' },
  { numero: 12, parte: 'Parte III — Eixos de atuação', titulo: 'Ciência aplicada' },
  { numero: 13, parte: 'Parte III — Eixos de atuação', titulo: 'Economia circular urbana' },
  { numero: 14, parte: 'Parte III — Eixos de atuação', titulo: 'Cidades responsivas' },
  { numero: 15, parte: 'Parte III — Eixos de atuação', titulo: 'Crédito de carbono individual' },
  { numero: 16, parte: 'Parte III — Eixos de atuação', titulo: 'Modelos de financiamento' },
  { numero: 17, parte: 'Parte IV — Ferramentas', titulo: 'Calculadora de pegada gamificada' },
  { numero: 18, parte: 'Parte IV — Ferramentas', titulo: 'Simulador de acúmulo/resgate' },
  { numero: 19, parte: 'Parte IV — Ferramentas', titulo: 'Conceito de app móvel/smartwatch' },
  { numero: 20, parte: 'Fechamento', titulo: 'Estatísticas consolidadas por eixo' },
  { numero: 21, parte: 'Fechamento', titulo: 'Chamada à ação institucional' },
];

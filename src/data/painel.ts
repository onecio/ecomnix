/**
 * MÓDULO 1 — Painel de Diagnóstico (dados públicos).
 * Concentração do mercado voluntário de créditos de carbono no Brasil.
 * Todos os valores citados abaixo foram verificados nas fontes primárias.
 * ATENÇÃO anti-alucinação: não altere números sem revalidar a fonte.
 */

export interface Serie {
  label: string;
  value: number;
  unidade?: string;
  ano?: number | string;
  nota?: string;
}

/** Concentração por padrão de certificação (créditos nacionais). */
export const CONCENTRACAO_PADRAO: Serie[] = [
  { label: 'VCS (Verra)', value: 92.2, unidade: '%', nota: 'Padrão dominante do mercado voluntário' },
  { label: 'ACR', value: 6.0, unidade: '%', nota: 'American Carbon Registry' },
  { label: 'Gold Standard', value: 1.9, unidade: '%', nota: 'GS' },
];

/** Geração de créditos por projetos nacionais (milhões de créditos/ano). */
export const GERACAO_CREDITOS: Serie[] = [
  { label: '2018', value: 2.2, unidade: 'milhões', ano: 2018 },
  { label: '2021', value: 45.2, unidade: 'milhões', ano: 2021 },
];

/** Emissões brutas de GEE do Brasil por setor (2024, SEEG). */
export const EMISSOES_SETOR: Serie[] = [
  { label: 'Mudança de uso da terra', value: 42, unidade: '%', ano: 2024 },
  { label: 'Agropecuária', value: 29, unidade: '%', ano: 2024 },
  { label: 'Energia', value: 20, unidade: '%', ano: 2024 },
  { label: 'Resíduos', value: 5, unidade: '%', ano: 2024 },
  { label: 'Processos industriais', value: 4, unidade: '%', ano: 2024 },
];

/** Desmatamento da Amazônia Legal (PRODES/INPE, km²/ano). */
export const DESMATAMENTO: Serie[] = [
  { label: '2019', value: 10129, unidade: 'km²', ano: 2019 },
  { label: '2020', value: 10851, unidade: 'km²', ano: 2020 },
  { label: '2021', value: 13038, unidade: 'km²', ano: 2021 },
  { label: '2022', value: 11594, unidade: 'km²', ano: 2022 },
  { label: '2023', value: 9064, unidade: 'km²', ano: 2023 },
  { label: '2024', value: 6288, unidade: 'km²', ano: 2024 },
];

export const INDICADORES: Serie[] = [
  { label: 'Emissões brutas totais do Brasil', value: 2.145, unidade: 'Gt CO₂e', ano: 2024 },
  { label: 'Emissões líquidas do Brasil', value: 1.489, unidade: 'Gt CO₂e', ano: 2024 },
  { label: 'Renováveis na matriz elétrica', value: 88.2, unidade: '%', ano: 2024 },
  { label: 'Créditos VCS emitidos (global, acumulado)', value: 1300, unidade: 'milhões', ano: 2025 },
];

export interface Fonte {
  instituicao: string;
  titulo: string;
  ano: number | string;
  url: string;
}

export const FONTES_DIAGNOSTICO: Fonte[] = [
  {
    instituicao: 'FGV Agro / OCBio (Observatório de Bioeconomia)',
    titulo: 'O avanço do mercado voluntário de carbono no Brasil: desafios estruturais, técnicos e científicos',
    ano: '05/2022',
    url: 'https://agro.fgv.br/publicacao/ocbio-o-avanco-do-mercado-voluntario-de-carbono-no-brasil-desafios-estruturais-tecnicos',
  },
  {
    instituicao: 'Berkeley Carbon Trading Project (UC Berkeley)',
    titulo: 'Voluntary Registry Offsets Database (base dos percentuais por padrão)',
    ano: 2022,
    url: 'https://gspp.berkeley.edu/research-and-impact/centers/cepp/projects/berkeley-carbon-trading-project',
  },
  {
    instituicao: 'Ecosystem Marketplace',
    titulo: 'State of the Voluntary Carbon Markets (geração de créditos 2018–2021)',
    ano: 2021,
    url: 'https://www.ecosystemmarketplace.com/',
  },
  {
    instituicao: 'Observatório do Clima / SEEG',
    titulo: 'SEEG — Sistema de Estimativas de Emissões e Remoções de GEE (13ª edição)',
    ano: 2024,
    url: 'https://seeg.eco.br/',
  },
  {
    instituicao: 'INPE',
    titulo: 'PRODES — Monitoramento do Desmatamento da Amazônia Legal por Satélite',
    ano: 2024,
    url: 'https://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates',
  },
  {
    instituicao: 'Verra',
    titulo: 'Verified Carbon Standard (VCS) Program — emissões/acumulado de VCUs',
    ano: 2025,
    url: 'https://verra.org/programs/verified-carbon-standard/',
  },
];

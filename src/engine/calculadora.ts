/**
 * ECOMNIX v2 — Módulo 3: Calculadora de pegada de carbono (educacional).
 *
 * Processamento 100% no cliente. Função pura, sem I/O, sem persistência.
 * Nenhum dado pessoal é coletado ou transmitido.
 *
 * Unidade de referência: 1 "crédito simulado" ≡ 1 tCO₂e.
 * ATENÇÃO: crédito simulado NÃO é crédito de carbono certificado.
 * Todos os fatores são estimativas de ordem de grandeza (educacionais).
 */

export type Combustivel = 'gasolina' | 'etanol' | 'diesel' | 'eletrico';

export interface FatorEmissao {
  kgPorUnidade: number;
  fonte: string;
}

/** kg CO₂e por km (carro particular). Faixas nacionais, ordem de grandeza. */
export const TRANSPORTE_CARRO: Record<Combustivel, FatorEmissao> = {
  gasolina: { kgPorUnidade: 0.18, fonte: 'faixa nacional (EPE/DEFRA)' },
  etanol: { kgPorUnidade: 0.11, fonte: 'faixa nacional (EPE/DEFRA)' },
  diesel: { kgPorUnidade: 0.19, fonte: 'faixa nacional (EPE/DEFRA)' },
  eletrico: { kgPorUnidade: 0.012, fonte: 'matriz elétrica BR (SIN)' },
};

/** kg CO₂e por km (ou por passageiro-km). Ordem de grandeza. */
export const MOBILIDADE: Record<string, FatorEmissao> = {
  moto: { kgPorUnidade: 0.085, fonte: 'por km' },
  onibus: { kgPorUnidade: 0.1, fonte: 'por passageiro-km' },
  metro: { kgPorUnidade: 0.028, fonte: 'por passageiro-km (matriz elétrica BR)' },
  aviao: { kgPorUnidade: 0.18, fonte: 'doméstico, por passageiro-km' },
  bike: { kgPorUnidade: 0, fonte: 'zero emissão direta' },
  caminhada: { kgPorUnidade: 0, fonte: 'zero emissão direta' },
};

/** Fator médio do SIN (sistema elétrico brasileiro), conservador. */
export const FATOR_ELETRICO_SIN = 0.1; // t CO₂e/MWh = 0,10 kg CO₂e/kWh

export const GLP_KG_CO2E = 3.0; // kg CO₂e por kg de GLP (queima)
export const KG_GLP_POR_BOTIJAO = 13; // botijão residencial padrão (P13)

/** kg CO₂e por kg de material. */
export const RESIDUO_ATERRO_KGCO2E = 0.5; // orgânico em aterro (CH4)
export const RESIDUO_RECICLAGEM_EVITADO = 0.5; // evitado por kg reciclado (média educacional)

export const CREDITO_SIMULADO_TCO2E = 1; // 1 crédito simulado = 1 tCO₂e

export interface CalculadoraInput {
  combustivel: Combustivel;
  carroKmAno: number;
  motoKmAno: number;
  onibusKmAno: number;
  metroKmAno: number;
  aviaoKmAno: number;
  bikeKmAno: number;
  caminhadaKmAno: number;
  kwhMes: number;
  botijoesGLPMes: number;
  kgResiduosMes: number;
  pctReciclado: number; // 0..100
}

export interface CategoriaResultado {
  rotulo: string;
  kgAno: number; // kg CO₂e por ano
  fonte: string;
}

export interface CalculadoraResultado {
  categorias: CategoriaResultado[];
  totalKgAno: number;
  totalTonAno: number; // tCO₂e/ano
  creditosSimulados: number; // 1 crédito = 1 tCO₂e
}

export function calcularPegada(i: CalculadoraInput): CalculadoraResultado {
  const carro = Math.max(i.carroKmAno, 0) * TRANSPORTE_CARRO[i.combustivel].kgPorUnidade;
  const moto = Math.max(i.motoKmAno, 0) * MOBILIDADE.moto.kgPorUnidade;
  const onibus = Math.max(i.onibusKmAno, 0) * MOBILIDADE.onibus.kgPorUnidade;
  const metro = Math.max(i.metroKmAno, 0) * MOBILIDADE.metro.kgPorUnidade;
  const aviao = Math.max(i.aviaoKmAno, 0) * MOBILIDADE.aviao.kgPorUnidade;
  const transporteKg = carro + moto + onibus + metro + aviao;

  // Eletricidade: kWh/ano × 0,10 kg/kWh
  const eletricidadeKg = Math.max(i.kwhMes, 0) * 12 * FATOR_ELETRICO_SIN;
  // GLP: botijões/ano × 13 kg × 3,0 kg CO₂e/kg
  const glpKg = Math.max(i.botijoesGLPMes, 0) * 12 * KG_GLP_POR_BOTIJAO * GLP_KG_CO2E;
  const energiaKg = eletricidadeKg + glpKg;

  // Resíduos: aterro − reciclagem (crédito educacional)
  const kgResiduosAno = Math.max(i.kgResiduosMes, 0) * 12;
  const pct = Math.min(Math.max(i.pctReciclado, 0), 100);
  const kgReciclado = kgResiduosAno * (pct / 100);
  const kgAterro = kgResiduosAno - kgReciclado;
  const residuosKg = kgAterro * RESIDUO_ATERRO_KGCO2E - kgReciclado * RESIDUO_RECICLAGEM_EVITADO;

  const totalKg = transporteKg + energiaKg + residuosKg;
  const totalTon = totalKg / 1000;
  const creditos = totalTon / CREDITO_SIMULADO_TCO2E;

  return {
    categorias: [
      { rotulo: 'Transporte', kgAno: transporteKg, fonte: 'TRANSPORTE_CARRO / MOBILIDADE' },
      { rotulo: 'Energia', kgAno: energiaKg, fonte: 'FATOR_ELETRICO_SIN + GLP' },
      { rotulo: 'Resíduos (líquido)', kgAno: residuosKg, fonte: 'RESIDUO_*' },
    ],
    totalKgAno: Math.max(totalKg, 0),
    totalTonAno: Math.max(totalTon, 0),
    creditosSimulados: Math.max(creditos, 0),
  };
}

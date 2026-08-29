import { CAPITULOS } from '../data/capitulos';

import cap01 from './capitulos/cap01_gee.md?raw';
import cap02 from './capitulos/cap02_timeline.md?raw';
import cap03 from './capitulos/cap03_consequencias.md?raw';
import cap04 from './capitulos/cap04_mitigacao.md?raw';
import cap05 from './capitulos/cap05_credito_sbce.md?raw';
import cap06 from './capitulos/cap06_assimetria.md?raw';
import cap07 from './capitulos/cap07_paradoxo.md?raw';
import cap08 from './capitulos/cap08_biomas.md?raw';
import cap09 from './capitulos/cap09_matas_ciliares.md?raw';
import cap10 from './capitulos/cap10_reflorestamento.md?raw';
import cap11 from './capitulos/cap11_monitoramento.md?raw';
import cap12 from './capitulos/cap12_ciencia_aplicada.md?raw';
import cap13 from './capitulos/cap13_economia_circular.md?raw';
import cap14 from './capitulos/cap14_cidades.md?raw';
import cap15 from './capitulos/cap15_credito_individual.md?raw';
import cap16 from './capitulos/cap16_financiamento.md?raw';
import cap17 from './capitulos/cap17_calculadora.md?raw';
import cap18 from './capitulos/cap18_simulador.md?raw';
import cap19 from './capitulos/cap19_app_movel.md?raw';
import cap20 from './capitulos/cap20_estatisticas.md?raw';
import cap21 from './capitulos/cap21_chamada_acao.md?raw';

const CONTEUDO: Record<string, string> = {
  cap01,
  cap02,
  cap03,
  cap04,
  cap05,
  cap06,
  cap07,
  cap08,
  cap09,
  cap10,
  cap11,
  cap12,
  cap13,
  cap14,
  cap15,
  cap16,
  cap17,
  cap18,
  cap19,
  cap20,
  cap21,
};

export interface CapituloCompleto {
  numero: number;
  parte: string;
  titulo: string;
  slug: string;
  conteudo: string;
}

export const CAPITULOS_COMPLETOS: CapituloCompleto[] = CAPITULOS.map((c) => ({
  numero: c.numero,
  parte: c.parte,
  titulo: c.titulo,
  slug: `cap${String(c.numero).padStart(2, '0')}`,
  conteudo: CONTEUDO[`cap${String(c.numero).padStart(2, '0')}`] ?? '',
}));

export function capituloPorNumero(numero: number): CapituloCompleto | undefined {
  return CAPITULOS_COMPLETOS.find((c) => c.numero === numero);
}

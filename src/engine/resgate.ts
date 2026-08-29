/**
 * ECOMNIX v2 — Módulo 4: Simulador de resgate (educativo).
 *
 * SIMULAÇÃO. Nenhuma transação real, nenhum crédito certificado, nenhum valor monetário.
 * Função pura, 100% no cliente, sem persistência — resultado some ao recarregar.
 *
 * Demonstra a MECÂNICA do ciclo de vida de um crédito de carbono (compensar, aportar,
 * aposentar, doar) para fins de educação, sem qualquer efeito jurídico ou financeiro.
 */

export type TipoResgate = 'compensar' | 'projeto' | 'aposentar' | 'doar';

export interface TipoDescricao {
  rotulo: string;
  descricao: string;
}

export const TIPOS_RESGATE: Record<TipoResgate, TipoDescricao> = {
  compensar: {
    rotulo: 'Compensar minha pegada',
    descricao: 'Retira créditos simulados para neutralizar a pegada calculada.',
  },
  projeto: {
    rotulo: 'Aportar em projeto',
    descricao: 'Aloca créditos simulados a uma iniciativa (reflorestamento, matas ciliares).',
  },
  aposentar: {
    rotulo: 'Aposentar (retire)',
    descricao: 'Aposenta permanentemente os créditos simulados — sem reuso.',
  },
  doar: {
    rotulo: 'Doar',
    descricao: 'Transfere créditos simulados a outro agente (simulado).',
  },
};

/** Ordens de grandeza educacionais (NÃO fatores oficiais). */
export const ARVORES_POR_TCO2E = 48; // árvores/ano por tCO₂e
export const KM_CARRO_POR_TCO2E = 5556; // km de carro a gasolina por tCO₂e (1000/0,18)

export interface ResgateInput {
  creditosDisponiveis: number; // créditos simulados (ex.: vindos da calculadora)
  tipo: TipoResgate;
  quantidade: number; // quantos resgatar
}

export interface ResgateResultado {
  ok: boolean;
  erro?: string;
  tipo: TipoResgate;
  rotuloTipo: string;
  creditosUsados: number;
  creditosRestantes: number;
  arvoresEquivalentes: number;
  kmCarroEquivalentes: number;
  avisoEducacional: string;
}

const AVISO =
  'Simulação educativa — não há transação real, crédito certificado ou valor monetário envolvido.';

export function simularResgate(i: ResgateInput): ResgateResultado {
  const disponiveis = Math.max(i.creditosDisponiveis, 0);
  const q = Math.max(i.quantidade, 0);
  const tipo = TIPOS_RESGATE[i.tipo];

  const base = {
    tipo: i.tipo,
    rotuloTipo: tipo.rotulo,
    creditosUsados: 0,
    creditosRestantes: disponiveis,
    arvoresEquivalentes: 0,
    kmCarroEquivalentes: 0,
    avisoEducacional: AVISO,
  };

  if (q <= 0) {
    return { ...base, ok: false, erro: 'Quantidade deve ser maior que zero.' };
  }
  if (q > disponiveis) {
    return {
      ...base,
      ok: false,
      erro: 'Quantidade excede os créditos simulados disponíveis.',
    };
  }

  return {
    ...base,
    ok: true,
    creditosUsados: q,
    creditosRestantes: disponiveis - q,
    arvoresEquivalentes: q * ARVORES_POR_TCO2E,
    kmCarroEquivalentes: q * KM_CARRO_POR_TCO2E,
  };
}

/** Mapeamento capítulo → ilustração (extraído do manifest.json do pacote de imagens). */

export interface IlustracaoInfo {
  numero: number;
  slug: string;
  titulo: string;
  tema: string;
}

export const ILUSTRACOES: IlustracaoInfo[] = [
  { numero: 1, slug: 'emissions', titulo: 'Emissões de GEE — orçamento de carbono', tema: 'Atmosfera como conta, calor retido e cinco setores emissores' },
  { numero: 2, slug: 'timeline', titulo: 'Linha do tempo climática', tema: 'Emissão hoje e consequência décadas depois; inércia climática' },
  { numero: 3, slug: 'consequences', titulo: 'Consequências', tema: 'Eventos extremos, biodiversidade, água e alimento, deslocamento' },
  { numero: 4, slug: 'balance', titulo: 'Por que mitigar compensa', tema: 'Balança entre custo pesado da inação e custo leve da mitigação' },
  { numero: 5, slug: 'credit', titulo: 'Como funciona um crédito', tema: 'MRV, mercado regulado e voluntário, registro público de ativos' },
  { numero: 6, slug: 'asymmetry', titulo: 'Diagnóstico de assimetria', tema: 'Concentração de benefícios e exclusão de pequenos participantes' },
  { numero: 7, slug: 'paradox', titulo: 'Paradoxo da conservação', tema: 'Quem conserva recebe menos enquanto exploração acessa capital' },
  { numero: 8, slug: 'fire', titulo: 'Biomas Caatinga e Cerrado', tema: 'Fogo, prevenção, combate e manejo integrado' },
  { numero: 9, slug: 'river', titulo: 'Matas ciliares', tema: 'Rios, enchentes, assoreamento e segurança hídrica' },
  { numero: 10, slug: 'reforest', titulo: 'Reflorestamento e desertificação', tema: 'Árvores retornando e comunidades como protagonistas' },
  { numero: 11, slug: 'monitor', titulo: 'Monitoramento tecnológico', tema: 'Satélites, drones, torres e brigadas comunitárias' },
  { numero: 12, slug: 'science', titulo: 'Ciência aplicada', tema: 'Biodigestores, metano entérico, catalisadores e pesquisa universitária' },
  { numero: 13, slug: 'circular', titulo: 'Economia circular urbana', tema: 'Cooperativas de reciclagem, hidrogênio verde e energia solar compartilhada' },
  { numero: 14, slug: 'cities', titulo: 'Cidades responsivas', tema: 'Aterros, arborização urbana e rios urbanos recuperados' },
  { numero: 15, slug: 'individual', titulo: 'Crédito individual', tema: 'Aplicativo de pegada, mobilidade ativa, compostagem e resgate' },
  { numero: 16, slug: 'finance', titulo: 'Modelos de financiamento', tema: 'Bancos de fomento, poder público e repasse cooperativo' },
  { numero: 17, slug: 'calculator', titulo: 'Calculadora de pegada gamificada', tema: 'Interface lúdica para cálculo de pegada e progresso' },
  { numero: 18, slug: 'simulator', titulo: 'Simulador de acúmulo e resgate', tema: 'Créditos convertidos em recompensas em simulação educativa' },
  { numero: 19, slug: 'devices', titulo: 'Aplicativo móvel e smartwatch', tema: 'Monitoramento integrado no celular e no pulso' },
  { numero: 20, slug: 'dashboard', titulo: 'Estatísticas consolidadas', tema: 'Panorama de impacto por eixo em infográfico' },
  { numero: 21, slug: 'action', titulo: 'Chamada à ação', tema: 'Governo, bancos, universidades e sociedade civil agindo em conjunto' },
];

export function ilustracaoPorNumero(numero: number): IlustracaoInfo | undefined {
  return ILUSTRACOES.find((i) => i.numero === numero);
}

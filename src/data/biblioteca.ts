/** MÓDULO 2 — Biblioteca de Iniciativas: os 5 eixos da Parte III. */

export interface Eixo {
  slug: string;
  titulo: string;
  descricao: string;
  capitulo: number;
}

export const EIXOS: Eixo[] = [
  {
    slug: 'queimadas',
    titulo: 'Queimadas e prevenção',
    descricao: 'Monitoramento, brigadas comunitárias e redução de incêndios florestais como fonte de emissões evitadas.',
    capitulo: 8,
  },
  {
    slug: 'matas-ciliares',
    titulo: 'Matas ciliares',
    descricao: 'Restauração de áreas de preservação permanente ao longo de cursos d\u2019água, proteção de nascentes e serviços ecossistêmicos.',
    capitulo: 9,
  },
  {
    slug: 'reflorestamento',
    titulo: 'Reflorestamento e desertificação',
    descricao: 'Recuperação de áreas degradadas, combate à desertificação e remoção de carbono por restauração florestal.',
    capitulo: 10,
  },
  {
    slug: 'economia-circular',
    titulo: 'Economia circular urbana',
    descricao: 'Resíduos, reciclagem inclusiva (catadores), compostagem e fechamento de ciclos materiais nas cidades.',
    capitulo: 13,
  },
  {
    slug: 'cidades-responsivas',
    titulo: 'Cidades responsivas',
    descricao: 'Infraestrutura urbana de baixo carbono, mobilidade, energia e resiliência climática local.',
    capitulo: 14,
  },
];

export type NatureKind = 'observado' | 'estimativa' | 'cenario' | 'proposta' | 'conceito';

const LABELS: Record<NatureKind, string> = {
  observado: 'Dado observado',
  estimativa: 'Estimativa',
  cenario: 'Cenário',
  proposta: 'Proposta',
  conceito: 'Conceito experimental',
};

export default function NatureTag({ kind }: { kind: NatureKind }) {
  return (
    <span className={`nature-tag nature-tag--${kind}`} title="Natureza da informação exibida">
      {LABELS[kind]}
    </span>
  );
}

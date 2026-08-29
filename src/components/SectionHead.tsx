import type { ReactNode } from 'react';

interface Props {
  kicker?: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
}

export default function SectionHead({ kicker, title, lede, children }: Props) {
  return (
    <div style={{ maxWidth: 760, marginBottom: 24 }}>
      {kicker && (
        <p
          className="mono"
          style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.75rem', color: 'var(--tertiary)', margin: 0 }}
        >
          {kicker}
        </p>
      )}
      <h1 style={{ marginTop: 4 }}>{title}</h1>
      {lede && <p style={{ color: 'var(--ink-soft)', fontSize: '1.05rem' }}>{lede}</p>}
      {children && <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{children}</div>}
    </div>
  );
}

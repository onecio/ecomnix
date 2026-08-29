/** Controles reutilizáveis de simulador (acessíveis). */

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}

export function SliderCtl({ label, value, min, max, step, unit = '', onChange }: SliderProps) {
  return (
    <div className="ctl">
      <label className="ctl__label" htmlFor={`slider-${label.replace(/\s+/g, '-')}`}>
        <span>{label}</span>
        <span className="ctl__value">
          {value.toLocaleString('pt-BR')} {unit}
        </span>
      </label>
      <input
        id={`slider-${label.replace(/\s+/g, '-')}`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

interface ChipProps<T extends string> {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}

export function ChipGroup<T extends string>({ label, value, onChange, options }: ChipProps<T>) {
  return (
    <div className="ctl">
      <span className="ctl__label">
        <span>{label}</span>
      </span>
      <div className="chips" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className="chip-btn"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

interface ResultProps {
  label: string;
  value: string;
  kind?: 'amber' | 'green' | 'default';
  hint?: string;
}

export function ResultCard({ label, value, kind = 'default', hint }: ResultProps) {
  const cls = kind === 'amber' ? 'stat--amber' : kind === 'green' ? 'stat--green' : '';
  return (
    <div className="card">
      <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{label}</p>
      <div className={`stat ${cls}`}>{value}</div>
      {hint && <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: 'var(--ink-faint)' }}>{hint}</p>}
    </div>
  );
}

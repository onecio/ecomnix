import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts';
import SectionHead from '../../components/SectionHead';
import NatureTag from '../../components/NatureTag';
import {
  CONCENTRACAO_PADRAO,
  EMISSOES_SETOR,
  DESMATAMENTO,
  INDICADORES,
  FONTES_DIAGNOSTICO,
} from '../../data/painel';

const PIE_COLORS = ['#0e3b2e', '#2f6b4f', '#c2571b'];

export default function Diagnostico() {
  return (
    <section className="section page-top">
      <div className="wrap">
        <SectionHead
          kicker="Módulo 01 · Diagnóstico"
          title="A concentração do crédito de carbono no Brasil"
          lede={
            <>
              O mercado voluntário brasileiro é dominado por um único padrão de certificação.
              Este painel usa dados públicos para mostrar a assimetria — o ponto de partida do
              argumento de democratização.
            </>
          }
        >
          <NatureTag kind="observado" />
          <span className="chip">Dados públicos com fonte citada</span>
        </SectionHead>

        <div className="grid grid--2">
          <div className="card">
            <h3>Créditos nacionais por padrão</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
              92,2% dos créditos brasileiros foram certificados pelo padrão VCS (Verra).
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie data={CONCENTRACAO_PADRAO} dataKey="value" nameKey="label" cx="50%" cy="50%" innerRadius={50} outerRadius={90} paddingAngle={2}>
                  {CONCENTRACAO_PADRAO.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number | string) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <table className="table">
              <thead>
                <tr>
                  <th>Padrão</th>
                  <th className="num">%</th>
                </tr>
              </thead>
              <tbody>
                {CONCENTRACAO_PADRAO.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td className="num">{s.value.toLocaleString('pt-BR')}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Emissões do Brasil por setor (2024)</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
              Total bruto: 2,145 Gt CO₂e (SEEG). Mudança de uso da terra lidera.
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={EMISSOES_SETOR} margin={{ left: 8 }}>
                <XAxis dataKey="label" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" height={60} />
                <YAxis unit="%" tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number | string) => `${v}%`} />
                <Bar dataKey="value" fill="#2f6b4f" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid--2" style={{ marginTop: 16 }}>
          <div className="card">
            <h3>Desmatamento da Amazônia Legal (km²/ano)</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>PRODES/INPE — queda recente, patamar ainda alto.</p>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={DESMATAMENTO} margin={{ left: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2ddd3" />
                <XAxis dataKey="label" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#c2571b" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card">
            <h3>Indicadores de contexto</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th className="num">Valor</th>
                </tr>
              </thead>
              <tbody>
                {INDICADORES.map((s) => (
                  <tr key={s.label}>
                    <td>{s.label}</td>
                    <td className="num">
                      {s.value.toLocaleString('pt-BR')} {s.unidade}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="callout callout--warn" style={{ marginTop: 24 }}>
          <strong>Leitura do diagnóstico.</strong> A concentração em um único padrão (92,2% VCS)
          contrasta com a dispersão territorial e social dos serviços ecossistêmicos que geram os
          créditos. A democratização passa por governança, transparência e inclusão — temas da
          Parte II e III do livro.
        </div>

        <div className="ficha" style={{ marginTop: 24 }}>
          <h3>Fontes (verificadas)</h3>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {FONTES_DIAGNOSTICO.map((f) => (
              <li key={f.url} style={{ marginBottom: 8 }}>
                <strong>{f.instituicao}</strong> — {f.titulo} ({f.ano}).{' '}
                <a href={f.url} target="_blank" rel="noreferrer">
                  {f.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

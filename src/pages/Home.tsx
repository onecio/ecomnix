import { Link } from 'react-router-dom';

const MODULOS = [
  { to: '/diagnostico', num: '01', titulo: 'Diagnóstico', desc: 'Concentração de créditos de carbono no Brasil, com dados públicos citados.' },
  { to: '/biblioteca', num: '02', titulo: 'Biblioteca', desc: 'Iniciativas: queimadas, matas ciliares, reflorestamento, economia circular, cidades.' },
  { to: '/calculadora', num: '03', titulo: 'Calculadora', desc: 'Pegada de carbono (transporte, energia, resíduos) em créditos simulados.' },
  { to: '/simulador', num: '04', titulo: 'Simulador de resgate', desc: 'Simulação educativa do ciclo de vida de um crédito — sem transação real.' },
  { to: '/app', num: '05', titulo: 'App móvel', desc: 'Mockup navegável de smartphone e smartwatch (especificação funcional).' },
  { to: '/conhecimento', num: '06', titulo: 'Conhecimento', desc: 'Base de conhecimento — os 21 capítulos do livro.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="mono" style={{ textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
            Inteligência regenerativa
          </p>
          <h1 style={{ marginTop: 8 }}>
            Democratizar o crédito de carbono no Brasil
          </h1>
          <p>
            A ECOMNIX é uma plataforma de referência nacional que diagnostica a concentração do
            mercado, educa sobre a pegada e o ciclo de vida do crédito, e aponta caminhos de
            inclusão — com dados citados e processamento no cliente.
          </p>
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="num">92,2%</div>
              <div className="lbl">dos créditos nacionais sob um único padrão (VCS/Verra)</div>
            </div>
            <div className="hero__stat">
              <div className="num">45,2 mi</div>
              <div className="lbl">créditos gerados em 2021 (vs 2,2 mi em 2018)</div>
            </div>
            <div className="hero__stat">
              <div className="num">2,145 Gt</div>
              <div className="lbl">emissões brutas do Brasil em 2024 (SEEG)</div>
            </div>
          </div>
          <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="btn btn--tertiary" to="/diagnostico">Ver o diagnóstico</Link>
            <Link className="btn btn--ghost" to="/calculadora" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.6)' }}>
              Calcular minha pegada
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Módulos</h2>
          <p style={{ color: 'var(--ink-soft)' }}>Seis frentes, uma plataforma.</p>
          <div className="module-nav">
            {MODULOS.map((m) => (
              <Link key={m.to} className="module-card" to={m.to}>
                <span className="num">{m.num}</span>
                <h3>{m.titulo}</h3>
                <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.9rem' }}>{m.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

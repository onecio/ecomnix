import SectionHead from '../../components/SectionHead';
import { EIXOS } from '../../data/biblioteca';

export default function Biblioteca() {
  return (
    <section className="section page-top">
      <div className="wrap">
        <SectionHead
          kicker="Módulo 02 · Biblioteca"
          title="Biblioteca de iniciativas"
          lede="Cinco eixos de atuação (Parte III do livro), da prevenção de queimadas à cidade regenerativa."
        />

        <div className="module-nav">
          {EIXOS.map((e) => (
            <div className="card" key={e.slug}>
              <span className="num" style={{ fontFamily: 'var(--font-mono)', color: 'var(--tertiary)', fontSize: '0.8rem' }}>
                Cap. {e.capitulo}
              </span>
              <h3 style={{ marginTop: 4 }}>{e.titulo}</h3>
              <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.9rem' }}>{e.descricao}</p>
            </div>
          ))}
        </div>

        <div className="callout" style={{ marginTop: 24 }}>
          <strong>Status:</strong> as fichas detalhadas de cada iniciativa serão preenchidas em
          paralelo à redação dos capítulos (conteúdo em elaboração pelo pesquisador).
        </div>
      </div>
    </section>
  );
}

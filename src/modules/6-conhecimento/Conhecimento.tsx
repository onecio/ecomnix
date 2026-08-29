import SectionHead from '../../components/SectionHead';
import { CAPITULOS } from '../../data/capitulos';

export default function Conhecimento() {
  const partes = Array.from(new Set(CAPITULOS.map((c) => c.parte)));
  return (
    <section className="section page-top">
      <div className="wrap wrap--narrow">
        <SectionHead
          kicker="Módulo 06 · Conhecimento"
          title="Base de conhecimento"
          lede="Os 21 capítulos do livro ECOMNIX, organizados em quatro partes e fechamento. Conteúdo em redação pelo pesquisador."
        />

        {partes.map((parte) => (
          <div key={parte}>
            <h3 className="chapter-part">{parte}</h3>
            <ol className="chapter-list">
              {CAPITULOS.filter((c) => c.parte === parte).map((c) => (
                <li key={c.numero}>
                  <span className="num">{String(c.numero).padStart(2, '0')}</span>
                  <span>{c.titulo}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}

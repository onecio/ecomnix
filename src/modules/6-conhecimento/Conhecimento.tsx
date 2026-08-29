import SectionHead from '../../components/SectionHead';
import Markdown from '../../components/Markdown';
import Ilustracao from '../../components/Ilustracao';
import { CAPITULOS_COMPLETOS } from '../../content/capitulos';
import { ilustracaoPorNumero } from '../../data/ilustracoes';

export default function Conhecimento() {
  const partes = Array.from(new Set(CAPITULOS_COMPLETOS.map((c) => c.parte)));
  return (
    <section className="section page-top">
      <div className="wrap wrap--narrow">
        <SectionHead
          kicker="Módulo 06 · Conhecimento"
          title="Base de conhecimento"
          lede="Os 21 capítulos do livro ECOMNIX, na íntegra, com as ilustrações. Clique em um capítulo para ler."
        />

        {partes.map((parte) => (
          <div key={parte}>
            <h3 className="chapter-part">{parte}</h3>
            {CAPITULOS_COMPLETOS.filter((c) => c.parte === parte).map((c) => {
              const ilu = ilustracaoPorNumero(c.numero);
              return (
                <details key={c.numero} className="chapter">
                  <summary>
                    <span className="num">{String(c.numero).padStart(2, '0')}</span>
                    <span>{c.titulo}</span>
                  </summary>
                  <div className="chapter__body">
                    {ilu && <Ilustracao info={ilu} />}
                    <Markdown content={c.conteudo} />
                  </div>
                </details>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

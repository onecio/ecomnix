import SectionHead from '../../components/SectionHead';
import Markdown from '../../components/Markdown';
import Ilustracao from '../../components/Ilustracao';
import { EIXOS } from '../../data/biblioteca';
import { capituloPorNumero } from '../../content/capitulos';
import { ilustracaoPorNumero } from '../../data/ilustracoes';

export default function Biblioteca() {
  return (
    <section className="section page-top">
      <div className="wrap wrap--narrow">
        <SectionHead
          kicker="Módulo 02 · Biblioteca"
          title="Biblioteca de iniciativas"
          lede="Cinco eixos de atuação (Parte III do livro), com o capítulo correspondente na íntegra."
        />

        {EIXOS.map((e) => {
          const cap = capituloPorNumero(e.capitulo);
          const ilu = ilustracaoPorNumero(e.capitulo);
          return (
            <details key={e.slug} className="chapter">
              <summary>
                <span className="num">Cap. {e.capitulo}</span>
                <span>{e.titulo}</span>
              </summary>
              <div className="chapter__body">
                <p style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>{e.descricao}</p>
                {ilu && <Ilustracao info={ilu} />}
                {cap ? <Markdown content={cap.conteudo} /> : <p>Capítulo ainda não disponível.</p>}
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}

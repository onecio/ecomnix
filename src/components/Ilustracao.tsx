import type { IlustracaoInfo } from '../data/ilustracoes';

const BASE = import.meta.env.BASE_URL;

/**
 * Ilustração de capítulo — WCAG 2.2 AA:
 * alt descritivo, loading="lazy", legenda com crédito, PNG (web) + SVG (download).
 */
export default function Ilustracao({ info }: { info: IlustracaoInfo }) {
  const num = String(info.numero).padStart(2, '0');
  const png = `${BASE}ilustracoes/png/${num}-${info.slug}-final.png`;
  const svg = `${BASE}ilustracoes/svg/${num}-${info.slug}.svg`;
  const alt = `Ilustração do capítulo ${info.numero}, ${info.titulo}: ${info.tema}.`;
  return (
    <figure className="ilustracao">
      <img src={png} alt={alt} loading="lazy" width={768} height={512} />
      <figcaption>
        Ilustração {info.numero} — capítulo {info.numero} · editorial vetorial · ComfyUI ·
        Estúdio/ECOMNIX · <a href={svg} download>Baixar SVG</a>
      </figcaption>
    </figure>
  );
}

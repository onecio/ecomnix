import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

/**
 * Renderizador Markdown SEGURO (ECOMNIX-SEC-002).
 * - SEM `rehype-raw`: react-markdown não renderiza HTML bruto → 0 XSS.
 * - `rehype-sanitize` (schema default, restritivo) como defesa em profundidade.
 * - Dados renderizados apenas como text nodes React (sem dangerouslySetInnerHTML).
 * - Allowlist https: apenas URLs `https://` viram links; `http://`, `javascript:`,
 *   `data:` e demais esquemas viram texto plano (sem href).
 */
const allowlistHttps = (url: string): string => (url.startsWith('https://') ? url : '');

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        urlTransform={allowlistHttps}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

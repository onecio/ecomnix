import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renderizador Markdown SEGURO (SEC-002).
 * - SEM `rehype-raw`: react-markdown não renderiza HTML bruto → 0 XSS.
 * - Dados renderizados apenas como text nodes React (sem dangerouslySetInnerHTML).
 * - Allowlist https: apenas URLs `https://` viram links clicáveis; `http://`,
 *   `javascript:`, `data:` e demais esquemas viram texto plano (sem href).
 */
const allowlistHttps = (url: string): string => (url.startsWith('https://') ? url : '');

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={allowlistHttps}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

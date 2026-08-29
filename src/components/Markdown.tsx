import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Renderizador Markdown SEGURO (sem HTML bruto, sem dangerouslySetInnerHTML).
 * react-markdown escapa HTML por padrão — 0 risco de XSS.
 */
export default function Markdown({ content }: { content: string }) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

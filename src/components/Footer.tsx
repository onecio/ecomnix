export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <strong>ECOMNIX</strong>
          <p style={{ marginTop: 8 }}>
            Plataforma de referência nacional em democratização do crédito de carbono.
            Conteúdo educacional — não é oferta de crédito de carbono nem promessa de renda.
          </p>
        </div>
        <div>
          <strong>Módulos</strong>
          <p style={{ marginTop: 8, lineHeight: 2 }}>
            Diagnóstico · Biblioteca · Calculadora · Simulador · App · Conhecimento
          </p>
        </div>
        <div>
          <strong>Integridade</strong>
          <p style={{ marginTop: 8 }}>
            Processamento no cliente, sem coleta de dados pessoais. Todo dado factual é citado
            com fonte. WCAG 2.2 AA.
          </p>
        </div>
      </div>
    </footer>
  );
}

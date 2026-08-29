import SectionHead from '../../components/SectionHead';
import NatureTag from '../../components/NatureTag';

export default function AppMockup() {
  return (
    <section className="section page-top">
      <div className="wrap wrap--narrow">
        <SectionHead
          kicker="Módulo 05 · App móvel"
          title="Mockup navegável (smartphone e smartwatch)"
          lede="Especificação funcional do conceito de app ECOMNIX — não é um aplicativo publicável. Ilustra o que o capítulo 19 descreve."
        >
          <NatureTag kind="conceito" />
        </SectionHead>

        <div className="grid grid--2" style={{ alignItems: 'start' }}>
          <div className="device-frame device-frame--phone">
            <div className="device-bar">
              <span>ECOMNIX</span>
              <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)' }}>3,4 t</span>
            </div>
            <div className="device-screen">
              <p className="mono" style={{ fontSize: '0.72rem', color: 'var(--ink-faint)', margin: '0 0 8px' }}>
                Pegada anual estimada
              </p>
              <div className="stat stat--amber">3,4 t CO₂e</div>
              <div className="meter" style={{ margin: '8px 0 16px' }}>
                <span style={{ width: '52%' }} />
              </div>
              <div className="card card--flat" style={{ padding: 12, marginBottom: 12 }}>
                <strong style={{ fontSize: '0.9rem' }}>Créditos simulados</strong>
                <div className="stat stat--green" style={{ fontSize: '1.3rem' }}>3,4</div>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--ink-faint)' }}>
                  Equivalência educacional, não crédito certificado.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="btn btn--primary" style={{ flex: 1, textAlign: 'center', padding: '8px' }}>
                  Compensar
                </span>
                <span className="btn btn--ghost" style={{ flex: 1, textAlign: 'center', padding: '8px' }}>
                  Aportar
                </span>
              </div>
              <p style={{ margin: '12px 0 0', fontSize: '0.72rem', color: 'var(--ink-faint)' }}>
                Processamento local. Nenhum dado sai do dispositivo.
              </p>
            </div>
          </div>

          <div>
            <div className="watch-frame">
              <span className="mono" style={{ fontSize: '0.6rem', color: '#8fb', marginBottom: 4 }}>
                ECOMNIX
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem' }}>0,8 t</span>
              <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)' }}>
                redução simulada
              </span>
            </div>
            <div className="callout callout--warn" style={{ marginTop: 24 }}>
              <strong>Especificação funcional.</strong> O mockup define telas, fluxos e mensagens de
              integridade — não implementa autenticação, transação ou integração com registros.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

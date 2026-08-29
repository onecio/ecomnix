import { useState } from 'react';
import SectionHead from '../../components/SectionHead';
import NatureTag from '../../components/NatureTag';
import { ChipGroup, ResultCard } from '../../components/Sim';
import { simularResgate, TIPOS_RESGATE, type TipoResgate } from '../../engine/resgate';

const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

export default function Simulador() {
  const [disponiveis, setDisponiveis] = useState(10);
  const [tipo, setTipo] = useState<TipoResgate>('compensar');
  const [quantidade, setQuantidade] = useState(3);

  const r = simularResgate({ creditosDisponiveis: disponiveis, tipo, quantidade });

  return (
    <section className="section page-top">
      <div className="wrap">
        <SectionHead
          kicker="Módulo 04 · Simulador"
          title="Simulador de resgate (educativo)"
          lede={
            <>
              Demonstre a <strong>mecânica</strong> do ciclo de vida de um crédito — compensar,
              aportar, aposentar ou doar — sem nenhuma transação real. Tudo é simulado e efêmero.
            </>
          }
        >
          <NatureTag kind="conceito" />
          <span className="chip">Não é transação real</span>
        </SectionHead>

        <div className="sim">
          <div className="sim-controls card">
            <h3 className="ctl-group">Parâmetros</h3>
            <div className="ctl">
              <label className="ctl__label" htmlFor="creditos-disponiveis">
                <span>Créditos simulados disponíveis</span>
                <span className="ctl__value">{disponiveis}</span>
              </label>
              <input
                id="creditos-disponiveis"
                type="range"
                min={0}
                max={100}
                step={1}
                value={disponiveis}
                onChange={(e) => setDisponiveis(Number(e.target.value))}
              />
            </div>

            <ChipGroup
              label="Tipo de resgate"
              value={tipo}
              onChange={setTipo}
              options={(Object.keys(TIPOS_RESGATE) as TipoResgate[]).map((t) => ({
                value: t,
                label: TIPOS_RESGATE[t].rotulo,
              }))}
            />

            <div className="ctl">
              <label className="ctl__label" htmlFor="quantidade">
                <span>Quantidade a resgatar</span>
                <span className="ctl__value">{quantidade}</span>
              </label>
              <input
                id="quantidade"
                type="range"
                min={0}
                max={disponiveis}
                step={1}
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
              />
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--ink-soft)', margin: 0 }}>
              {TIPOS_RESGATE[tipo].descricao}
            </p>
          </div>

          <div className="sim-results">
            {r.ok ? (
              <>
                <ResultCard label={r.rotuloTipo} value={`${fmt(r.creditosUsados)} créditos`} kind="amber" />
                <ResultCard label="Créditos restantes" value={fmt(r.creditosRestantes)} kind="green" />
                <div className="card" style={{ marginTop: 16 }}>
                  <h3>Equivalências (ordem de grandeza)</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>
                    <span className="mono">{fmt(r.arvoresEquivalentes)}</span> árvores/ano de absorção ·{' '}
                    <span className="mono">{fmt(r.kmCarroEquivalentes)}</span> km de carro a gasolina evitados.
                  </p>
                </div>
              </>
            ) : (
              <div className="card card--flat" style={{ borderColor: 'var(--danger)' }}>
                <p style={{ color: 'var(--danger)', margin: 0 }}>
                  <strong>Atenção:</strong> {r.erro}
                </p>
              </div>
            )}

            <div className="callout callout--danger" style={{ marginTop: 16 }}>
              <strong>{r.avisoEducacional}</strong> Crédito simulado ≠ crédito de carbono certificado.
              Nenhum dado é armazenado ou transmitido.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

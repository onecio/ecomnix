import { useState } from 'react';
import SectionHead from '../../components/SectionHead';
import NatureTag from '../../components/NatureTag';
import { SliderCtl, ChipGroup, ResultCard } from '../../components/Sim';
import { calcularPegada, type Combustivel, type CalculadoraInput } from '../../engine/calculadora';

const fmt = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 2 });

export default function Calculadora() {
  const [combustivel, setCombustivel] = useState<Combustivel>('gasolina');
  const [carroKm, setCarroKm] = useState(10000);
  const [motoKm, setMotoKm] = useState(0);
  const [onibusKm, setOnibusKm] = useState(2000);
  const [metroKm, setMetroKm] = useState(1500);
  const [aviaoKm, setAviaoKm] = useState(2000);
  const [kwh, setKwh] = useState(180);
  const [botijoes, setBotijoes] = useState(1);
  const [residuos, setResiduos] = useState(30);
  const [reciclado, setReciclado] = useState(20);

  const input: CalculadoraInput = {
    combustivel,
    carroKmAno: carroKm,
    motoKmAno: motoKm,
    onibusKmAno: onibusKm,
    metroKmAno: metroKm,
    aviaoKmAno: aviaoKm,
    bikeKmAno: 0,
    caminhadaKmAno: 0,
    kwhMes: kwh,
    botijoesGLPMes: botijoes,
    kgResiduosMes: residuos,
    pctReciclado: reciclado,
  };
  const r = calcularPegada(input);

  return (
    <section className="section page-top">
      <div className="wrap">
        <SectionHead
          kicker="Módulo 03 · Calculadora"
          title="Calculadora de pegada de carbono"
          lede={
            <>
              Estime sua pegada anual em três dimensões — transporte, energia e resíduos — e veja a
              equivalência em <strong>créditos simulados</strong> (1 crédito = 1 tCO₂e). Processamento
              100% no cliente, sem persistência.
            </>
          }
        >
          <NatureTag kind="estimativa" />
          <span className="chip">Sem coleta de dados</span>
        </SectionHead>

        <div className="sim">
          <div className="sim-controls card">
            <h3 className="ctl-group">Transporte</h3>
            <ChipGroup
              label="Combustível do carro"
              value={combustivel}
              onChange={setCombustivel}
              options={[
                { value: 'gasolina', label: 'Gasolina' },
                { value: 'etanol', label: 'Etanol' },
                { value: 'diesel', label: 'Diesel' },
                { value: 'eletrico', label: 'Elétrico' },
              ]}
            />
            <SliderCtl label="Carro (km/ano)" value={carroKm} min={0} max={40000} step={500} unit="km" onChange={setCarroKm} />
            <SliderCtl label="Moto (km/ano)" value={motoKm} min={0} max={20000} step={500} unit="km" onChange={setMotoKm} />
            <SliderCtl label="Ônibus (km/ano)" value={onibusKm} min={0} max={15000} step={200} unit="km" onChange={setOnibusKm} />
            <SliderCtl label="Metrô (km/ano)" value={metroKm} min={0} max={15000} step={200} unit="km" onChange={setMetroKm} />
            <SliderCtl label="Avião doméstico (km/ano)" value={aviaoKm} min={0} max={30000} step={500} unit="km" onChange={setAviaoKm} />

            <h3 className="ctl-group">Energia</h3>
            <SliderCtl label="Eletricidade (kWh/mês)" value={kwh} min={0} max={1000} step={10} unit="kWh" onChange={setKwh} />
            <SliderCtl label="Gás de cozinha (botijões/mês)" value={botijoes} min={0} max={6} step={1} unit="botijão" onChange={setBotijoes} />

            <h3 className="ctl-group">Resíduos</h3>
            <SliderCtl label="Resíduos gerados (kg/mês)" value={residuos} min={0} max={100} step={1} unit="kg" onChange={setResiduos} />
            <SliderCtl label="Reciclados/compostados (%)" value={reciclado} min={0} max={100} step={1} unit="%" onChange={setReciclado} />
          </div>

          <div className="sim-results">
            <ResultCard
              label="Pegada estimada anual"
              value={`${fmt(r.totalTonAno)} t CO₂e`}
              kind="amber"
              hint="Transporte + energia + resíduos (líquido)"
            />
            <ResultCard
              label="Equivalência em créditos simulados"
              value={fmt(r.creditosSimulados)}
              kind="green"
              hint="1 crédito simulado = 1 tCO₂e (educacional, não certificado)"
            />

            <div className="card" style={{ marginTop: 16 }}>
              <h3>Decomposição (kg CO₂e/ano)</h3>
              {r.categorias.map((c) => {
                const pct = r.totalKgAno > 0 ? Math.min((Math.max(c.kgAno, 0) / r.totalKgAno) * 100, 100) : 0;
                return (
                  <div key={c.rotulo} style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span>{c.rotulo}</span>
                      <span className="mono">{fmt(c.kgAno)} kg</span>
                    </div>
                    <div className="meter" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100} aria-label={`${c.rotulo} ${Math.round(pct)}%`}>
                      <span style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="callout callout--warn" style={{ marginTop: 16 }}>
              <strong>Natureza educacional.</strong> Os fatores são estimativas de ordem de grandeza
              com fonte declarada. A pegada aqui é uma estimativa — não uma medição pessoal, e não
              gera crédito certificado.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { describe, it, expect } from 'vitest';
import { calcularPegada, CalculadoraInput, CREDITO_SIMULADO_TCO2E } from './calculadora';

const base: CalculadoraInput = {
  combustivel: 'gasolina',
  carroKmAno: 0,
  motoKmAno: 0,
  onibusKmAno: 0,
  metroKmAno: 0,
  aviaoKmAno: 0,
  bikeKmAno: 0,
  caminhadaKmAno: 0,
  kwhMes: 0,
  botijoesGLPMes: 0,
  kgResiduosMes: 0,
  pctReciclado: 0,
};

describe('calcularPegada', () => {
  it('retorna zero com entrada zerada', () => {
    const r = calcularPegada(base);
    expect(r.totalKgAno).toBe(0);
    expect(r.totalTonAno).toBe(0);
    expect(r.creditosSimulados).toBe(0);
  });

  it('calcula carro a gasolina: 10.000 km = 1.800 kg = 1,8 créditos simulados', () => {
    const r = calcularPegada({ ...base, carroKmAno: 10000 });
    expect(r.totalKgAno).toBeCloseTo(1800, 5);
    expect(r.totalTonAno).toBeCloseTo(1.8, 5);
    expect(r.creditosSimulados).toBeCloseTo(1.8, 5);
  });

  it('eletricidade: 180 kWh/mês = 216 kg CO₂e/ano', () => {
    const r = calcularPegada({ ...base, kwhMes: 180 });
    const energia = r.categorias.find((c) => c.rotulo === 'Energia');
    expect(energia?.kgAno).toBeCloseTo(216, 5);
  });

  it('GLP: 1 botijão/mês = 468 kg CO₂e/ano (13 kg × 12 × 3,0)', () => {
    const r = calcularPegada({ ...base, botijoesGLPMes: 1 });
    expect(r.totalKgAno).toBeCloseTo(468, 5);
  });

  it('reciclagem reduz a pegada de resíduos (crédito educacional)', () => {
    const semReciclagem = calcularPegada({ ...base, kgResiduosMes: 30, pctReciclado: 0 });
    const comReciclagem = calcularPegada({ ...base, kgResiduosMes: 30, pctReciclado: 50 });
    expect(comReciclagem.totalKgAno).toBeLessThan(semReciclagem.totalKgAno);
  });

  it('1 crédito simulado equivale exatamente a 1 tCO₂e', () => {
    const r = calcularPegada({ ...base, carroKmAno: 10000 });
    expect(r.creditosSimulados).toBeCloseTo(r.totalTonAno / CREDITO_SIMULADO_TCO2E, 5);
  });

  it('nunca retorna valor negativo (entradas negativas são zeradas)', () => {
    const r = calcularPegada({ ...base, carroKmAno: -500, kwhMes: -10 });
    expect(r.totalKgAno).toBeGreaterThanOrEqual(0);
  });
});

import { describe, it, expect } from 'vitest';
import { simularResgate } from './resgate';

describe('simularResgate', () => {
  it('resgata quantidade válida e desconta do saldo', () => {
    const r = simularResgate({ creditosDisponiveis: 10, tipo: 'aposentar', quantidade: 4 });
    expect(r.ok).toBe(true);
    expect(r.creditosUsados).toBe(4);
    expect(r.creditosRestantes).toBe(6);
  });

  it('rejeita quantidade acima do saldo', () => {
    const r = simularResgate({ creditosDisponiveis: 2, tipo: 'compensar', quantidade: 5 });
    expect(r.ok).toBe(false);
    expect(r.erro).toContain('excede');
  });

  it('rejeita quantidade zero ou negativa', () => {
    const r = simularResgate({ creditosDisponiveis: 10, tipo: 'doar', quantidade: 0 });
    expect(r.ok).toBe(false);
    const r2 = simularResgate({ creditosDisponiveis: 10, tipo: 'doar', quantidade: -3 });
    expect(r2.ok).toBe(false);
  });

  it('calcula equivalências educacionais', () => {
    const r = simularResgate({ creditosDisponiveis: 10, tipo: 'projeto', quantidade: 2 });
    expect(r.arvoresEquivalentes).toBeCloseTo(96, 5); // 2 × 48
    expect(r.kmCarroEquivalentes).toBeCloseTo(11112, 5); // 2 × 5556
  });

  it('sempre emite o aviso educacional de não-transação', () => {
    const r = simularResgate({ creditosDisponiveis: 5, tipo: 'aposentar', quantidade: 1 });
    expect(r.avisoEducacional).toContain('não há transação real');
  });

  it('é puro e sem estado: mesma entrada → mesma saída', () => {
    const a = simularResgate({ creditosDisponiveis: 7, tipo: 'compensar', quantidade: 3 });
    const b = simularResgate({ creditosDisponiveis: 7, tipo: 'compensar', quantidade: 3 });
    expect(a).toEqual(b);
  });
});

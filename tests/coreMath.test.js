import { describe, test, expect } from "vitest";
import {
  sumFunction,
  subFunction,
  multFunction,
  divFunction,
} from "../src/coreMath";

// =====================
// SUM
// =====================

describe("sum", () => {
  test("Soma de dois números positivos", () => {
    expect(sumFunction(10, 10)).toBe(20);
  });

  test("Soma com número negativo", () => {
    expect(sumFunction(10, -5)).toBe(5);
  });

  test("Soma com zero", () => {
    expect(sumFunction(7, 0)).toBe(7);
  });
});

// =====================
// SUBTRACT
// =====================

describe("sub", () => {
  test("Subtração básica", () => {
    expect(subFunction(10, 5)).toBe(5);
  });

  test("Resultado negativo", () => {
    expect(subFunction(10, 20)).toBe(-10);
  });

  test("Subtração com zero", () => {
    expect(subFunction(15, 0)).toBe(15);
  });
});

// =====================
// MULTIPLY
// =====================

describe("mult", () => {
  test("Multiplicação de dois positivos", () => {
    expect(multFunction(4, 5)).toBe(20);
  });

  test("Multiplicação por zero", () => {
    expect(multFunction(10, 0)).toBe(0);
  });

  test("Resultado negativo", () => {
    expect(multFunction(-4, 5)).toBe(-20);
  });
});

// =====================
// DIVIDE
// =====================

describe("div", () => {
  test("Divisão exata", () => {
    expect(divFunction(12, 2)).toBe(6);
  });

  test("Resultado decimal", () => {
    expect(divFunction(5, 2)).toBe(2.5);
  });

  test("Divisão por zero deve lançar erro", () => {
    expect(() => divFunction(10, 0)).toThrow();
  });
});

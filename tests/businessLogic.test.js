import { describe, test, expect } from "vitest";
import {
  calculateAverage,
  calculateDiscountedPrice,
} from "../src/businessLogic.js";

// =====================
// calculateAverage
// =====================

describe("calculateAverage", () => {
  test("Deve calcular a média de múltiplos valores", () => {
    const purchases = [10, 20, 30];
    const result = calculateAverage(purchases);
    expect(result).toBe(20);
  });

  test("Deve calcular a média com um único valor", () => {
    const purchases = [50];
    const result = calculateAverage(purchases);
    expect(result).toBe(50);
  });

  test("Deve lançar erro se o array estiver vazio", () => {
    expect(() => calculateAverage([])).toThrow();
  });

  test("Deve lançar erro se a entrada não for um array", () => {
    expect(() => calculateAverage(null)).toThrow();
    expect(() => calculateAverage("texto")).toThrow();
  });
});

// =====================
// calculateDiscountedPrice
// =====================

describe("calculateDiscountedPrice", () => {
  test("Deve aplicar desconto corretamente (10% de 200)", () => {
    const result = calculateDiscountedPrice(200, 10);
    expect(result).toBe(180);
  });

  test("Desconto de 0% deve retornar o preço original", () => {
    const result = calculateDiscountedPrice(20, 0);
    expect(result).toBe(20);
  });

  test("Desconto de 100% deve retornar zero", () => {
    const result = calculateDiscountedPrice(20, 100);
    expect(result).toBe(0);
  });

  test("Deve lançar erro se o desconto for maior que 100%", () => {
    expect(() => calculateDiscountedPrice(20, 150)).toThrow();
  });

  test("Deve lançar erro se o preço for zero ou negativo", () => {
    expect(() => calculateDiscountedPrice(0, 10)).toThrow();
    expect(() => calculateDiscountedPrice(-10, 10)).toThrow();
  });
});

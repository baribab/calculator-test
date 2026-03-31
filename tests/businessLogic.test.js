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
    let firstNum = 20;
    let secondNum = 0;

    const result = calculateDiscountedPrice(firstNum, secondNum);
    expect(result).toBe(firstNum);
  });

  test("Desconto de 100% deve retornar zero", () => {
    const result = calculateDiscountedPrice(20, 100);
    expect(result).toBe(0);
  });

  test("Deve lançar erro se o desconto for maior que 100%", () => {
    const result = calculateDiscountedPrice(20, 100);
    expect(result).toBe(0);
  });

  test("Deve lançar erro se o preço for zero ou negativo", () => {
    const result = calculateDiscountedPrice(2, 10);
    expect(result).toBe(1.8);
  });
});

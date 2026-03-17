import { describe, test, expect } from "vitest";
import {
  sumFunction,
  subFunction,
  multFunction,
  divFunction,
} from "../src/coreMath";

// sum

describe("sum", () => {
  test("Essa função deve somar dois valores e retornar o total", () => {
    const num1 = 10;
    const num2 = 10;

    const result = sumFunction(num1, num2);

    expect(result).toBe(20);
  });
});

// sub

describe("sub", () => {
  test("Essa função deve subtrair dois valores e retornar a diferença", () => {
    const num1 = 10;
    const num2 = 20;

    const result = subFunction(num1, num2);

    expect(result).toBe(-10);
  });
});

// multi

describe("mult", () => {
  test("Essa função deve multiplicar dois valores e retornar o produto", () => {
    const num1 = -40;
    const num2 = 20;

    const result = multFunction(num1, num2);

    expect(result).toBe(-800);
  });
});

// div

describe("div", () => {
  test("Essa função deve dividir dois valores e retornar o quociente", () => {
    const num1 = 12;
    const num2 = 2;

    const result = divFunction(num1, num2);

    expect(result).toBe(6);
  });
});

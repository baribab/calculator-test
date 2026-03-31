export function sumFunction(x, y) {
  return x + y;
}

export function subFunction(x, y) {
  return x - y;
}

export function multFunction(x, y) {
  return x * y;
}

export function divFunction(x, y) {
  if (y === 0) {
    console.log(x);
    throw new Error("Não é possível divisão por 0");
  }
  return x / y;
}

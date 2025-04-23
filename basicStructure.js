// Verificar se o número é par ou ímpar

let num1 = 2;

if (num1 % 2 === 0) {
  console.log(`${num1} é par`);
} else {
  console.log(`${num1} é ímpar`);
}
// verificar qual número é maior

function encontrarMaior(a, b, c) {
  let maior;

  if (a >= b && a >= c) {
    maior = a;
  } else if (b >= a && b >= c) {
    maior = b;
  } else {
    maior = c;
  }

  return maior;
}
console.log("O maior número é: " + encontrarMaior(1, 5, 9));

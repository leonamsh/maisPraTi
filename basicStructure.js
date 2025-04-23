// Verificar se o número é par ou ímpar

// let num1 = 2;

// if (num1 % 2 === 0) {
//   console.log(`${num1} é par`);
// } else {
//   console.log(`${num1} é ímpar`);
// }
//verificar qual número é maior

// function encontrarMaior(a, b, c) {
//   let maior;

//   if (a >= b && a >= c) {
//     maior = a;
//   } else if (b >= a && b >= c) {
//     maior = b;
//   } else {
//     maior = c;
//   }

//   return maior;
// }
// console.log("O maior número é: " + encontrarMaior(1, 5, 9));

// Calculadora
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function calculadoraSimples() {
  const operacao = await perguntar("Escolha a operação (+, -, *, /): ");
  const num1 = parseFloat(await perguntar("Digite o primeiro número: "));
  const num2 = parseFloat(await perguntar("Digite o segundo número: "));

  let resultado;

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.log("Não é possível dividir por zero!");
        rl.close();
        return;
      }
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida!");
      rl.close();
      return;
  }

  console.log(`Resultado: ${resultado}`);
  rl.close();
}

calculadoraSimples();

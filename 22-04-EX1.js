//Exercício 1 - Calculadora
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

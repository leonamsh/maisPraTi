// Exercício 1 - Calculadora
import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input,
  output,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function calculadoraSimples() {
  try {
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
          return;
        }
        resultado = num1 / num2;
        break;
      default:
        console.log("Operação inválida!");
        return;
    }

    console.log(`Resultado: ${resultado}`);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  } finally {
    rl.close();
  }
}

calculadoraSimples();

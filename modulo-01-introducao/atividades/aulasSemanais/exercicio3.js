// Exercício 3 - Verificar se um ano é bissexto
import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input,
  output,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

async function main() {
  try {
    const resposta = await perguntar("Digite um ano para verificar se é bissexto: ");
    const ano = parseInt(resposta);

    if (isNaN(ano)) {
      console.log("Por favor, digite um ano válido.");
      return;
    }

    if (ehBissexto(ano)) {
      console.log(`${ano} é bissexto.`);
    } else {
      console.log(`${ano} não é bissexto.`);
    }
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  } finally {
    rl.close();
  }
}

main();

//Exercício 2 - verificar se um número é positivo, negativo ou zero
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}
async function main() {
  const resposta = await perguntar("Digite um número para verificar se é positivo, negativo ou zero: ");
  const numero = Number(resposta.trim());

  if (isNaN(numero)) {
    console.log("Você não digitou um número válido.");
  } else if (numero > 0) {
    console.log("O número é positivo.");
  } else if (numero < 0) {
    console.log("O número é negativo.");
  } else {
    console.log("O número é zero.");
  }

  rl.close();
}

main();

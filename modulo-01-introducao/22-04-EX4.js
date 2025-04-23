//Exercício 4 - definam faixas etárias para crianças, adolecsentes, adultos e idosos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}
async function main() {
  const resposta = await perguntar("Qual a sua idade? ");
  const idade = parseInt(resposta);

  switch (true) {
    case idade >= 0 && idade <= 12:
      console.log("Você é uma Criança.");
      break;
    case idade >= 13 && idade <= 17:
      console.log("Você é um Adolescente.");
      break;
    case idade >= 18 && idade <= 59:
      console.log("Você é um Adulto.");
      break;
    case idade >= 60:
      console.log("Você é um Idoso.");
      break;
    default:
      console.log("Idade inválida.");
  }

  rl.close();
}

main();

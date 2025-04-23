//Ecercício 3 - verificar se um ano é bissexto

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}
async function main() {
  const resposta = await perguntar("Digite um ano para verificar se é bissexto: ");
  const ano = parseInt(resposta);

  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é bissexto.`);
  } else {
    console.log(`${ano} não é bissexto.`);
  }
  rl.close();
}

main();

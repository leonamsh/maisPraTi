// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
const prompt = require("prompt-sync")({ sigint: true });

function ex11() {
  let soma = 0;
  for (let contador = 1; contador <= 5; contador++) {
    const numeroAtual = parseFloat(prompt(`Ex11 - Número ${contador}: `));
    soma += numeroAtual;
  }
  console.log("Soma:", soma);
}
module.exports = ex11;

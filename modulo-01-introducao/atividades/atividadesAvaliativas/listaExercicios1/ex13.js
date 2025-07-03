// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
const prompt = require("prompt-sync")({ sigint: true });

function ex13() {
  let somaTotal = 0;
  let quantidadeNumeros = 0;
  let numeroDigitado;

  do {
    numeroDigitado = parseFloat(prompt("Ex13 - Digite um número (0 para sair): "));
    if (numeroDigitado !== 0) {
      somaTotal += numeroDigitado;
      quantidadeNumeros++;
    }
  } while (numeroDigitado !== 0);

  const media = quantidadeNumeros > 0 ? (somaTotal / quantidadeNumeros).toFixed(2) : 0;
  console.log("Média:", media);
}
module.exports = ex13;

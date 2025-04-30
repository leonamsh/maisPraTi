// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require("prompt-sync")({ sigint: true });

function ex10() {
  const numeroDigitado = parseInt(prompt("Ex10 - Digite um número: "));
  for (let repeticao = 0; repeticao < 10; repeticao++) {
    console.log(numeroDigitado);
  }
}
module.exports = ex10;

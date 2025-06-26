// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
const prompt = require("prompt-sync")({ sigint: true });

function ex12() {
  const numeroBase = parseInt(prompt("Ex12 - Número para tabuada: "));
  for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    console.log(`${numeroBase} x ${multiplicador} = ${numeroBase * multiplicador}`);
  }
}
module.exports = ex12;

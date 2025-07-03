// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
const prompt = require("prompt-sync")({ sigint: true });

function ex14() {
  const numeroParaFatorial = parseInt(prompt("Ex14 - Número para fatorial: "));
  let fatorial = 1;
  for (let multiplicador = 2; multiplicador <= numeroParaFatorial; multiplicador++) {
    fatorial *= multiplicador;
  }
  console.log(`Fatorial de ${numeroParaFatorial}: ${fatorial}`);
}
module.exports = ex14;

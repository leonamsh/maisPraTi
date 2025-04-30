// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.
const prompt = require("prompt-sync")({ sigint: true });

function ex9() {
  console.log("Ex9 - Contagem regressiva:");
  for (let contador = 10; contador >= 1; contador--) {
    console.log(contador);
  }
}
module.exports = ex9;

//praticar loops com while
//criar uma tabuada
const prompt = require("prompt-sync")();
let multiplicador = parseInt(prompt("Digite um número para ver sua tabuada (1 a 10):"));
let numero = 0;
let resultado = 0;
while (numero < 10) {
  numero++;
  resultado = numero * multiplicador;
  console.log(`${numero} * ${multiplicador} = ${resultado}`);
}

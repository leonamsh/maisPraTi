//praticar loops com for
//criar uma tabuada
const prompt = require("prompt-sync")();
let multiplicador = parseInt(prompt("Digite um número para ver sua tabuada (1 a 10):"));
let numero = 0;
let resultado = 0;
for (numero = 1; numero <= 10; numero++) {
  resultado = numero * multiplicador;
  console.log(`${numero} * ${multiplicador} = ${resultado}`);
}

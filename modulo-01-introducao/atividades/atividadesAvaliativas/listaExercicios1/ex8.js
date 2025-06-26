// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
const prompt = require("prompt-sync")({ sigint: true });

function ex8() {
  const numero1 = parseFloat(prompt("Ex8 - Primeiro número: "));
  const numero2 = parseFloat(prompt("Segundo número: "));
  console.log(numero1 < numero2 ? `${numero1}, ${numero2}` : `${numero2}, ${numero1}`);
}
module.exports = ex8;

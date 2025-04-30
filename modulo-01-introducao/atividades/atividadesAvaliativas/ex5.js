// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
const prompt = require("prompt-sync")({ sigint: true });

function ex5() {
  const pesoKg = parseFloat(prompt("Ex5 - Peso (kg): "));
  const alturaMetros = parseFloat(prompt("Altura (m): "));
  const imc = pesoKg / (alturaMetros * alturaMetros);
  if (imc < 18.5) console.log("Baixo peso");
  else if (imc < 25) console.log("Peso normal");
  else if (imc < 30) console.log("Sobrepeso");
  else console.log("Obesidade");
}
module.exports = ex5;

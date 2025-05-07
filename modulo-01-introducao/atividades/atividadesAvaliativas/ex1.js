// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require("prompt-sync")({ sigint: true });

function ex1() {
  const numero = parseInt(prompt("Ex1 - Digite um número: "));
  console.log(numero % 2 === 0 ? "Par" : "Ímpar");
}

module.exports = ex1;

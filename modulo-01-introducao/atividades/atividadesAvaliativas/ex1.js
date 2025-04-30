// exercicios/ex1.js
const prompt = require("prompt-sync")({ sigint: true });

function ex1() {
  const numero = parseInt(prompt("Ex1 - Digite um número: "));
  console.log(numero % 2 === 0 ? "Par" : "Ímpar");
}

module.exports = ex1;

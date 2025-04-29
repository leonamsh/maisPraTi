//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "));
do {
  if (numero > 0) {
    console.log("POSITIVO");
  } else if (numero < 0) {
    console.log("NEGATIVO");
  }
  numero = parseInt(prompt("Digite um número: "));
} while (numero !== 0);

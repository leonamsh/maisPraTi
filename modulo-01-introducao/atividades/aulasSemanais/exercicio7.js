//média aritimética de números inseridos até que o usuário digite 0.
const prompt = require("prompt-sync")();
let soma = 0;
let contador = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número (ou 0 para finalizar): "));

  if (numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador > 0) {
  const media = soma / contador;
  console.log(`A média aritmética é: ${media}`);
} else {
  console.log("Nenhum número válido foi inserido.");
}

/* Utilizando apenas o While, ao invés de do{}while */

// const prompt = require("prompt-sync")();
// let soma = 0;
// let contador = 0;
// let numero;

// while (numero != 0) {
//   numero = parseInt(prompt("Digite um número (ou 0 para finalizar):"));
//   if (numero !== 0) {
//     soma += numero;
//     contador++;
//   }
// }

// if (contador > 0) {
//   const media = soma / contador;
//   console.log(`A média aritmética é: ${media}`);
// } else {
//   console.log("Nenhum número válido foi inserido.");
// }

/* ################## Explicação - 1ª Aula ################## */
// let listaFrutas = Array();

// listaFrutas[0] = "maca";
// listaFrutas[1] = "banana";
// listaFrutas[2] = "laranja";
// listaFrutas[3] = "melancia";

// console.log(listaFrutas);

// for (let i = 0; i < listaFrutas; i++) {
//   console.log(listaFrutas[i]);
// }
/* ########################################################### */

/* #################### Exercício em Aula #################### */
// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
// Use Métodos de array para calculas:
// A soma de todos os elementos.
// A média dos elementos.
// Gere um novo array chamado pares que cotnenha apenas os números pares de números
// Imprima no console
//O array original 'números'
// A soma
// A média
// O array 'pares'
/* ########################################################### */

/* ############################################################ */
/* ################# Resolução dos Exercícios ################# */
/* ############################################################ */
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pares = [];
// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];
//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i]);
//   }
// }
// console.log(`Números: [${numeros}]`); // console.log(numeros);
// console.log(`Soma: ${soma}`);
// console.log(`Média: ${soma / numeros.length}`);
// console.log(`Pares: [${pares}]`); // console.log(pares);
/* ########################################################### */

//let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* ########################################################### */
// let numeros = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];
// let n = numeros.length;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     if (numeros[j] > numeros[j + 1]) {
//       let temp = numeros[j];
//       numeros[j] = numeros[j + 1];
//       numeros[j + 1] = temp;
//     }
//   }
// }

// console.log(numeros);
/* ########################################################### */

// let numeros = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];
// let pares = [];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i]);
//   }
// }

// console.log(`Numeros: ${numeros}`);
// console.log(`Soma: ${numeros.reduce((a, b) => a + b)}`);
// console.log(`Média: ${numeros.reduce((a, b) => a + b) / numeros.length}`);
// console.log(`Pares: ${pares}`);

// // Ordene o array numeros em ordem crescente (criando uma cópia para não modificar o original)
// console.log(`Ordenados de forma crescente: [${[...numeros].sort((a, b) => a - b)}]`);
// console.log(`Ordenados de forma descrescente: [${[...numeros].sort((a, b) => b - a)}]`);

/* ########################################################### */

// let matriz = [];

// for (let i = 0; i < 3; i++) {
//   matriz[i] = [];
//   for (let j = 0; j < 3; j++) {
//     matriz[i][j] = 10;
//   }
// }
// console.table(matriz);

// let mercado = {
//   fruteira: ["banana", "maca", "laranja", "melancia"],
//   acougue: ["picanha", "costela", "alcatra", "file"],
// };
// let mercado = [];
// mercado["fruteira"] = ["banana", "maca", "laranja", "melancia"];
// mercado["acougue"] = ["picanha", "costela", "alcatra", "file"];

// console.table(mercado);

/* ########################################################### */
//Cacular a diagonal dessa matriz
let matriz = [];
let soma = 0;
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = 10;
  }
}
console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (i === j) {
      soma += matriz[i][j];
    }
  }
}
console.log(soma);

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

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pares = [];
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

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  }
}

console.log(`Numeros: ${numeros}`);
console.log(`Soma: ${numeros.reduce((a, b) => a + b)}`);
console.log(`Média: ${numeros.reduce((a, b) => a + b) / numeros.length}`);
console.log(`Pares: ${pares}`);

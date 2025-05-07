// function calculaArea(altura, largura){
//     return altura * largura
// }
// console.log(calculaArea(5, 10))

//Façam uma função que retorna um array ordenado

// let numeros = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];
// function ordenaArray(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(ordenaArray(numeros));

//funções anônimas.

// let soma = function (a, b) {
//   return a + b;
// };
// console.log(soma(10, 20));
// let soma2 = (a, b) => a + b;
// console.log(soma2(10, 20));

//Criar uma função que soma os elementos de um Array e retorna esse valor.

let numeros = [7, 8, 6, 4, 2, 1, 3, 5, 10, 9];

function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
console.log(somaArray(numeros));

//Retorna o maior número em um array
function maiorNumero(arr) {
  let maior = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}
console.log(maiorNumero(numeros));

//Retornar menor valor de um array

function menorNumero(arr) {
  let menor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menor) {
      menor = arr[i];
    }
  }
  return menor;
}
console.log(menorNumero(numeros));

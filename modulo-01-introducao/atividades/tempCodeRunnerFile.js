let numeros = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];

function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
    return soma;
  }
}
console.log(somaArray(numeros));
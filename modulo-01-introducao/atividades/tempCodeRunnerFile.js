function somaMatrizes(matriz1, matriz2) {
  let resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      resultado[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }
  return resultado;
}
let matriz1 = [
  [1, 2],
  [3, 4],
];
let matriz2 = [
  [5, 6],
  [7, 8],
];
console.table(matriz1);
console.table(matriz2);
console.log("Soma das matrizes:");
let resultado = somaMatrizes(matriz1, matriz2);
console.table(resultado);
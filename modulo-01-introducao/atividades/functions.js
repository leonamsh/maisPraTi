function calculaArea(altura, largura) {
  return altura * largura;
}
console.log(calculaArea(5, 10));

//Façam uma função que retorna um array ordenado

let numeros = [10, 8, 6, 4, 2, 1, 3, 5, 7, 9];
function ordenaArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(ordenaArray(numeros));

//funções anônimas.

let soma = function (a, b) {
  return a + b;
};
console.log(soma(10, 20));
let soma2 = (a, b) => a + b;
console.log(soma2(10, 20));

//Criar uma função que soma os elementos de um Array e retorna esse valor.

let Numeros = [7, 8, 6, 4, 2, 1, 3, 5, 10, 9];

function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}
console.log(somaArray(Numeros));

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

let nome = "Julio César";

console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.charAt(0));
console.log(nome.indexOf("César"));
console.log(nome.replace("César", "Cleyton"));
console.log(nome.substring(0, 4));
console.log(nome.split(" "));
console.log("     wesley     ".trim());

//Façam uma função que inverta uma string
function inverterString(str) {
  let strInvertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  return strInvertida;
}
console.log(inverterString(nome));
// Outra forma de inverter uma string
// 1. Usando o método split(), reverse() e join()
function InverterString(str) {
  console.log(str.split("").reverse().join(""));
}
InverterString(nome);

//Encontrem o número de vogais em uma string
function contarVogais(str) {
  const vogais = "aeiouAEIOUÁáÉéÍíÓóÚúÃãÕõÂâÊêÎîÔôÛû";
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }
  return contador;
}
console.log(`${nome} tem ${contarVogais(nome)} vogais.`);
// Outra forma de contar vogais
function ContarVogais(str) {
  const matches = str.match(/[aeiouAEIOUAáÉéÍíÓóÚúÃãÕõÂâÊêÎîÔôÛû]/gi);
  return matches ? matches.length : 0;
}

console.log(`${nome} tem ${ContarVogais(nome)} vogais.`);

console.log(Math.ceil(5.1)); // Arredonda para cima
console.log(Math.floor(5.9)); // Arredonda para baixo
console.log(Math.round(5.5)); // Arredonda para o inteiro mais próximo

console.log(Math.sqrt(25)); // Raiz quadrada de 25
console.log(Math.pow(2, 3)); // 2 elevado a 3
console.log(Math.abs(-10)); // absoluto de -10
console.log(Math.cbrt(10)); // raiz cúbica de 10

console.log(Math.random() * 100); // número aleatório entre 0 e 100

// Gerar um número aleatório entre 0 e 5
// Ou seja 0, 1, 2, 3, 4 ou 5 - então Math.random deve ser * 6.
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 6);
}
console.log(gerarNumeroAleatorio());

// Usando date
let data = new Date();
console.log(data); //Data completa
console.log(data.getDate()); // Dia do mês
console.log(data.getDay()); // Dia da semana (0-6), começando na segunda
console.log(data.getFullYear()); // Ano completo
console.log(data.getHours()); // Hora
console.log(data.getMinutes()); // Minutos
console.log(data.getSeconds()); // Segundos
console.log(data.getMilliseconds()); // Milissegundos
console.log(data.getTime()); // Timestamp (milissegundos desde 1 de janeiro de 1970)
console.log(Date.toString()); // String da data
console.log(Date.now()); // Timestamp atual

let data1 = new Date("2015, 7, 7");
let data2 = new Date("2025, 7, 7");

console.log(data1.getTime());
console.log(data2.getTime());
let milissegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime());
console.log(`A diferença entre as datas é de ${milissegundosEntreDatas} milissegundos.`);

console.log(milissegundosEntreDatas);

let milissegundosPorDia = 24 * 60 * 60 * 1000;

console.log(`A diferença entre as datas é de: ${milissegundosEntreDatas / milissegundosPorDia} millisegundos.`);

//Formatar uma data

let date3 = new Date("2025-12-08");
let dia = "0" + date3.getDate();
let mes = date3.getMonth() + 1; // Os meses começam em 0
mes = mes <= 10 ? "0" + mes : mes;
let ano = date3.getFullYear();
let dataFormatada = `${dia}/${mes}/${ano}`;
console.log(dataFormatada);

//A soma de duas matrizes

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

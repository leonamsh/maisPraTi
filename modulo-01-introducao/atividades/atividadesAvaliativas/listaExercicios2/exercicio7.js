/*
 * Secao 3: Arrays e Objetos Complexos
 * 7. Mapeamento e Ordenacao
 * Dado um array produtos = [{ nome, preco }, ... , crie uma funcao que
 * retorne um novo array apenas com os nomes, ordenados por preco
 * crescente, usando map, sort.
 */

function obterNomesOrdenadosPorPreco(produtos) {
  // 1. Criar uma copia do array de produtos antes de ordenar
  //    Isso e uma boa pratica para nao modificar o array original.
  const produtosCopia = [...produtos];

  // 2. Ordenar a copia dos produtos pelo preco em ordem crescente
  //    O metodo `sort` compara dois elementos (a, b) e retorna:
  //    - Um numero negativo se 'a' deve vir antes de 'b'
  //    - Um numero positivo se 'a' deve vir depois de 'b'
  //    - Zero se a ordem nao importa (ou sao iguais)
  produtosCopia.sort((a, b) => a.preco - b.preco);

  // 3. Mapear o array ordenado para extrair apenas os nomes dos produtos
  //    O metodo `map` cria um novo array aplicando uma funcao a cada elemento
  //    do array original.
  const nomesOrdenados = produtosCopia.map((produto) => produto.nome);

  return nomesOrdenados;
}

// --- Testando a funcao ---
console.log("--- Testes da funcao obterNomesOrdenadosPorPreco ---");

const produtos = [
  { nome: "Smartphone", preco: 1200 },
  { nome: "Fone de Ouvido", preco: 150 },
  { nome: "Notebook", preco: 3500 },
  { nome: "Teclado", preco: 200 },
  { nome: "Mouse", preco: 80 },
];

console.log("Array original de produtos:");
console.log(produtos);

const nomesOrdenados = obterNomesOrdenadosPorPreco(produtos);
console.log("\nNomes dos produtos ordenados por preco crescente:");
console.log(nomesOrdenados);

const produtos2 = [
  { nome: "Caneta", preco: 2 },
  { nome: "Caderno", preco: 15 },
  { nome: "Borracha", preco: 1 },
  { nome: "Lapis", preco: 3 },
];

console.log("\nOutro array de produtos:");
console.log(produtos2);
const nomesOrdenados2 = obterNomesOrdenadosPorPreco(produtos2);
console.log("Nomes dos produtos ordenados por preco crescente:");
console.log(nomesOrdenados2);

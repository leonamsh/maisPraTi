﻿/*
 * 9. Conversao Entre Formatos
 * Escreva duas funcoes:
 *
 * paresParaObjeto (pares) recebe um array de pares [ [chave,
 * valor], ...] e retorna o objeto equivalente.
 * objeto ParaPares(obj) faz o inverso, retornando um array de
 * pares.
 */

// --- Funcao 1: Converter array de pares para objeto ---
function paresParaObjeto(pares) {
  const objeto = {}; // Cria um objeto vazio para armazenar os resultados

  // Percorre cada par no array de pares
  for (let i = 0; i < pares.length; i++) {
    const parAtual = pares[i]; // O par atual e um array como [chave, valor]
    const chave = parAtual[0]; // A chave e o primeiro elemento do par
    const valor = parAtual[1]; // O valor e o segundo elemento do par

    // Adiciona a chave e o valor ao objeto
    objeto[chave] = valor;
  }

  return objeto;
}

// --- Funcao 2: Converter objeto para array de pares ---
function objetoParaPares(obj) {
  const pares = []; // Cria um array vazio para armazenar os pares

  // Percorre cada chave (propriedade) no objeto
  // `Object.keys(obj)` retorna um array com todas as chaves do objeto.
  for (const chave of Object.keys(obj)) {
    const valor = obj[chave]; // Pega o valor correspondente a chave

    // Adiciona um novo par [chave, valor] ao array de pares
    pares.push([chave, valor]);
  }

  return pares;
}

// --- Testando as funcoes ---
console.log("--- Testes das funcoes de Conversao Entre Formatos ---");

// --- Teste paresParaObjeto ---
console.log("\n--- Teste: paresParaObjeto ---");
const meuArrayDePares = [
  ["nome", "Joao"],
  ["idade", 30],
  ["cidade", "Sao Paulo"],
];
console.log("Array de pares original:", meuArrayDePares);
const meuObjetoConvertido = paresParaObjeto(meuArrayDePares);
console.log("Objeto convertido:", meuObjetoConvertido);

const outroArrayDePares = [
  ["cor", "azul"],
  ["tamanho", "M"],
];
console.log("\nOutro array de pares:", outroArrayDePares);
console.log("Objeto convertido:", paresParaObjeto(outroArrayDePares));

// --- Teste objetoParaPares ---
console.log("\n--- Teste: objetoParaPares ---");
const meuObjeto = {
  produto: "Camiseta",
  preco: 50,
  estoque: true,
};
console.log("Objeto original:", meuObjeto);
const meuArrayDeParesConvertido = objetoParaPares(meuObjeto);
console.log("Array de pares convertido:", meuArrayDeParesConvertido);

const outroObjeto = {
  a: 1,
  b: "dois",
  c: [3],
};
console.log("\nOutro objeto:", outroObjeto);
console.log("Array de pares convertido:", objetoParaPares(outroObjeto));

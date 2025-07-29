/*
 * Secao 2: Funcoes e Recursao
 * 4. Fatorial Recursivo
 * Implemente function fatorial(n) de forma recursiva;
 * trate n<0 lancando
 * um Error, e n===0 retornando 1.
 */

function fatorial(n) {
  // Trata o caso de n < 0, lancando um erro
  if (n < 0) {
    throw new Error(
      "Nao e possivel calcular o fatorial de um numero negativo.",
    );
  }

  // Caso base: n === 0, retorna 1
  if (n === 0) {
    return 1;
  }

  // Passo recursivo: n * fatorial(n - 1)
  return n * fatorial(n - 1);
}

// --- Testando a funcao ---
console.log("--- Testes da funcao fatorial ---");
console.log("Fatorial de 0:", fatorial(0));
console.log("Fatorial de 1:", fatorial(1));
console.log("Fatorial de 5:", fatorial(5));
console.log("Fatorial de 7:", fatorial(7));

try {
  console.log("Fatorial de -3:", fatorial(-3));
} catch (error) {
  console.log("Erro:", error.message);
}

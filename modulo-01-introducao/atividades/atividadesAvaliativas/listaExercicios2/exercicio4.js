/*
 * Secao 2: Funcoes e Recursao
 * [cite_start]4. Fatorial Recursivo [cite: 5]
 * [cite_start]Implemente function fatorial(n) de forma recursiva; [cite: 5]
 * [cite_start]trate n<0 lancando [cite: 6]
 * [cite_start]um Error, e n===0 retornando 1. [cite: 6]
 */

function fatorial(n) {
  [cite_start]; // Trata o caso de n < 0, lancando um erro [cite: 6]
  if (n < 0) {
    throw new Error(
      "Nao e possivel calcular o fatorial de um numero negativo.",
    );
  }

  [cite_start]; // Caso base: n === 0, retorna 1 [cite: 6]
  if (n === 0) {
    return 1;
  }

  [cite_start]; // Passo recursivo: n * fatorial(n - 1) [cite: 5]
  return n * fatorial(n - 1);
}

// --- Testando a funcao ---
console.log("--- Testes da funcao fatorial ---");
console.log("Fatorial de 0:", fatorial(0)); // Expected: 1
console.log("Fatorial de 1:", fatorial(1)); // Expected: 1
console.log("Fatorial de 5:", fatorial(5)); // Expected: 120 (5 * 4 * 3 * 2 * 1)
console.log("Fatorial de 7:", fatorial(7)); // Expected: 5040

try {
  console.log("Fatorial de -3:", fatorial(-3)); // Expected: Erro
} catch (error) {
  console.log("Erro:", error.message);
}

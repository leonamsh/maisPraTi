/*
 * 6. Memoization
 * Implemente function memoize(fn) que armazene em cache chamadas
 * anteriores de fn (por argumentos), retornando resultados instantaneos em
 * repetidas invocacoes.
 */

function memoize(fn) {
  const cache = {}; // Objeto para armazenar os resultados em cache

  // Retorna uma nova funcao "memoizada"
  return function (...args) {
    // Cria uma chave unica para os argumentos da chamada
    // JSON.stringify e usado para converter os argumentos (que podem ser um array) em uma string,
    // que pode ser usada como chave em um objeto.
    const key = JSON.stringify(args);

    // Verifica se o resultado para esta chave ja esta no cache
    if (cache[key]) {
      console.log(`(Cache) Retornando resultado para a chave: ${key}`);
      return cache[key]; // Se estiver, retorna o resultado do cache
    } else {
      // Se nao estiver no cache, executa a funcao original
      console.log(`(Calculando) Calculando resultado para a chave: ${key}`);
      const result = fn.apply(this, args); // Executa a funcao original com os argumentos

      // Armazena o resultado no cache antes de retorna-lo
      cache[key] = result;
      return result;
    }
  };
}

// --- Testando a funcao memoize ---
console.log("--- Testes da funcao memoize ---");

// Exemplo de uma funcao que queremos memoizar (ex: calculo de Fibonacci recursivo, que e computacionalmente caro)
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Cria uma versao memoizada da funcao fibonacci
const fibonacciMemoized = memoize(fibonacci);

console.log("Chamando fibonacciMemoized(10) pela primeira vez:");
console.time("fibonacciMemoized(10) - 1a vez");
console.log("Resultado:", fibonacciMemoized(10));
console.timeEnd("fibonacciMemoized(10) - 1a vez");

console.log("\nChamando fibonacciMemoized(10) novamente (deve vir do cache):");
console.time("fibonacciMemoized(10) - 2a vez");
console.log("Resultado:", fibonacciMemoized(10));
console.timeEnd("fibonacciMemoized(10) - 2a vez");

console.log("\nChamando fibonacciMemoized(5) pela primeira vez:");
console.time("fibonacciMemoized(5) - 1a vez");
console.log("Resultado:", fibonacciMemoized(5));
console.timeEnd("fibonacciMemoized(5) - 1a vez");

console.log("\nChamando fibonacciMemoized(5) novamente (deve vir do cache):");
console.time("fibonacciMemoized(5) - 2a vez");
console.log("Resultado:", fibonacciMemoized(5));
console.timeEnd("fibonacciMemoized(5) - 2a vez");

// Exemplo com outra funcao mais simples
function somar(a, b) {
  console.log("Calculando a soma de", a, "e", b);
  return a + b;
}

const somarMemoized = memoize(somar);

console.log("\nChamando somarMemoized(2, 3) pela primeira vez:");
console.log("Resultado:", somarMemoized(2, 3));

console.log("\nChamando somarMemoized(2, 3) novamente:");
console.log("Resultado:", somarMemoized(2, 3));

console.log("\nChamando somarMemoized(5, 1) pela primeira vez:");
console.log("Resultado:", somarMemoized(5, 1));

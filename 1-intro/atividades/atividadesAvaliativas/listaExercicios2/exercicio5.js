/*
 * 5. Debounce
 * Crie function debounce(fn, delay) que receba uma funcao fn e um delay
 * em ms, retornando uma nova funcao que so executa fn se nao for
 * chamada novamente dentro do intervalo.
 */

function debounce(fn, delay) {
  let timeoutId; // Variavel para armazenar o ID do temporizador

  // Retorna uma nova funcao
  return function (...args) {
    // Limpa qualquer temporizador anterior
    clearTimeout(timeoutId);

    // Define um novo temporizador
    // A funcao `fn` sera executada apenas depois que 'delay' milissegundos passarem
    // sem que esta funcao `debounce` seja chamada novamente.
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Executa a funcao original (fn) com os argumentos e o contexto corretos
    }, delay);
  };
}

// --- Testando a funcao debounce ---
console.log("--- Testes da funcao debounce ---");

// Exemplo de uma funcao que queremos "debouncar"
function minhaFuncao(mensagem) {
  console.log(
    "Funcao executada:",
    mensagem,
    "em",
    new Date().toLocaleTimeString(),
  );
}

// Cria uma versao "debounced" da minhaFuncao com um atraso de 1000ms (1 segundo)
const minhaFuncaoDebounced = debounce(minhaFuncao, 1000);

console.log("Chamando minhaFuncaoDebounced varias vezes em rapida sucessao...");

// Chamadas em rapida sucessao - apenas a ultima devera ser executada apos 1 segundo da ultima chamada.
minhaFuncaoDebounced("Primeira chamada");
setTimeout(() => minhaFuncaoDebounced("Segunda chamada"), 200);
setTimeout(() => minhaFuncaoDebounced("Terceira chamada"), 500);
setTimeout(
  () => minhaFuncaoDebounced("Quarta chamada (esta sera executada)"),
  1200,
);

// Chamada que sera executada apos 1 segundo de inatividade
setTimeout(() => {
  console.log("\nChamada apos um tempo de espera maior:");
  minhaFuncaoDebounced("Chamada final");
}, 3000);

console.log(
  "Aguarde para ver os resultados. A funcao real so executa apos o atraso.",
);

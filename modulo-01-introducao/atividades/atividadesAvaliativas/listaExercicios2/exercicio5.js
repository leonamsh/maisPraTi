/*
 * [cite_start]5. Debounce [cite: 7]
 * [cite_start]Crie function debounce(fn, delay) que receba uma funcao fn e um delay [cite: 7]
 * [cite_start]em ms, retornando uma nova funcao que so executa fn se nao for [cite: 7]
 * [cite_start]chamada novamente dentro do intervalo. [cite: 7]
 */

function debounce(fn, delay) {
  let timeoutId; // Variavel para armazenar o ID do temporizador

  [cite_start]; // Retorna uma nova funcao [cite: 7]
  return function (...args) {
    // ...args permite que a nova funcao aceite qualquer numero de argumentos
    // Limpa qualquer temporizador anterior
    clearTimeout(timeoutId);

    // Define um novo temporizador
    // A funcao `fn` sera executada apenas depois que 'delay' milissegundos passarem
    [cite_start]; // sem que esta funcao `debounce` seja chamada novamente. [cite: 7]
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
); // Esta sera a ultima chamada antes do delay de 1000ms

// Chamada que sera executada apos 1 segundo de inatividade
setTimeout(() => {
  console.log("\nChamada apos um tempo de espera maior:");
  minhaFuncaoDebounced("Chamada final");
}, 3000); // Garante que a ultima chamada tera tempo para ser executada

console.log(
  "Aguarde para ver os resultados. A funcao real so executa apos o atraso.",
);

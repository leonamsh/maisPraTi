const prompt = require("prompt-sync")({ sigint: true });

// Carrega dinamicamente os exercícios
const exercicios = {};
for (let i = 1; i <= 15; i++) {
  try {
    exercicios[i] = require(`./ex${i}.js`);
  } catch (e) {
    console.error(`Erro ao carregar exercício ${i}:`, e.message);
  }
}

// Descrições dos exercícios
const descricoesExercicios = {
  1: "Verificar se um número é par ou ímpar",
  2: "Classificar idade em categorias",
  3: "Classificar nota escolar",
  4: "Menu interativo com switch-case",
  5: "Calculadora de IMC",
  6: "Classificador de triângulos",
  7: "Calculadora de preço de maçãs",
  8: "Ordenar dois valores",
  9: "Contagem regressiva de 10 a 1",
  10: "Repetir número 10 vezes",
  11: "Somar 5 números",
  12: "Exibir tabuada",
  13: "Calcular média de números",
  14: "Calculadora de fatorial",
  15: "Gerar sequência de Fibonacci",
};

function mostrarMenu() {
  console.log("\n=== MENU DE EXERCÍCIOS ===");
  for (let i = 1; i <= 15; i++) {
    console.log(`${i}. ${descricoesExercicios[i]}`);
  }
  console.log("0. Sair");
}

function menuGeral() {
  while (true) {
    mostrarMenu();
    const escolha = prompt("\nDigite o número do exercício (1-15) ou '0' para sair: ").trim();

    if (escolha === "0") {
      console.log("Encerrando programa...");
      break;
    }

    const numero = parseInt(escolha);

    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
      continue;
    }

    if (numero >= 1 && numero <= 15) {
      try {
        console.log(`\n=== EXERCÍCIO ${numero} ===`);
        console.log(descricoesExercicios[numero]);
        exercicios[numero]();
      } catch (e) {
        console.error(`Erro ao executar exercício ${numero}:`, e.message);
      }
    } else {
      console.log("Número de exercício inválido. Digite um valor entre 1 e 15.");
    }
  }
}

menuGeral();

const prompt = require("prompt-sync")({ sigint: true });

const exercicios = {};
for (let i = 1; i <= 15; i++) {
  exercicios[i] = require(`./ex${i}.js`);
}

function menuGeral() {
  while (true) {
    const escolha = prompt("\nDigite o número do exercício (1 a 15) ou '0' para sair: ");
    if (escolha === "0") break;

    const escolhido = exercicios[escolha];
    if (escolhido) escolhido();
    else console.log("Exercício inválido!");
  }
}

menuGeral();

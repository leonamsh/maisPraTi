//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado). Esse dia deve ser um texto. Se for sábado, escrever "final de semana", se não escrever "dia de semana".

const prompt = require("prompt-sync")();

const diaSemana = prompt("Digite o dia da semana: ");

if (diaSemana.toLowerCase() === "sábado" || diaSemana.toLowerCase() === "domingo") {
  console.log("Final de semana");
} else if (
  diaSemana.toLowerCase() === "segunda" ||
  diaSemana.toLowerCase() === "terça" ||
  diaSemana.toLowerCase() === "quarta" ||
  diaSemana.toLowerCase() === "quinta" ||
  diaSemana.toLowerCase() === "sexta"
) {
  console.log("Dia de semana");
} else {
  console.log("Dia inválido.");
}

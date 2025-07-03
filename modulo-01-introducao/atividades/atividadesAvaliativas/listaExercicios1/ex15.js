// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.
const prompt = require("prompt-sync")({ sigint: true });

function ex15() {
  let termoAnterior = 0;
  let termoAtual = 1;
  console.log("Ex15 - Fibonacci:");
  console.log(termoAnterior);
  console.log(termoAtual);
  for (let posicao = 3; posicao <= 10; posicao++) {
    const proximoTermo = termoAnterior + termoAtual;
    console.log(proximoTermo);
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
  }
}

module.exports = ex15;

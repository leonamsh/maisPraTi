//Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require("prompt-sync")();

const eleitores = parseInt(prompt("Digite o número de eleitores: "));
const votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
const votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
const votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

const totalVotos = votosBrancos + votosNulos + votosValidos;

if (eleitores <= 0) {
  console.log("Número de eleitores inválido.");
} else if (votosBrancos < 0 || votosNulos < 0 || votosValidos < 0) {
  console.log("Número de votos inválido. Nenhum pode ser negativo.");
} else if (totalVotos > eleitores || totalVotos < eleitores) {
  console.log("Erro: A soma dos votos não pode ser maior nem que o número de eleitores!");
} else {
  const percentualBrancos = (votosBrancos / eleitores) * 100;
  const percentualNulos = (votosNulos / eleitores) * 100;
  const percentualValidos = (votosValidos / eleitores) * 100;

  console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}

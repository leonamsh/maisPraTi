// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.
const prompt = require("prompt-sync")({ sigint: true });

function ex7() {
  const quantidadeMacas = parseInt(prompt("Ex7 - Quantas maçãs? "));
  const precoUnitario = quantidadeMacas < 12 ? 0.3 : 0.25;
  const valorTotal = quantidadeMacas * precoUnitario;
  console.log(`Total: R$ ${valorTotal.toFixed(2)}`);
}
module.exports = ex7;

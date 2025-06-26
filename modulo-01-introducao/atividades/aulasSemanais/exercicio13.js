//Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA". Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. Considere que a senha correta é o valor 2807.

const prompt = require("prompt-sync")();

let senha = parseInt(prompt("Digite a senha: "));
do {
  console.log("Senha inválida.");
  senha = parseInt(prompt("Digite a senha: "));
} while (senha !== 2807);
console.log("Acesso permitido.");

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require("prompt-sync")({ sigint: true });

function ex4() {
  const opcao = prompt("Ex4 - Escolha uma opção:\n1. Olá\n2. Ajuda\n3. Sair\n");
  switch (opcao) {
    case "1":
      console.log("Você escolheu Olá!");
      break;
    case "2":
      console.log("Você escolheu Ajuda.");
      break;
    case "3":
      console.log("Saindo...");
      break;
    default:
      console.log("Opção inválida.");
  }
}
module.exports = ex4;

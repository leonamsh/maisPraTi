// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require("prompt-sync")({ sigint: true });

function ex4() {
  let opcao;
  do {
    console.log("\n=== Menu Interativo ===");
    console.log("1. Olá");
    console.log("2. Ajuda");
    console.log("3. Sair");
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        console.log("Você escolheu Olá!");
        break;
      case "2":
        console.log("Você escolheu Ajuda.");
        break;
      case "3":
        console.log("Saindo... Até logo!");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "3");
}

module.exports = ex4;

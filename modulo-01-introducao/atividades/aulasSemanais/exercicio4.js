// Exercício 4 - Classificação por faixa etária
import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input,
  output,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

function classificarFaixaEtaria(idade) {
  switch (true) {
    case idade >= 0 && idade <= 12:
      return "Criança";
    case idade >= 13 && idade <= 17:
      return "Adolescente";
    case idade >= 18 && idade <= 59:
      return "Adulto";
    case idade >= 60:
      return "Idoso";
    default:
      return "Idade inválida";
  }
}

async function main() {
  try {
    const resposta = await perguntar("Qual a sua idade? ");
    const idade = parseInt(resposta);

    if (isNaN(idade) || idade < 0) {
      console.log("Por favor, digite uma idade válida (número positivo).");
      return;
    }

    const faixa = classificarFaixaEtaria(idade);
    console.log(`Você é um(a) ${faixa}.`);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  } finally {
    rl.close();
  }
}

main();

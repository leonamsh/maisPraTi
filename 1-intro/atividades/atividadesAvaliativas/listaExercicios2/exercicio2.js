/*
 * 2. Jogo de Adivinhacao
 * Escreva um script que gere um numero aleatorio de 1 a 100 e peca ao
 * usuario, para adivinhar.
 * Use while para repetir ate acertar, contando
 * tentativas e exibindo "mais alto" ou "mais baixo" a cada palpite errado.
 */

// Para interagir com o usuario no terminal, vamos precisar do modulo 'readline'
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jogarAdivinhacao() {
  // Gera um numero aleatorio entre 1 e 100
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let acertou = false;

  console.log("Bem-vindo ao Jogo de Adivinhacao!");
  console.log("Estou pensando em um numero entre 1 e 100.");

  // Funcao para fazer a pergunta ao usuario
  const fazerPergunta = () => {
    rl.question("Qual e o seu palpite? ", (palpiteUsuario) => {
      const palpite = parseInt(palpiteUsuario);

      // Verifica se o palpite e um numero
      if (isNaN(palpite)) {
        console.log("Por favor, digite um numero valido.");
        fazerPergunta(); // Pergunta novamente
        return;
      }

      tentativas++; // Conta as tentativas

      if (palpite === numeroSecreto) {
        console.log(
          `Parabens! Voce acertou o numero ${numeroSecreto} em ${tentativas} tentativas!`,
        );
        acertou = true;
        rl.close(); // Fecha a interface de leitura
      } else if (palpite < numeroSecreto) {
        console.log("Mais alto!"); // Exibe "mais alto"
        fazerPergunta(); // Pergunta novamente
      } else {
        console.log("Mais baixo!"); // Exibe "mais baixo"
        fazerPergunta(); // Pergunta novamente
      }
    });
  };

  fazerPergunta(); // Inicia o jogo
}

jogarAdivinhacao();

/*
 * Secao 1: Estruturas de Controle Avancadas
 * 1. Validacao de Datas
 * Crie a funcao ehDataValida (dia, mes, ano) que retorne true se os valores
 * formarem uma data real (meses de 28-31 dias, ano bissexto para
 * fevereiro) e false caso contrario.
 */

function ehDataValida(dia, mes, ano) {
  // Verifica se dia, mes e ano sao numeros
  if (
    typeof dia !== "number" ||
    typeof mes !== "number" ||
    typeof ano !== "number"
  ) {
    console.log("Erro: Os valores de dia, mes e ano devem ser numeros.");
    return false;
  }

  // Verifica se o mes esta entre 1 e 12
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Verifica se o dia e positivo
  if (dia < 1) {
    return false;
  }

  // Define o numero de dias em cada mes
  let diasNoMes;
  if (mes === 2) {
    // Fevereiro
    // Verifica se e ano bissexto
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      diasNoMes = 29; // Ano bissexto
    } else {
      diasNoMes = 28; // Ano normal
    }
  } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    diasNoMes = 30; // Meses com 30 dias
  } else {
    diasNoMes = 31; // Meses com 31 dias
  }

  // Verifica se o dia esta dentro do limite para o mes
  if (dia > diasNoMes) {
    return false;
  }

  // Se passou por todas as verificacoes, a data e valida
  return true;
}

// --- Testando a funcao ---
console.log("--- Testes da funcao ehDataValida ---");
console.log("29/02/2024 (bissexto):", ehDataValida(29, 2, 2024)); // true
console.log("29/02/2023 (nao bissexto):", ehDataValida(29, 2, 2023)); // false
console.log("31/01/2023:", ehDataValida(31, 1, 2023)); // true
console.log("31/04/2023:", ehDataValida(31, 4, 2023)); // false (Abril so tem 30 dias)
console.log("15/13/2023:", ehDataValida(15, 13, 2023)); // false (Mes invalido)
console.log("0/01/2023:", ehDataValida(0, 1, 2023)); // false (Dia invalido)
console.log("10/10/ano:", ehDataValida(10, 10, "ano")); // false (Nao e numero)
/*
* [cite_start]2. Jogo de Adivinhacao [cite: 2]
* [cite_start]Escreva um script que gere um numero aleatorio de 1 a 100 e peca ao [cite: 2]
* [cite_start]usuario, para adivinhar. [cite: 2]
* [cite_start]Use while para repetir ate acertar, contando [cite: 3]
* [cite_start]tentativas e exibindo "mais alto" ou "mais baixo" a cada palpite errado. [cite: 3]
*/

// Para interagir com o usuario no terminal, vamos precisar do modulo 'readline'
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jogarAdivinhacao() {
    [cite_start]// Gera um numero aleatorio entre 1 e 100 [cite: 2]
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

            [cite_start]tentativas++; // Conta as tentativas [cite: 3]

            if (palpite === numeroSecreto) {
                console.log(`Parabens! Voce acertou o numero ${numeroSecreto} em ${tentativas} tentativas!`);
                acertou = true;
                rl.close(); // Fecha a interface de leitura
            } else if (palpite < numeroSecreto) {
                console.log("Mais alto!"); [cite_start]// Exibe "mais alto" [cite: 3]
                fazerPergunta(); // Pergunta novamente
            } else {
                console.log("Mais baixo!"); [cite_start]// Exibe "mais baixo" [cite: 3]
                fazerPergunta(); // Pergunta novamente
            }
        });
    };

    fazerPergunta(); // Inicia o jogo
}

jogarAdivinhacao();

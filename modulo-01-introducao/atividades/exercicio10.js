//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alumos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C;
//b) O número de alunos reprovados na turma D;
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

//[Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)

//[Saída para os dados de entrada acima]
//6 (número de alunos reprovados na turma C)
//3 (número de alunos reprovados na turma D)
//11.25% (percentagem de alunos reprovados em relação ao total de alunos das duas turmas)

const prompt = require("prompt-sync")();

const turmaC = 60;
const turmaD = 20;
const percentualC = parseFloat(prompt("Digite o percentual de alunos reprovados na turma C: "));
const percentualD = parseFloat(prompt("Digite o percentual de alunos aprovados na turma D: "));

const alunosReprovadosC = (percentualC / 100) * turmaC;
const alunosAprovadosD = (percentualD / 100) * turmaD;
const alunosReprovadosD = turmaD - alunosAprovadosD;

console.log(`Número de alunos reprovados na turma C: ${alunosReprovadosC}`);
console.log(`Número de alunos reprovados na turma D: ${alunosReprovadosD}`);
console.log(
  `Percentagem de alunos reprovados em relação ao total de alunos das duas turmas: ${
    ((alunosReprovadosC + alunosReprovadosD) / (turmaC + turmaD)) * 100
  }%`
);

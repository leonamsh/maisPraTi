// //Aprendendo sobre objetos

// let livro = {
//   nome: "Marley e Eu",
//   anoLancamento: "2024",
//   autor: "Will Smith",
//   nrPaginas: 12,
//   atores: ["Scooby", "Super Cão", "Batcão"],

//   mostrarCaracteristicas: function () {
//     return `${this.nome} é um libro para ficar alegre`;
//   },
// };

// console.log(livro.mostrarCaracteristicas());
// console.log(livro.nome);

// let livro2 = livro;
// livro2.preco = 20.2;

// console.log(livro);
// console.log(livro2);

// let filme = {
//   titulo: "High School Musical",
//   anoLancamento: 2007,
//   atores: ["Zac Efron", "Arthur Morgan", "Cloud Strife"],
//   gereno: "gerra",
//   mostrarCaracteristicas: function () {
//     return `${this.titulo} é um filme de drama`;
//   },
// };

// console.log(filme.mostrarCaracteristicas());

// //

// function Anime(nome, maisForte, maisFraco, nota) {
//   return {
//     nome,
//     maisForte,
//     maisFraco,
//     nota,
//   };
// }

// let anime1 = Anime("Naruto", "Gemna", "Konohamaru", 5);
// let anime2 = Anime("One Piece", "Coby", "Ace", 5);
// console.log(anime1);
// console.log(anime2);

// //

// let jogadores = ["Caça Rato", "Ganso", "Pato"];

// for (let key in jogadores) {
//   console.log(jogadores[key]);
// }

// //Calculem as médias das notas dos alunos de um professor e digam se a turma do Professor está na média.

// let professor = {
//   nome: "Stark Parker",
//   materia: "Física",
//   notas: {
//     aluno1: [5, 2],
//     aluno2: [3, 7],
//   },
// };

// //minha solução

// const calcularMedia = (notas) => {
//   const soma = notas.reduce((acc, nota) => acc + nota, 0);
//   return soma / notas.length;
// };

// let medias = {};
// for (let aluno in professor.notas) {
//   medias[aluno] = calcularMedia(professor.notas[aluno]);
// }

// const mediaTurma = calcularMedia(Object.values(medias));
// console.log("Médias dos alunos:", medias);
// console.log("Média da turma:", mediaTurma);

// if (mediaTurma >= 5) {
//   console.log("A turma está na média.");
// } else {
//   console.log("A turma está abaixo da média.");
// }

// //solução do professor

// let somaNotas = 0;
// let numeroAlunos = 0;
// for (let aluno in professor.notas) {
//   somaNotas += Array.isArray(professor.notas[aluno])
//     ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0) / professor.notas[aluno].length
//     : professor.notas[aluno];
//   numeroAlunos++;
// }

// let media = somaNotas / numeroAlunos;

// if (media >= 6) {
//   console.log(`A média da turma é ${media} e está acima do padrão`);
// } else {
//   console.log(`A média da turma é ${media} e está abaixo do padrão`);
// }

// console.log(somaNotas);

//

// let livraria = [
//   { titulo: "1984", autor: "George Orwell", ano: 1984 },
//   { titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001 },
//   { titulo: "Código Limpo", autor: "Martin", ano: 2010 },
//   { titulo: "O Velho e o Mar", autor: "Hemmingway", ano: 1910 },
//   { titulo: "O Príncipe", autor: "Maquiável", ano: 2002 },
// ];

// for(let livro of livraria){
//   if(livro.ano <2000){
//     console.log(`o livro ${livro.titulo} é anterior aos anos 2000`);
//   }

// }

// let filmes = [
//   { titulo: "Sempre ao seu lado", genero: "De chorar" },
//   { titulo: "Massacre da Serra Elétrica", genero: "Terror" },
//   { titulo: "Minha Mãe é uma Peça", genero: "Comédia" },
//   { titulo: "Tarzan", genero: "Aventura" },
//   { titulo: "Como eu Era Antes de Você", genero: "De chorar" },
//   { titulo: "Jogo da Imitação", genero: "Histórico" },
//   { titulo: "Top Gun", genero: "Guerra" },
//   { titulo: "Your Name", genero: "Romance" },
//   { titulo: "Deadpool", genero: "Herói" },
//   { titulo: "Batman Forever", genero: "Herói" },
// ];

//Listem a contagem de generos desses filmes.
// ou seja filmes de chorar tem 2 filmes.
// fantasia: 1
// guerra: 2

// let contagemGeneros = {};
// for (let filme of filmes) {
//   if (contagemGeneros[filme.genero]) {
//     contagemGeneros[filme.genero]++;
//   } else {
//     contagemGeneros[filme.genero] = 1;
//   }
// }
// console.log(contagemGeneros);
// //outra solução

// filmes.forEach((element) => {
//   if (contagemGeneros[element.genero]) {
//     contagemGeneros[element.genero]++;
//   } else {
//     contagemGeneros[element.genero] = 1;
//   }
// });
// console.log(contagemGeneros);

//Contruir uma função que calcule o fatorial de um número.

// let fatorial = (n) => {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * fatorial(n - 1);
//   }
// };

// console.log(fatorial(5)); // 120
// console.log(fatorial(0)); // 1
// console.log(fatorial(1)); // 1
// console.log(fatorial(10)); // 3628800
// console.log(fatorial(3)); // 6
// console.log(fatorial(4)); // 24

//imprimam os primeiros 10 números da sequencia de fibonacci

// let fibonacci = (n) => {
//   let fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// };
// console.log(`fibonacci de 10 => ${fibonacci(10)}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// console.log(`fibonacci de 05 => ${fibonacci(5)}`); // [0, 1, 1, 2, 3]
// console.log(`fibonacci de 15 => ${fibonacci(15)}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
// console.log(`fibonacci de 20 => ${fibonacci(20)}`); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]

//função PA - Progressão Aritmética
// let pa = (n) => {
//   let pa = [];
//   for (let i = 0; i < n; i++) {
//     pa.push(i * 2);
//   }
//   return pa;
// };
// console.log(`PA de 10 => ${pa(10)}`); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
// //
// //

// function fatorial(n) {
//   if (n === 0) {
//     return 1
//   } else {
//     return n * fatorial(n-1)
//   }
// }

// console.log(fatorial(5));
//

//soma dos números de 1 até N
//

// function soma(n) {
//   if (n===0) {
//     return 0
//   }  else {
//     return n + soma(n-1)
//   }
// }
// //resultado esperado:
// // 5 + (soma(5-1) = 4)
// // 4 + (soma(4-1) = 3)
// // 3 + (soma(3-1) = 2)
// // 2 + (soma(2-1) = 1)
// // 1 + (soma(1-1) = 0)
// // 0 -> return
// // 5 + 4 + 3 + 2 + 1 = 15
// console.log(soma(5));

//fibonacci recursivo

// function fibonacci(n) {
//     if (n <= 0) return 0; // Caso base: Fibonacci(0) = 0
//     if (n === 1) return 1; // Caso base: Fibonacci(1) = 1
//     return fibonacci(n - 1) + fibonacci(n - 2); // Passo recursivo
// }

// console.log(fibonacci(5)); // Saída: 5 (0, 1, 1, 2, 3, 5)
// console.log(fibonacci(10)); // Saída: 55
//
let categorias = [
  {
    id: 1,
    nome: "eletrônicos",
    filhos: [
      { id: 2, nome: "celulares", filhos: [] },
      {
        id: 3,
        nome: "computadores",
        filhos: [{ id: 4, nome: "tablets", filhos: [] }],
      },
    ],
  },
  {
    id: 5,
    nome: "roupas",
    filhos: [],
  },
];

function imprimirCategorias(categorias, nivel = 0) {
  for (const categoria of categorias) {
    console.log(" ".repeat(nivel * 4) + categoria.nome);

    if (categoria.filhos && categoria.filhos.length > 0) {
      imprimirCategorias(categoria.filhos, nivel + 1);
    }
  }
}

imprimirCategorias(categorias);

//resultado esperado
// eletronicos
//     celulares
//     compudatores
//         tablets
// roupas
//

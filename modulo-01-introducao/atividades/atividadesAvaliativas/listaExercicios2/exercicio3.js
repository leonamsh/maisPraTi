/*
 * 3. Palavras Unicas
 * Dada uma string (ex.: "ola ola mundo mundo"), use if/else e for para extrair
 * todas as palavras unicas e exibi-las em um array.
 */

function extrairPalavrasUnicas(texto) {
  // 1. Converter o texto para letras minusculas para evitar duplicatas por causa de caixa (Ola vs ola)
  const textoMinusculo = texto.toLowerCase();

  // 2. Separar a string em palavras. Usamos split para dividir a string onde ha espacos.
  const palavras = textoMinusculo.split(" ");

  // 3. Criar um array vazio para armazenar as palavras unicas
  const palavrasUnicas = [];

  // 4. Usar um loop 'for' para percorrer cada palavra
  for (let i = 0; i < palavras.length; i++) {
    const palavraAtual = palavras[i];

    // 5. Verificar se a palavra atual ja existe no array de palavras unicas
    //    Usamos 'includes' para ver se a palavra ja esta la
    if (!palavrasUnicas.includes(palavraAtual)) {
      // Se a palavra nao estiver no array, adicionamos ela
      palavrasUnicas.push(palavraAtual);
    }
  }

  return palavrasUnicas;
}

// --- Testando a funcao ---
console.log("--- Testes da funcao extrairPalavrasUnicas ---");
const frase1 = "ola ola mundo mundo";
console.log(
  `Frase: "${frase1}" -> Palavras unicas:`,
  extrairPalavrasUnicas(frase1),
);

const frase2 = "Eu gosto de programar e programar e divertido";
console.log(
  `Frase: "${frase2}" -> Palavras unicas:`,
  extrairPalavrasUnicas(frase2),
);

const frase3 = "A banana e uma fruta amarela e a maca e uma fruta vermelha";
console.log(
  `Frase: "${frase3}" -> Palavras unicas:`,
  extrairPalavrasUnicas(frase3),
);

/*
* [cite_start]3. Palavras Unicas [cite: 4]
* [cite_start]Dada uma string (ex.: "ola ola mundo mundo"), use if/else e for para extrair [cite: 4]
* [cite_start]todas as palavras unicas e exibi-las em um array. [cite: 4]
*/

function extrairPalavrasUnicas(texto) {
    // 1. Converter o texto para letras minusculas para evitar duplicatas por causa de caixa (Ola vs ola)
    const textoMinusculo = texto.toLowerCase();

    // 2. Separar a string em palavras. Usamos split para dividir a string onde ha espacos.
    const palavras = textoMinusculo.split(' ');

    // 3. Criar um array vazio para armazenar as palavras unicas
    const palavrasUnicas = [];

    [cite_start]// 4. Usar um loop 'for' para percorrer cada palavra [cite: 4]
    for (let i = 0; i < palavras.length; i++) {
        const palavraAtual = palavras[i];

        [cite_start]// 5. Verificar se a palavra atual ja existe no array de palavras unicas [cite: 4]
        //    Usamos 'includes' para ver se a palavra ja esta la
        [cite_start]if (!palavrasUnicas.includes(palavraAtual)) { // Usa if/else [cite: 4]
            // Se a palavra nao estiver no array, adicionamos ela
            palavrasUnicas.push(palavraAtual);
        }
    }

    return palavrasUnicas;
}

// --- Testando a funcao ---
console.log("--- Testes da funcao extrairPalavrasUnicas ---");
const frase1 = "ola ola mundo mundo";
console.log(`Frase: "${frase1}" -> Palavras unicas:`, extrairPalavrasUnicas(frase1)); // Expected: ["ola", "mundo"]

const frase2 = "Eu gosto de programar e programar e divertido";
console.log(`Frase: "${frase2}" -> Palavras unicas:`, extrairPalavrasUnicas(frase2)); // Expected: ["eu", "gosto", "de", "programar", "e", "divertido"]

const frase3 = "A banana e uma fruta amarela e a maca e uma fruta vermelha";
console.log(`Frase: "${frase3}" -> Palavras unicas:`, extrairPalavrasUnicas(frase3));

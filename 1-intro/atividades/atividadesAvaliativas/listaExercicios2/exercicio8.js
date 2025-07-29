/*
 * 8. Agrupamento por Propriedade
 * Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
 * cada chave e um cliente e o valor e a soma de todos os seus total.
 */

function agruparVendasPorCliente(vendas) {
  // O metodo `reduce` e usado para "reduzir" um array a um unico valor.
  // Ele recebe dois argumentos:
  // 1. Uma funcao callback que e executada para cada elemento do array.
  // 2. Um valor inicial para o acumulador (neste caso, um objeto vazio {}).
  const vendasAgrupadas = vendas.reduce((acumulador, vendaAtual) => {
    const cliente = vendaAtual.cliente; // Pega o nome do cliente da venda atual
    const totalVenda = vendaAtual.total; // Pega o total da venda atual

    // Verifica se o cliente ja existe como chave no objeto acumulador
    if (acumulador[cliente]) {
      // Se o cliente ja existe, soma o total da venda atual ao total existente
      acumulador[cliente] += totalVenda;
    } else {
      // Se o cliente nao existe, cria uma nova chave com o nome do cliente e atribui o total da venda
      acumulador[cliente] = totalVenda;
    }

    return acumulador; // Retorna o acumulador atualizado para a proxima iteracao
  }, {}); // {} e o valor inicial do acumulador (um objeto vazio)

  return vendasAgrupadas;
}

// --- Testando a funcao ---
console.log("--- Testes da funcao agruparVendasPorCliente ---");

const vendas = [
  { cliente: "Alice", total: 100 },
  { cliente: "Bob", total: 50 },
  { cliente: "Alice", total: 200 },
  { cliente: "Charlie", total: 75 },
  { cliente: "Bob", total: 120 },
  { cliente: "Alice", total: 50 },
];

console.log("Array original de vendas:");
console.log(vendas);

const vendasPorCliente = agruparVendasPorCliente(vendas);
console.log("\nVendas agrupadas por cliente:");
console.log(vendasPorCliente);
/* Expected:
{
  Alice: 350, (100 + 200 + 50)
  Bob: 170,   (50 + 120)
  Charlie: 75
}
*/

const vendas2 = [
  { cliente: "Maria", total: 25 },
  { cliente: "Joao", total: 10 },
  { cliente: "Maria", total: 30 },
];

console.log("\nOutro array de vendas:");
console.log(vendas2);
const vendasPorCliente2 = agruparVendasPorCliente(vendas2);
console.log("Vendas agrupadas por cliente:");
console.log(vendasPorCliente2);

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

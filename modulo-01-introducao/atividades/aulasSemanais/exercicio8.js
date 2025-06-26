//Escreva um algotirmo que leia uma temperatura em graus Celsius e apresente-a convertida em graus Fahrenheit. A formula de conversão e:
//F = C x 1,8 + 32

const prompt = require("prompt-sync")();
const celsius = parseFloat(prompt("Digite uma temperatura em graus Celsius: "));
const fahrenheit = celsius * 1.8 + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);

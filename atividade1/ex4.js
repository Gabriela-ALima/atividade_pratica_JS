import readline from 'readline-sync';

let num1;
let num2;
let num3;
let num4;
let dif;

num1 = readline.questionFloat("Digite o primeiro numero");
num2 = readline.questionFloat("Digite o segundo numero");
num3 = readline.questionFloat("Digite o terceiro numero");
num4 = readline.questionFloat("Digite o quarto numero");

dif = (num1 * num2) - (num3 * num4);

console.log(dif);
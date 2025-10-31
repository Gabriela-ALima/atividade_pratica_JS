import readline from 'readline-sync';

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = readline.questionFloat("Digite o valor do salrio bruto: ");
adicionalNoturno = readline.questionFloat("Digite o valor do adicional noturno: ");
horasExtras = readline.questionFloat("Digite o valor das horas extras: ");
descontos = readline.questionFloat("Digite o valor de descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`O salário líquido é ${salarioLiquido}`);
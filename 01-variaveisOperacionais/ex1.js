import readline from 'readline-sync';

let salario; 
let abono;
let novoSalario;

salario = readline.questionFloat("Digite o salario: ");
abono = readline.questionFloat("Digite o valor do abono: ");
novoSalario = salario + abono;

console.log(`O novo salário é ${novoSalario}`);
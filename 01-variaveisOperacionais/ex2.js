import readline from 'readline-sync';

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = readline.questionFloat("Digite a primeira nota: ");
nota2 = readline.questionFloat("Digite a segunda nota: ");
nota3 = readline.questionFloat("Digite a terceira nota: ");
nota4 = readline.questionFloat("Digite a quarta nota: ");

media = (nota1 + nota2 + nota3 + nota4)/4;

console.log(`A média é: ${media}`);



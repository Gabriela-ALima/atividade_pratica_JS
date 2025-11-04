import readline from 'readline-sync';

let idade = 1;
let count21 = 0;
let count50 = 0;

while(idade>0){
    idade = readline.questionInt("Digite uma idade: ");
    if(idade<21){
        count21++;
    }else if(idade>50){
        count50++;
    }
}

console.log(`Total de pessoas menores que 21 anos: ${count21 -1}`);

console.log(`Total de pessoas maiores que 50 anos: ${count50}`);
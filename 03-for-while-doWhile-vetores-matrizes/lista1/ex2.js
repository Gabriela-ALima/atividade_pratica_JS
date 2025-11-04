import readline from 'readline-sync';

let numero;
let countPar = 0;
let countImpar = 0;

for(let i=1; i<=10; i++){
    numero = readline.questionInt(`Digite o ${i} numero: `);
    if(numero % 2 == 0){
        countPar++;
    }else{
        countImpar++;
    }
};

console.log(`Total de numeros pares: ${countPar}`);
console.log(`Total de numeros impares: ${countImpar}`);
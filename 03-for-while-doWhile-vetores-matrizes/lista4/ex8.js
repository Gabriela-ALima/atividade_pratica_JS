import readline from 'readline-sync';

let vet = [];
let impares = [];
let pares = [];
let soma = 0;
let media;

for (let i = 0; i < 10; i++) {
    let numero = readline.questionInt(`Digite o numero ${i + 1}: `);
    vet.push(numero);
}


for (let i = 0; i < vet.length; i++) {
    soma += vet[i];

    
    if (i % 2 !== 0) {
        impares.push(vet[i]);
    }

   
    if (vet[i] % 2 === 0) {
        pares.push(vet[i]);
    }
}


media = soma / vet.length;


console.log("\nElementos nos índices ímpares:");
console.log(impares.join(" "));

console.log("\nElementos pares:");
console.log(pares.join(" "));

console.log(`\nSoma: ${soma}`);
console.log(`Média: ${media.toFixed(2)}`);


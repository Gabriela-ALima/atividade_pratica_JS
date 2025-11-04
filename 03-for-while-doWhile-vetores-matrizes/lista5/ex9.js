import readline from 'readline-sync';


let matriz = [];


for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = readline.questionInt(`Digite o valor para posição [${i}][${j}]: `);
    }
}

console.log("\nMatriz digitada:");
console.table(matriz);


let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === j) {
            diagonalPrincipal.push(matriz[i][j]);
            somaPrincipal += matriz[i][j];
        }

    
        if (i + j === 2) {
            diagonalSecundaria.push(matriz[i][j]);
            somaSecundaria += matriz[i][j];
        }
    }
}

console.log("\nElementos da Diagonal Principal:");
console.log(diagonalPrincipal.join(" "));

console.log("\nElementos da Diagonal Secundária:");
console.log(diagonalSecundaria.join(" "));

console.log(`\nSoma dos Elementos da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundária: ${somaSecundaria}`);

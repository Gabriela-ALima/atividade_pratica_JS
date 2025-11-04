import readline from 'readline-sync';


let notas = [];
let medias = [];

for (let i = 0; i < 10; i++) {
    notas[i] = [];
    console.log(`\n=== Participante ${i + 1} ===`);
    let soma = 0;


    for (let j = 0; j < 4; j++) {
        notas[i][j] = readline.questionFloat(`Digite a nota do ${j + 1} bimestre: `);
        soma += notas[i][j];
    }


    medias[i] = soma / 4;
}

console.log("\nMatriz de Notas (Participantes x Bimestres):");
console.table(notas);

console.log("Médias dos participantes:");
for (let i = 0; i < 10; i++) {
    console.log(`Participante ${i + 1}: ${medias[i].toFixed(1)}`);
}

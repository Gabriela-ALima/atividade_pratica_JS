import readline from 'readline-sync';

let vet = [2,5,1,3,4,9,7,8,10,6];
let numero;
let encontrado = false;

numero = readline.questionInt("Digite o numero que voce deseja encontrar: ");

for(let i=0; i<10; i++){
    if(numero === vet[i]){
        console.log(`O numero ${numero} esta na posicao ${i}`);
        encontrado = true;
        break;
    }

}

if (!encontrado) {
    console.log(`O numero ${numero} não foi encontrado`);
}
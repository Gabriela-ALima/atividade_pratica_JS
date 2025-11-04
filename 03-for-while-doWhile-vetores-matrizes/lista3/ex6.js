import readline from 'readline-sync';

let numero;
let soma = 0;
let countTot = 0;

do{

    numero = readline.questionInt("Digite um numero: ");
    if(numero !== 0 && numero%3 === 0){
        soma+=numero;
        countTot++;
    }

}while(numero !==0);

if (countTot > 0) {
  let media = soma / countTot;
  console.log(`A média de todos os números múltiplos de 3 é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número múltiplo de 3 foi digitado.");
}
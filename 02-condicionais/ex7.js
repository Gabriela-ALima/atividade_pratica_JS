import readline from 'readline-sync';

let numero1; 
let numero2;
let op;
let result;

numero1 = readline.questionFloat("Digite o primeiro numero ");
numero2 = readline.questionFloat("Digite o segundo numero ");
op = readline.questionInt("Operacao ");


switch (op){
    case 1: 
         result = numero1 + numero2;
         console.log(`${numero1} + ${numero2} = ${result}`);
        break;
    case 2:
         result = numero1 - numero2;
         console.log(`${numero1} - ${numero2} = ${result}`);
        break;
    case 3: 
         result = numero1 * numero2;
         console.log(`${numero1} * ${numero2} = ${result}`);
        break;
        
    case 4:
         result = numero1 / numero2;
         console.log(`${numero1} / ${numero2} = ${result}`);
        break;
    default:
        console.log("Opcao Invalida");            
       
}
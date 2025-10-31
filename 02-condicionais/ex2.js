import readline from 'readline-sync';

let numero; 


numero = readline.questionInt("Digite o valor de a: ");

if(numero % 2 == 0 && numero > 0){
    console.log(`O numero ${numero} eh par e positivo`);
}else if(numero % 2 == 0 && numero < 0){
     console.log(`O numero ${numero} eh par e negativo`);
}else if(numero % 2 != 0 && numero > 0){
    console.log(`O numero ${numero} eh impar e positivo`);
}else {
    console.log(`O numero ${numero} eh impar e negativo`);
}
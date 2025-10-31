import readline from 'readline-sync';

let a; 
let b;
let c;
let soma;

a = readline.questionInt("Digite o valor de a: ");
b = readline.questionInt("Digite o valor de b: ");
c = readline.questionInt("Digite o valor de c: ");
soma = a + b;

if(soma > c){
    console.log(`${a} + ${b} = ${soma} > ${c}
        \n A soma de A + b eh maior que c`);
}else if(soma < c){
   console.log(`${a} + ${b} = ${soma} < ${c}
        \n A soma de A + b eh menor que c`); 
}else{
    console.log(`${a} + ${b} = ${soma} = ${c}
        \n A soma de A + b eh igaul que c`);
}

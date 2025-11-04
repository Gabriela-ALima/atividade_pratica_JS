import readline from 'readline-sync';

let numero1, numero2;

numero1 = readline.questionInt("Digite o primeiro numero ");
numero2 = readline.questionInt("Digite o segundo numero ");

if(numero2<=numero1){
    console.log("O primeiro numero precisa ser maior.")
}else{
    console.log("Intervalo válido");
    for(let i=numero1; i<=numero2; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log(`${i} é multiplo de 3 e 5`);
        }
    }
};


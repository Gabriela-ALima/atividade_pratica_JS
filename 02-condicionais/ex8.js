import readline from 'readline-sync';

let saldo = 1000.00; 

console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");

let operacao = readline.questionInt("Digite o codigo da operacao: ");

switch (operacao) {
    case 1:
        console.log("Operacao - Saldo");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    case 2:
        console.log("Operacao - Saque");
        let valorSaque = readline.questionFloat("Digite o valor do saque: R$ ");
        
        if (valorSaque > saldo) {
            console.log("Saldo Insuficiente!");
        } else {
            saldo -= valorSaque;
            console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        }
        break;

    case 3:
        console.log("Operacao - Deposito");
        let valorDeposito = readline.questionFloat("Digite o valor do depósito: R$ ");
        saldo += valorDeposito;
        console.log(`Novo Saldo: R$ ${saldo.toFixed(2)}`);
        break;

    default:
        console.log("Operacao invalida!");
        break;
}

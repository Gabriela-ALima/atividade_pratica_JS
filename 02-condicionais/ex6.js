import readline from 'readline-sync';

let nome; 
let cod;
let salario;
let reajuste;
let novoSalario;

nome = readline.question("Nome do colaborador ");
cod = readline.questionInt("Codigo ");
salario = readline.questionFloat("Salario ");

switch (cod){
    case 1: 
         reajuste = 10;
         novoSalario = salario + (salario * reajuste/100);
        console.log(`Nome do colaborador: ${nome}\n
                     Cargo: Gerente   
                     Salario: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 2:
         reajuste = 7;
         novoSalario = salario + (salario * reajuste/100);
        console.log(`Nome do colaborador: ${nome}\n
                     Cargo: Vendodor   
                     Salario: R$ ${novoSalario.toFixed(2)}`);
        break; 
    case 3: 
         reajuste = 9;
         novoSalario = salario + (salario * reajuste/100);
        console.log(`Nome do colaborador: ${nome}\n
                     Cargo: Supervisor   
                     Salario: R$ ${novoSalario.toFixed(2)}`);
        break;
        
    case 4:
         reajuste = 6;
         novoSalario = salario + (salario * reajuste/100);
        console.log(`Nome do colaborador: ${nome}\n
                     Cargo: Motorista   
                     Salario: R$ ${novoSalario.toFixed(2)}`);
        break; 
    case 5: 
         reajuste = 5;
         novoSalario = salario + (salario * reajuste/100);
        console.log(`Nome do colaborador: ${nome}\n
                     Cargo: Estoquista  
                     Salario: R$ ${novoSalario.toFixed(2)}`);
        break;
    case 6:
         reajuste = 5;
         novoSalario = salario + (salario * reajuste/100);
        console.log(`Nome do colaborador: ${nome}\n
                     Cargo: Tecnico TI   
                     Salario: R$ ${novoSalario.toFixed(2)}`);
        break;
    default:
        console.log("Opcao Invalida");            
       
}
import readline from 'readline-sync';

let codigoProd; 
let quant;
let valorProd;
let valorTot;

codigoProd = readline.questionInt("Codigo do produto ");
quant = readline.questionInt("Quantidade ");

switch (codigoProd){
    case 1: 
         valorProd = 10;
         valorTot = quant * valorProd;
        console.log(`Produto: Cachorro quente \n
        Valor Total: R$ ${valorTot}`);
        break;
    case 2:
         valorProd = 15;
         valorTot = quant * valorProd;
        console.log(`Produto: X-Salada \n 
        Valor Total: R$ ${valorTot}`);
        break;   
    case 3: 
         valorProd = 18;
         valorTot = quant * valorProd;
        console.log(`Produto: X- Bacon \n
        Valor Total: R$ ${valorTot}`);
        break;
    case 4:
         valorProd = 12;
         valorTot = quant * valorProd;
        console.log(`Produto: bauru
        Valor Total: R$ ${valorTot}`);
        break;  
    case 5: 
         valorProd = 8;
         valorTot = quant * valorProd;
        console.log(`Produto: Refrigerante \n
        Valor Total: R$ ${valorTot}`);
        break;
    case 6:
         valorProd = 13;
         valorTot = quant * valorProd;
        console.log(`Produto: Suco de Laranja \n
        Valor Total: R$ ${valorTot}`);
        break;
    default:
        console.log("Opcao Invalida");            
       
}
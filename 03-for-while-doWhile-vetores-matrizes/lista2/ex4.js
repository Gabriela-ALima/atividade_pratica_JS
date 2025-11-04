import readline from 'readline-sync';

let continua = true;
let countDev = 0;
let countMDev = 0;
let countHDev = 0;
let countNaoB = 0;
let countTot = 0;
let somaIdade = 0;
let idade, genero, dev;

while(continua){
    idade = readline.questionInt("Idade: ");
    genero = readline.questionInt( `Informe o gênero: \n
1 - Mulher Cis \n
2 - Homem Cis \n
3 - Não Binário \n
4 - Mulher Trans \n
5 - Homem Trans \n
6 - Outros`);
    dev = readline.questionInt( `Pessoa desenvolvedora: \n
1 - BackEnd \n
2 - FrontEnd \n
3 - Mobile \n
4 - FullStack \n`);

    countTot++;
    somaIdade+=idade;

    if(dev === 1){
        countDev++;
    }else if((genero === 1 || genero === 4) && dev === 2) {
        countMDev++;
    }else if((genero === 2 || genero === 5) && dev === 3 && idade > 40){
        countHDev++;
    }else if(genero === 3 && dev === 4 && idade<30){
        countNaoB++
    }

     continua = readline.keyInYN("Quer continaur? ");

}

let media = somaIdade/countTot;

console.log(`Total de pessoas desenvolvedoras BackEnd: ${countDev}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${countMDev}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${countHDev}`);
console.log(`Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${countNaoB}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${countTot}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${media}`);

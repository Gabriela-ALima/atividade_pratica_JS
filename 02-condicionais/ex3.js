import readline from 'readline-sync';

let nome; 
let idade;
let primeiraDoacao;
let primeiraDoacaoResposta;


nome = readline.question("Digite o nome do doador: ");
idade = readline.questionInt("Digite a idade do doador: ");
primeiraDoacaoResposta = readline.question("É a primeira doacao de sangue? (s/n) ").toLowerCase();
primeiraDoacao = primeiraDoacaoResposta === 's';

if(idade > 18 && idade <69){
    if(idade < 60){
        console.log(`${nome} esta apto(a) para doar sangue`);
    }else if(idade >= 60 && primeiraDoacao){
        console.log(`${nome} nao esta apto(a) para doar sangue`);
    }else{
        console.log(`${nome} esta apto(a) pra doar`);
    }
}else{
   console.log(`${nome} nao esta apto(a) para doar sangue`); 
}
import readline from 'readline-sync';

let carac1; 
let carac2;
let carac3;


carac1 = readline.question("Digite a primeira caracteristica ");
carac2 = readline.question("Digite a segunda caracteristica ");
carac3 = readline.question("Digite a terceira caracteristica ");

if(carac1 == "vertebrado"){
    if(carac2 == "ave"){
        if(carac3 == "carnivoro"){
            console.log("Aguia");
        }else if(carac3 == "onovoro"){
            console.log("Pomba");
        }
    }else if(carac2 == "mamifero"){
        if(carac3 == "onivoro"){
            console.log("Homem");
        }else if(carac3 == "herbivoro"){
            console.log("Vaca");
        }
    }
}else if(carac1 == "invertebrado"){
    if(carac2 == "inseto"){
        if(carac3 == "hematofogo"){
            console.log("Pulga");
        }else if(carac3 == "herbivoro"){
            console.log("Lagarta");
        }
    }else if(carac2 == "anelideo"){
        if(carac3 == "hematofogo"){
            console.log("Sanguessuga");
        }else if(carac3 == "onivoro"){
            console.log("minhoca");
        }
    }
}else{
    console.log("Não esta na lista");
}
var nota1 = 7.5;
var nota2 = 6.7;

media = nota1 + nota2 /2 ;

var conceito = "";

if (media >= 8){
    conceito = "Otimo";
}else if (media >=6){
    conceito = "Bom";
}else{
    conceito = "Regular";
}

console.log(`Sua nota teve a nota ${media} foi ${conceito}`);

switch(conceito){
    case "Otimo" :
        console.log("Parabens voce está no caminho certo");
        break
    case "Bom":
        console.log("Voce está indo bem");
        break    
    case "Regular":
        console.log("Estude mais um pouco!");
        break
    default:
       console.log("Houve algum erro!");
        break
}


var n;
console.log(n)
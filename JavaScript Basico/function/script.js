function media(n1,n2){
    var media = (n1 + n2) / 2;
    //console.log(media)
    return media;
}

var numero1 = media(6,7);
var numero2 = media(8,7);
console.log(numero1 + " E " + numero2)

// função anonima

var media = function(n1,n2){
    return (n1+n2) / 2;
}

console.log(media(2,6))
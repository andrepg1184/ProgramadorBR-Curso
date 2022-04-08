/*       var calcMedia = function(){
            return (this.nota1 + this.nota2)/2;
        }


        var turma = [
            { 
            nome: "igor",
            nota1:9,
            nota2:5,
            media: calcMedia
        },
        { 
            nome: "Andre",
            nota1:2,
            nota2:5,
            media: calcMedia
        }



        ]

        var aluno = turma[1];
        console.log(aluno);
        console.log(aluno.media());

*/

function criarAluno(nome,n1,n2){
    return{
        nome:nome,
        nota1:n1,
        nota2:n2,
        media: function(){
            return (this.nota1 + this.nota2)/2;
        }
    }
}

var turma = [
    criarAluno("andre",4,7),
    criarAluno("joao",4,9.4),
    criarAluno("Stephany",10,9.4)

]

var aluno = turma[0];


turma.forEach(function (elemento){
    console.log(elemento)
})

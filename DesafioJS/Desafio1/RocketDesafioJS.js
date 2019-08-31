
// Exercícios: Módulo 01
// 1º exercício
//Crie uma função que dado o objeto a seguir:
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
   };
   //Retorne o seguinte conteúdo:
   function DadosUsuario(endereco){
       var msg = "O usuário mora em "+ endereco.cidade +" / "+ endereco.uf +", no bairro "+ endereco.bairro +", na rua "+endereco.rua+" com nº "+endereco.numero+"."
       return msg;
   }
   console.log(DadosUsuario(endereco));
   
   // 2º exercício
   //Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
   var vetorPar = Array();
   function pares(x, y) {
       
       for(var i=x; i<=y;i++){
           if(i%2==0){
               vetorPar.push(i);
               
           }
       }
       console.log(vetorPar);
   }
   pares(32, 321);

//    3º exercício
// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    var achou = false
    skills.forEach(element => {
        if(element === "Javascript"){
            achou = true;
        }
    });
    return achou
}
   var skills = ["Javascript", "ReactJS", "React Native"];
   console.log(temHabilidade(skills)); // true ou false

//    4º exercício
// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    if(anos>=0 && anos <=1){
        console.log("Iniciante");
    }
    else if(anos>=1 && anos <=3){
        console.log("Intermediario");
    }
    else if(anos>=3 && anos<=6){
        console.log("Avançado");
    }
    else{
        console.log("Jedi Master");
    }
}
   var anosEstudo =7;
   experiencia(anosEstudo);
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master
   
   

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
    // skills.forEach(element => {
    //     console.log(element)
    // });
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

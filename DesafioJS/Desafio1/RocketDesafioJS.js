
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
   
   function pares(x, y) {
       for(var i=x; i<=y;i++){
           if(i%2==0){
               console.log(i);
           }
       }
   }
   pares(32, 321);
      
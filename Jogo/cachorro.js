// Uma forma para pedir para o pc repetir uma ação é a palavra "for". Criasse uma varivel para essa palavra com o valor zero. Uma forma de saber quantos elementos têm atraves da palavra "length" (pra tu saber quantos cachorros tu tem), depois tu vai somar o i (0) +1, para ele "pegar" a imagem 1, lembrando que agora o i = 1, ele pergunta se o i + i (vira 2) é menor que 3,( quantidade de imagens da lista) se sim, ele vai para a imagem 3.
let yCachorros = [110,190,260];
let velocidadeCachorros = [2,2.5,3.2];
let xCachorros = [500,500,500];
let comprimentoCachorro=50;
let alturaCachorro=50;

function mostraCachorro(){
  for (let i = 0; i < imagemCachorros.length; i ++){
  image (imagemCachorros[i] ,xCachorros[i] ,yCachorros[i] ,comprimentoCachorro, alturaCachorro);
  }
}

function  movimentaCachorro(){
  for (let i = 0; i < imagemCachorros.length; i ++){
  xCachorros[i] -= velocidadeCachorros[i];
  }
}

function voltaPosicaoInicialCachorro(){
  for (let i = 0; i < imagemCachorros.length; i ++){
  if (passouTodaTela(xCachorros[i])){
    xCachorros[i] = 500;
  }
  }
}

 function passouTodaTela(xCachorro){
  return xCachorro < -45;
 }


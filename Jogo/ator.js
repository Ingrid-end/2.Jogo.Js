//ator
let yAtor=340;
let xAtor=150;
 // pq não tem colisão no inicio
let colisao= false;

let meusPontos=0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 45, 45);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
     yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}
function verificaColisao(){
                                          //(i++) i = i + 1
  for( let i = 0; i < imagemCachorros.length; i++){
                                    // Não faz sentido mas funcionou (trocar x pelo y)
    colisao = collideRectCircle (yCachorros[i], xCachorros[i], comprimentoCachorro, alturaCachorro, yAtor, xAtor, 25 )
     if ( colisao){
      volta();
       cachorro.play();
       if (pontosMaiorQZero()){
       meusPontos -= 1;
      }
    }
  }
}


 function volta(){
   yAtor = 350;
   
 }

function incluiPontos(){
  textSize(20)
  text(meusPontos, width / 5, 30);
  fill(255);
  
}

function marcaPonto(){
  if (yAtor < 25){
      meusPontos +=1;
    ponto.play()
    volta();
      }
  
  // O que eu fiz pra voltar, mas não da pra jogar de novo :c
  //if (meusPontos > 0){
  //   yAtor = 330;
  // }
   }
function pontosMaiorQZero(){
 return meusPontos > 0
}
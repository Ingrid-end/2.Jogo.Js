 function setup() {
  createCanvas(500, 400);
  
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCachorro();
  movimentaCachorro();
  movimentaAtor();
  voltaPosicaoInicialCachorro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}



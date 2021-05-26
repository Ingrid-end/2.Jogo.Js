// Imagens e Sons

// imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCachorro;
let imagemCachorro2;
let imagemCachorro3;

// sons
let ponto;
let cachorro;


function preload(){
  imagemDaEstrada = loadImage("Imagens/floresta.png");
  imagemDoAtor = loadImage("Imagens/gatinha.png");
  imagemCachorro = loadImage("Imagens/cachorro.1.png");
  imagemCachorro2 = loadImage("Imagens/cachorro.2.png");
  imagemCachorro3 = loadImage("Imagens/cachorro.3.png");
  imagemCachorros =[imagemCachorro,imagemCachorro2,imagemCachorro3]
  
  ponto = loadSound("Sons/CAT_3.wav");
  cachorro = loadSound ("Sons/som.cachorro1.mp3");
  
  
}
//Variáveis do Ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let pontos = 0 ;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 2;
    }
  }
}

function colisaoAtor(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
  for(let i=0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], cCarros, aCarros, xAtor, yAtor, 15)
    if(colisao){
      posicaoInicial();
      somColidiu.play();
      if(pontoMaisQueZero()){
        pontos -= 1;
      }
    }
  }
}

function posicaoInicial(){
  yAtor = 366
}

function mostraPonto(){
  textAlign(CENTER)
  fill(color(139,0,139))
  text(pontos, width/5, 27);
  textSize(25)
}

function marcaPonto(){
  if(yAtor < 15){
    pontos+=1;
    posicaoInicial();
    somPonto.play();
  }
}

function pontoMaisQueZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}
//Tamanho da Bolinha
let xBall = 300;
let yBall = 200;
let diametro = 20;
let raio = diametro/2;

//Velocidade da Bolinha
let xVelBall = 6;
let yVelBall = 6;

//Minha Raquete
let xRaquete = 5;
let yRaquete = 150;
let cRaquete = 10;
let aRaquete = 90;

//Variáveis do sOponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let yVelOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

let chanceDeErrar = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  Ball();
  Velocidade();
  Colisão();
  Raquete(xRaquete, yRaquete);
  Raquete(xRaqueteOponente, yRaqueteOponente);
  MoveRaquete();
  //ColisãoRaquete();
  colisaoRaqueteBiblioteca(xRaquete,yRaquete);
  colisaoRaqueteBiblioteca(xRaqueteOponente,yRaqueteOponente); 
  MoveOponente();
  MostraPlacar();
  MarcaPonto();
}

function Ball() {
  circle(xBall, yBall, diametro);
}

function Velocidade() {
  xBall += xVelBall;
  yBall += yVelBall;
}

function Colisão() {
  if (xBall + raio > width || xBall - raio < 0) {
    xVelBall *= -1;
  }
  if (yBall + raio > height || yBall - raio < 0) {
    yVelBall *= -1;
  }
}

function Raquete(x,y) {
  rect(x, y, cRaquete, aRaquete)
}

function MoveRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 5;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 5;
  }
}

function ColisãoRaquete() {
  if (xBall - raio < xRaquete + cRaquete && yBall - raio < yRaquete + aRaquete && yBall + raio > yRaquete) {
    xVelBall *= -1;
  }
}

function colisaoRaqueteBiblioteca(x,y) {
  colidiu = 
  collideRectCircle(x, y, cRaquete, aRaquete, xBall, yBall, raio);
  if (colidiu){
    xVelBall *= -1;
    raquetada.play();
  }
}

function MoveOponente() {
  yVelOponente = yBall - yRaqueteOponente - cRaquete / 2-30;
  yRaqueteOponente += yVelOponente + chanceDeErrar
  CalculaChanceDeErrar()
}

function MostraPlacar() {
  textSize(16)
  fill(255)
  text(meusPontos, 278, 26)
  text(pontosOponente, 321, 26)
}

function MarcaPonto(){
  if (xBall > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBall < 10) {
    pontosOponente += 1;
    ponto.play();
  }
}

function CalculaChanceDeErrar(){
  if(pontosOponente >= 39){
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
      chanceDeErrar = 40
    }
  } else{
    chanceDeErrar -= 1
    if(chanceDeErrar <= 35){
      chanceDeErrar = 35
    }
  }
}

function preload(){
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3")
  raquetada = loadSound("raquetada.mp3")
}
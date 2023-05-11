//Variáveis dos carros
let xCarros = [620, 620, 620, 620, 620, 620];
let yCarros = [40, 96, 150, 210, 270, 318];
let velCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let cCarros = 50;
let aCarros = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], cCarros, aCarros);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velCarros[i];
  }
}

function voltaCarro(){
  for(let i = 0; i < xCarros.length; i++){
    if(passouDaTela(xCarros[i])){
     xCarros[i] = 620;
     }
  }
}

function passouDaTela(xCarro){
  return xCarro < -50
}
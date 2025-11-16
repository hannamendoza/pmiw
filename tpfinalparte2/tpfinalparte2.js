//Comision 1
//Hanna Mendoza y Juan Cruz Peri
let juego;
let estado=[];
let fondo, Annimg, Cecyimg, hechizo, portal, reloj;
let vidas, novida;
let cancion, perdervida;

function preload (){
fondo = loadImage('data/fondo.jpg');
Annimg = loadImage('data/Annimg.png');
Cecyimg = loadImage('data/Cecyimg.png');
hechizo = loadImage('data/hechizo.png');
portal = loadImage('data/portal.gif');
vidas = loadImage('data/corazon.png');
novida = loadImage('data/corazonvacio.png');
reloj = loadImage('data/reloj.png');
cancion = loadSound('data/cancion.mp3');
perdervida = loadSound('data/perdervida.mp3');

  for (let i=0; i<5; i++) {
    estado[i]=loadImage('data/'+i+'.jpg');
  }
}


function setup() {
createCanvas(640,480);
juego = new Juego();
}


function draw() {
juego.mostrar();
}

function keyPressed(){
juego.flechas(keyCode);
}

function mouseClicked(){
juego.estados();
juego.sonido();
}

//Juan Cruz Peri y Hanna Mendoza
//La bruja de abril, Ray Bradbury
//Comision 1

let imagen=[];
let estado=0;
let clicks=1;
let fondo, magic;
let escobi, creditos, sonidon, sonidoff;
let frases=['Ella es Cecy Elliot, una bruja de 17 años con un don único: puede dejar su cuerpo y habitar en animales, personas e incluso el viento. Sueña con experimentar el amor humano, pero su familia se lo prohíbe ya que pone en riesgo sus poderes.', 'Una noche de primavera, Cecy encuentra la oportunidad de vivir lo prohibido. Descubre a Ann, una joven del pueblo, a través de ella, podría experimentar lo que significa amar.', 'Cecy se queda sola y triste. Comprende que nunca podrá conocer el amor humano.', 'Dentro del cuerpo de Ann, Cecy conoce a Tom, un joven que trabaja en la granja. Ann lo ignora, pero Cecy se enamora de él.',
  'Tom nota a Ann diferente, por lo que decide invitarla a al baile del pueblo. Cecy estalla de felicidad, pero Ann no quiere ir.', 'Cecy se enoja porque Ann no quiere cumplirle el sueño y jura venganza.', '¿Cómo comportarse en el baile? Disimular: (mostrar algo de su esencia, pero sin traicionar a Ann) o actuar como Cecy: (expresar sentimientos que Ann nunca haría).', 'Cecy vive una noche especial con Tom, pero entiende que él no la ama a ella, sino a Ann.', 'Con el corazón roto, abandona el cuerpo de Ann. Cecy se enamora, pero aún sueña con que Tom la ame a ella, no al cuerpo que habita.', 'Cecy expresa emociones que Ann nunca tendría. Tom percibe que algo extraño esta sucediendo...',
  'Cecy comprende que esta mal interferir en la vida de Ann. Con tristeza, abandona el cuerpo.', 'Cecy vuelve sola, sabiendo que nunca podrá tener lo que desea.', 'Cecy le confiesa que es una bruja que ha estado habitando el cuerpo de Ann y que todo lo vivido fue resultado de sus decisiones. Aun así, le pide a Tom una oportunidad para que la conozca tal como es.', 'Tom acepta lo que Cecy es y le da una oportunidad para conocerse. Ella renuncia a sus poderes para poder estar con él.', 'Tom rechaza la idea de estar con una bruja, y Cecy devastada, comprende que quizas el amor no es para ella. Al tiempo muere de tristeza... '];
function preload() {
  escobi = loadImage ('data/escobi.png');
  creditos = loadImage('data/creditos.jpg');
  sonidon = loadImage('data/sonidon.png');
  sonidoff = loadImage('data/sonidoff.png');

  fondo = loadSound('data/magicalFondo.mp3');
  magic = loadSound('data/magicSound.mp3');

  for (let i=0; i<15; i++) {
    imagen[i]=loadImage('data/'+i+'.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  noCursor();
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);

  for (let i=0; i<15; i++) {
    imagen[i].resize(640, 480);
  }
}


function draw() {

  if (estado===0) { // Pantalla inicial
    image( imagen[0], 0, 0);
  }
  //fondoboton(imagen, pxt, pyt, tamx, tamy, radio, texto, anchoc, altoc)

  if (estado===1) { // Presentacion de Cecy
    fondoboton(imagen[1], 15, 300, 610, 120, 20, frases[0], 600, 200);
    Boton(525, 425, 100, 50, 20, 'Avanzar');
  }

  if (estado===2) { // Creditos
    image( creditos, 0, 0);
  }

  if (estado===3) { // Conocemos a Ann
    fondoboton(imagen[2], 15, 5, 610, 80, 20, frases[1], 600, 200);
    Boton(20, 420, 220, 50, 20, 'Escuchar a sus padres');
    Boton(420, 420, 200, 50, 20, 'Entrar al cuerpo');
  }

  if (estado===4) { // Primera decision, Cecy llorando
    fondoboton(imagen[3], 15, 350, 610, 60, 20, frases[2], 600, 200);
    Boton(100, 420, 220, 50, 20, 'Aceptarlo');
    Boton(340, 420, 200, 50, 20, 'Arriesgarse igualmente');
  }

  if (estado===60) { // Final 1
    image(imagen[3], 0, 0);
    Boton(420, 420, 210, 50, 20, 'Volver al inicio');
  }

  if (estado===5) { // Conocemos a Tom
    fondoboton(imagen[4], 15, 360, 610, 60, 20, frases[3], 600, 200);
    Boton(525, 425, 100, 50, 20, 'Avanzar');
  }

  if (estado===6) { // Tom la nota distinta a Ann
    fondoboton(imagen[5], 15, 355, 610, 60, 20, frases[4], 600, 200);
    Boton(15, 420, 280, 50, 20, 'Respetar a Ann y rechazar a Tom');
    Boton(415, 420, 210, 50, 20, 'Ignorar a Ann y aceptar');
  }

  if (estado===7) { // Cecy y Ann enojadas porque no quiso ir al baile
    fondobotonN(imagen[6], 15, 355, 610, 60, 20, frases[5], 600, 200);
    BotonN(415, 420, 210, 50, 20, 'Volver al inicio');
  }

  if (estado===8) { // Como comportarse en el baile?
    fondobotonT(imagen[7], 15, 335, 610, 80, 20, frases[6], 600, 200);
    BotonT(15, 420, 200, 50, 20, 'Disimular');
    BotonT(425, 420, 200, 50, 20, 'Actuar como Cecy');
  }

  if (estado===9) { //Cecy entiende que Tom ama a Ann
    fondobotonN(imagen[8], 15, 355, 610, 60, 20, frases[7], 600, 200);
    BotonN(525, 420, 100, 50, 20, 'Avanzar');
  }

  if (estado===10) { // Cecy renuncia al cuerpo de Ann
    fondobotonN(imagen[9], 15, 350, 610, 65, 20, frases[8], 600, 200);
    BotonN(415, 420, 210, 50, 20, 'Volver al inicio');
  }

  if (estado===11) { // Decision no disimular, Tom lo nota
    fondobotonT(imagen[10], 15, 345, 610, 65, 20, frases[9], 600, 200);
    BotonT(15, 420, 200, 50, 20, 'Rendirse');
    BotonT(425, 420, 200, 50, 20, 'Decir la verdad');
  }

  if (estado===12) { // Cecy confiesa que es una bruja
    fondoboton(imagen[11], 15, 315, 610, 95, 20, frases[12], 600, 200);
    Boton(15, 420, 200, 50, 20, 'Tom acepta');
    Boton(425, 420, 200, 50, 20, 'Tom no acepta');
  }

  if (estado===13) { // Cecy y Tom se enamoran
    fondoboton(imagen[12], 15, 335, 610, 75, 20, frases[13], 600, 200);
    Boton(415, 420, 210, 50, 20, 'Volver al inicio');
  }

  if (estado===14) { // Cecy es rechazada y muere de tristeza
    fondobotonN(imagen[13], 15, 325, 610, 85, 20, frases[14], 600, 200);
    BotonN(415, 420, 210, 50, 20, 'Volver al inicio');
  }

  if (estado===15) { // Cecy renuncia al cuerpo
    fondobotonN(imagen[9], 15, 350, 610, 65, 20, frases[10], 600, 200);
    BotonN(525, 420, 100, 50, 20, 'Avanzar');
  }

  if (estado===16) { // Cecy renuncia al amor
    fondobotonN(imagen[14], 15, 355, 610, 60, 20, frases[11], 600, 200);
    BotonN(415, 420, 210, 50, 20, 'Volver al inicio');
  }

  image (sonidon, 0, 0, 40, 40);
  image (escobi, mouseX-10, mouseY-10, 50, 50);
}

function mousePressed() {

  //mecanismo de sacar y poner sonido de fondo
  if (overMouse(0, 0, 40, 40)) {
    clicks ++;
    if ( clicks %2===0) { //si esta sobre el boton sonido y ademas es par
      fondo.amp(0.1);
      fondo.play();
      image (sonidoff, 0, 0, 40, 40);// no se por que esta no anda
    } else { //tiene que estar sobre boton sonido
      fondo.stop();
    }
  }

  if (estado===0) {
    if (overMouse(376, 184, 161, 42)) {
      estado=1;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(376, 266, 161, 42)) {
      estado=2;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado ===2) {
    if (overMouse(232, 362, 174, 42)) {
      estado=0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }
  if (estado === 1) {
    if (overMouse(525, 425, 100, 50)) {
      estado = 3;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 3) {
    if (overMouse(20, 410, 220, 50)) {
      estado = 4;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(420, 410, 200, 50)) {
      estado = 5;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 4) {
    if (overMouse(100, 420, 220, 50)) {
      estado = 60;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(340, 420, 200, 50)) {
      estado = 5;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 60) {
    if (overMouse(420, 420, 210, 50)) {
      estado = 0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 5) {
    if (overMouse(525, 425, 100, 50)) {
      estado = 6;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 6) {
    if (overMouse(15, 420, 280, 50)) {
      estado = 7;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(415, 420, 210, 50)) {
      estado = 8;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 7) {
    if (overMouse(420, 420, 210, 50)) {
      estado = 0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 8) {
    if (overMouse(15, 420, 200, 50)) {
      estado = 9;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(425, 420, 200, 50)) {
      estado = 11;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 9) {
    if (overMouse(525, 420, 100, 50)) {
      estado = 10;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 10) {
    if (overMouse(415, 420, 210, 50)) {
      estado = 0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado ===11) {
    if (overMouse(15, 420, 200, 50)) {
      estado = 15;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(425, 420, 200, 50)) {
      estado = 12;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 15) {
    if (overMouse(525, 420, 100, 50)) {
      estado = 16;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 16) {
    if (overMouse(415, 420, 210, 50)) {
      estado = 0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado ===12) {
    if (overMouse(15, 420, 200, 50)) {
      estado = 13;
      magic.amp(0.3);
      magic.play();
      return;
    } else if (overMouse(425, 420, 200, 50)) {
      estado = 14;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 13) {
    if (overMouse(415, 420, 210, 50)) {
      estado = 0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }

  if (estado === 14) {
    if (overMouse(415, 420, 210, 50)) {
      estado = 0;
      magic.amp(0.3);
      magic.play();
      return;
    }
  }
}

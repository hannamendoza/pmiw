//Mendoza Hanna
//Comision 1
//https://youtu.be/phj04FpeKq0
//No me di cuenta que se escuchaba la musica :(, perdon!

let imagen;
let espacio, cambio, cambiocolor, cambiocolorr;

function preload() {
  imagen = loadImage('data/imagen.png');
}
function setup() {
  createCanvas (800, 400);
  noStroke();
  espacio = 0;
  cambio = true;
  cambiocolor = 255
  cambiocolorr = 0;
}

function draw() {
  background(cambiocolor);
  image(imagen, 0, 0, 400, 400);

  circulosnegros(28.5);
  circulosblancos(28.5, 28.5, 0, 282, 5);

  if (cambio) {
    cambiocolor = 255;
    cambiocolorr = 0;
  } 
  else {
    cambiocolor = 0;
    cambiocolorr = 255;
  }
}

function circulosnegros(diam) {
  fill(cambiocolorr);
  for (let x = diam/2; x <= width - diam/2; x += diam) {
    for (let y = diam/2; y <= height - diam/2; y += diam) {
      ellipse(x+width/2, y, diam, diam);
    }
  }
}
function circulosblancos(diam, diamdos, cerca, lejos, circulominimo) {
  fill(cambiocolor);
  for (let x = diam/2; x <= width - diam/2; x += diam) {
    for (let y = diam/2; y <= height - diam/2; y += diam) {
      let diagonal = (x+y)/2;
      let distancia = dist(x, y, diagonal, diagonal);

      if (espacio === 1) {
        distancia = dist(mouseX-width/2, mouseY, diagonal, diagonal);
      }

      if (espacio === 2) {
        distancia = dist(mouseX-width/2, mouseY, x, y);
      }
      diamdos=map(distancia, cerca, lejos, circulominimo, diam);
      ellipse(x+width/2, y, diamdos, diamdos);
    }
  }
}

function keyPressed() {
  if (key===' ') {
    espacio++;
    if (espacio===3) {
      espacio=0;
    }
  }
}
function mousePressed() {
  cambio = !cambio;
}

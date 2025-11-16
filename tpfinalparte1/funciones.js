function overMouse(px, py, tamx, tamy) {
  return mouseX>px && mouseX<px+tamx && mouseY>py && mouseY<py+tamy;
}

//Fundion para fondo
function fondoboton(imagen, pxt, pyt, tamx, tamy, radio, texto, anchoc, altoc) {
  image(imagen, 0, 0);
  fill(240, 206, 228, 170);
  rect (pxt, pyt, tamx, tamy, radio);
  fill(70, 30, 56);
  textAlign(CENTER, CENTER);
  text(texto, pxt + (tamx - anchoc) / 2, pyt + (tamy - altoc) / 2, anchoc, altoc);
}

//Funcion para boton
function Boton(px, py, tamx, tamy, radio, texto) {
  push();
  if (overMouse(px, py, tamx, tamy)) {
    fill(255);
  } else {
    fill(240, 206, 228, 175);
  }
  noStroke();
  rect(px, py, tamx, tamy, radio);
  textAlign(CENTER, CENTER);
  fill(70, 30, 56);
  text(texto, px+tamx/2, py+tamy/2);
  pop();
}


//Mismas funciones pero  con colores de noche
function fondobotonN(imagen, pxt, pyt, tamx, tamy, radio, texto, anchoc, altoc) {
  image(imagen, 0, 0);
  fill(143, 143, 170, 185);
  rect (pxt, pyt, tamx, tamy, radio);
  fill(23, 24, 70);
  textAlign(CENTER, CENTER);
  text(texto, pxt + (tamx - anchoc) / 2, pyt + (tamy - altoc) / 2, anchoc, altoc);
}

function BotonN(px, py, tamx, tamy, radio, texto) {
  push();
  if (overMouse(px, py, tamx, tamy)) {
    fill(255);
  } else {
  fill(143, 143, 170, 185);
  }
  noStroke();
  rect(px, py, tamx, tamy, radio);
  textAlign(CENTER, CENTER);
  fill(23, 24, 70);
  text(texto, px+tamx/2, py+tamy/2);
  pop();
}


//Mismas funciones pero  con colores de tarde
function fondobotonT(imagen, pxt, pyt, tamx, tamy, radio, texto, anchoc, altoc) {
  image(imagen, 0, 0);
  fill(240, 212, 140, 185);
  rect (pxt, pyt, tamx, tamy, radio);
  fill(82, 51, 12);
  textAlign(CENTER, CENTER);
  text(texto, pxt + (tamx - anchoc) / 2, pyt + (tamy - altoc) / 2, anchoc, altoc);
}

function BotonT(px, py, tamx, tamy, radio, texto) {
  push();
  if (overMouse(px, py, tamx, tamy)) {
    fill(255);
  } else {
  fill(240, 212, 140, 185);
  }
  noStroke();
  rect(px, py, tamx, tamy, radio);
  textAlign(CENTER, CENTER);
  fill(82, 51, 12);
  text(texto, px+tamx/2, py+tamy/2);
  pop();
}

class Juego{
  
constructor(){
this.Ann = new Ann();
this.Cecy = new Cecy();
this.Vidas= new Vidas();
this.Salida = new Salida();
this.estado = "estadoInicio";
this.tiempo = 20;
}

mostrar(){
this.estados();
}

overmouse(px,py,ancho,alto){
  return mouseX>px && mouseX<px+ancho && mouseY>py && mouseY<py+alto;
}

estados(){
  if (this.estado=== "estadoInicio"){
this.inicio();
if (mouseIsPressed && this.overmouse(17,412,113,40)){
this.estado = "estadoCreditos";
return;
} else if (mouseIsPressed && this.overmouse(507,412,113,40)){
this.estado = "estadoInstrucciones";
return;
}
}

if (this.estado === "estadoCreditos"){
this.creditos();
if (mouseIsPressed && this.overmouse(17,416,141,44)){
this.estado = "estadoInicio";
return;
}
}

if (this.estado === "estadoInstrucciones"){
this.instrucciones();
if (mouseIsPressed && this.overmouse(383,341,212,68)){
this.reiniciarJuego();
this.estado = "estadoJugar";
return;
}
}

if (this.estado === "estadoJugar"){
this.jugar();
if (this.estado === "estadoJugar" && this.Vidas.vida ===0 || this.tiempo ===0){
this.estado = "estadoPerdiste";
}
}

if (this.estado === "estadoPerdiste"){
this.perdiste();
if (mouseIsPressed && this.overmouse(288,270,164,51)){
this.reiniciarJuego();
this.estado = "estadoJugar";
return;
} else if (mouseIsPressed && this.overmouse(288,341,164,54)){
this.estado = "estadoInicio";
return;
}
}

if (this.estado === "estadoGanaste"){
this.ganaste();
if (mouseIsPressed && this.overmouse(288,270,164,51)){
this.reiniciarJuego();
this.estado = "estadoJugar";
return;
} else if (mouseIsPressed && this.overmouse(288,341,164,54)){
this.estado = "estadoInicio";
return;
}
}//cierre de estado
}//cierre metodo

inicio(){
image(estado[0],0,0);
}

creditos(){
image(estado[1],0,0);
}

instrucciones(){
image(estado[2],0,0);
}

jugar(){
  image(fondo, 0,0);
  this.Salida.mostrar();
  this.Cecy.mostrar();
  this.Ann.mostrar();
  this.Vidas.mostrar();
  this.colision();
  this.tiemporestante();
}

ganaste(){
cancion.stop();
image(estado[3],0,0);
}

perdiste(){
cancion.stop();
image(estado[4],0,0);
}

tiemporestante(){
image(reloj, 550,10,40,50);
fill(93,255,240);
textSize(30);
text(this.tiempo, 595,45);
if (frameCount % 60==0) {
    this.tiempo --;
  }
}

reiniciarJuego(){ //crea nuevos objetos
this.Ann = new Ann();
this.Cecy = new Cecy();
this.Vidas= new Vidas();
this.Salida = new Salida();
this.tiempo = 20;
}

sonido(){
if (this.estado === "estadoJugar"){
  cancion.play();
  cancion.amp(0.1);
}
}

flechas(keyCode){
this.Ann.flechas(keyCode);
}


colision(){

if (this.Cecy.Hechizo.contacto(this.Ann) && this.Vidas.vidaperdida===true) {
this.Vidas.vida-=1;
perdervida.play();
perdervida.amp(0.3);
this.Vidas.vidaperdida = false;
}
if (!this.Cecy.Hechizo.contacto(this.Ann)) {
this.Vidas.vidaperdida = true;
}

if (this.Ann.contacto(this.Salida) && this.Vidas.vida >0){
this.estado = "estadoGanaste";
}
}// llave metodo colision

}//llave clase juego


class Ann{//(Jugador)
  
constructor(){
this.px=0;
this.py=50;
this.tam = 120;
}

mostrar(){
image(Annimg, this.px, this.py, this.tam, this.tam);
}

contacto(Salida) {//esta modificado para que visualmente se vea a Ann entrando al portal
    let contacto=this.px+this.tam-40 > Salida.px+20 &&
    this.px+40 < Salida.px + Salida.ancho &&
      this.py + this.tam-40 > Salida.py &&
      this.py+40 < Salida.py + Salida.alto;
      
    return contacto;
}
  
flechas(keyCode){
  if (keyCode == LEFT_ARROW){
  this.moverIzq();
}
else if (keyCode == RIGHT_ARROW){
  this.moverDer();
}

  if (keyCode == UP_ARROW){
  this.moverArriba();
  }
  
  else if (keyCode == DOWN_ARROW){
  this.moverAbajo();
  }
}

moverIzq(){
  if (this.px>0){
  this.px -=20;
  }
}

moverDer(){
  if (this.px<width-this.tam){
  this.px +=15;
  }
}
  

moverArriba(){
  if (this.py>50){
  this.py -=20;
  }
}

moverAbajo(){
  if (this.py<height-this.tam){
  this.py +=20;
  }
}

}//no tocar



class Cecy{//(Enemigo)
  
constructor(){
this.px = 500;
this.py = 30;
this.alto = 150;
this.baja = true;
this.izq = true;
this.Hechizo = new Hechizo();
}

mostrar(){
this.mover();
image (Cecyimg, this.px, this.py, 100,this.alto);
this.Hechizo.mostrar(this.py+50)
}

mover(){
  //mover a los costados
  if(this.izq){
  this.px -=2;
  if (this.px <= 390){
  this.izq = false;
  }
  }
  
  else { this.px += 2;
  if (this.px === 550){
  this.izq = true;
  }
  }
  //mover de arriba hacia abajo
  if (this.baja) {
    this.py += 5;
  if (this.py >= height - this.alto) {
    this.baja = false;
  }
  }
  
  else { this.py -= 5
  if (this.py <= 10){
  this.baja = true;
  }
  }
}

}


class Hechizo {

constructor(){
this.px = 430;
this.py = 0;
this.tam = 80;
this.alto = 18;
}

mostrar(py){
this.py = py;
this.disparo();
image(hechizo, this.px, this.py, this.tam, this.alto);
//noFill(); //cuadrado para ver la zona sensible del hechizo
//quad(this.px, this.py, this.px+this.tam, this.py, this.px+this.tam, this.py+this.alto, this.px, this.py+this.alto);
}

disparo(){
if (this.px <= -this.tam) {
this.px=430;
}
this.px -=10;
}

contacto(Ann) {
    let contacto=this.px+this.tam > Ann.px && this.px < Ann.px + Ann.tam && 
    this.py + this.alto > Ann.py && this.py < Ann.py + Ann.tam;
    return contacto;
  }

}//no tocar

class Vidas {
  
constructor(){
this.vida = 5;
this.vidaperdida = true;
}

mostrar(){
this.corazones();
}

corazones(){
if (this.vida === 5){
for (let i=10; i<=130; i+=30){
image (vidas, i, 10, 30, 30);
}
}
if (this.vida === 4){
for (let i=10; i<=100; i+=30){
image (vidas, i, 10, 30, 30);
}
image (novida, 130,10,30,30);
}
if (this.vida === 3){
for (let i=10; i<=70; i+=30){
image (vidas, i, 10, 30, 30);
}
image (novida, 100,10,30,30);
image (novida, 130,10,30,30);
}

if (this.vida === 2){
image (vidas, 10,10,30,30);  
image (vidas, 40,10,30,30);
for (let i=70; i<=130; i+=30){
image (novida, i, 10, 30, 30);
}
}

if (this.vida === 1){
image (vidas, 10,10,30,30);  
for (let i=40; i<=130; i+=30){
image (novida, i, 10, 30, 30);
}
}

if (this.vida === 0){
for (let i=10; i<=130; i+=30){
image (novida, i, 10, 30, 30);
}
}

}//cierre metodo
}// no tocar, cierre clase vidas

class Salida{
constructor(){
this.px = 560;
this.py = 200;
this.ancho = 100; 
this.alto = 150;
}

mostrar(){
  image(portal, this.px,this.py,this.ancho,this.alto);
}
}

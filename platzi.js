var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    URL:"mapa.png",
    cargaOK: false
}

var vaca = {
    URL:"vaca.png",
    cargaOK: false
}

var cerdo = {
    URL:"cerdo.png",
    cargaOK: false
}

var pollo = {
    URL:"pollo.png",
    cargaOK: false
}

fondo.objeto = new Image(); 
fondo.objeto.src = fondo.URL;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image(); 
vaca.objeto.src = vaca.URL ;
vaca.objeto.addEventListener("load",cargarVacas);

cerdo.objeto = new Image(); 
cerdo.objeto.src = cerdo.URL ;
cerdo.objeto.addEventListener("load",cargarCerdos);

pollo.objeto = new Image(); 
pollo.objeto.src = pollo.URL;
pollo.objeto.addEventListener("load",cargarPollos);

function cargarFondo ()
{
    fondo.cargaOK = true
    dibujar ();
}

function cargarVacas ()
{
    vaca.cargaOK = true
    dibujar();
}

function cargarCerdos ()
{
    cerdo.cargaOK = true
    dibujar ();
}

function cargarPollos ()
{
    pollo.cargaOK = true
    dibujar ();
}

function dibujar()
{
if(fondo.cargaOK)
  {
    papel.drawImage(fondo.objeto,0,0)
  }
  if(vaca.cargaOK)
  {
    papel.drawImage(vaca.objeto,100,100)
  }
}


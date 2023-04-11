var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "mapa.png";

var fondo = new Image(); 
fondo.src = mapa;
fondo.addEventListener("load",dibujar);

var vaca = new Image(); 
vaca.src = "vaca.png";
vaca.addEventListener("load",dibujar);

var vaca = new Image(); 
vaca.src = "vaca.png";
vaca.addEventListener("load",dibujar);


function dibujar()
{
    papel.drawImage(fondo,0,0);
}


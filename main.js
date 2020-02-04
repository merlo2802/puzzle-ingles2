function Elemet() {

    for (var i = 0; i < piezas.length; i++) {
        piezas[i].setAttribute("width", 150);
        piezas[i].setAttribute("height", 150);
        piezas[i].setAttribute("x", Math.floor((Math.random() * 750) + 1));
        piezas[i].setAttribute("y", Math.floor((Math.random() * 50) + 250));
        piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
    }
}


function seleccionarElemento(evt) {
    elementSelect = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosx = parseFloat(elementSelect.getAttribute("x"));
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt) {

    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPosx = currentPosx + dx;
    currentPosy = currentPosy + dy;
    elementSelect.setAttribute("x", currentPosx);
    elementSelect.setAttribute("y", currentPosy);
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    iman();
}

function deseleccionarElemento(evt) {
    testing();
    if (elementSelect != 0) {
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

var entorno = document.getElementById('entorno');
var cont = 0;

function reordenar(evt) {
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;
}

var origX = [0, 150, 300, 450, 600, 750, 900, 1050, 1200];
var origY = [50, 50, 50, 50, 50, 50, 50, 50, 50];

function estraer(a) {
    a = win;
    return a;
}

function iman() {
    for (var i = 0; i < piezas.length; i++) {
        if (Math.abs(currentPosx - origX[i]) < 15 && Math.abs(currentPosy - origY[i]) < 15) {
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
        }
    }
}

var winner = document.getElementById("win");
var win = 10;
var lost = 0;

function testing() {
    var bien_ubicada = 0;
    var padres = document.getElementsByClassName('1');
    for (var i = 0; i < piezas.length; i++) {
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        ide = padres[i].getAttribute("id");
        if (origX[ide] == posx && origY[ide] == posy) {
            bien_ubicada = bien_ubicada + 1;
        }
    }
    if (bien_ubicada == piezas.length) {
        win++;
        // winner.play();
        cont ++;
        console.log("CONTADOR",cont);
        if(cont == 2) {
            cont = 0;
            location.href='win.html';
        }
        else{
            Nrandom();
            console.log("LLEGANDO");
        }
      
        
        
    }

}
function Nrandom() {
    var n = 0;
    var n1 = 0;
    n = Math.floor(Math.random() * 6);
    document.getElementById(11111).src = n +".html";
}
var piezas = document.getElementsByClassName('movile');
Elemet();

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;
var resultado = 100;
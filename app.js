let tablero = document.getElementById("tablero");
var num = 0;
var numRandom1 = Math.floor(Math.random() * 10 ) + 1;
var numRandom2 = Math.floor(Math.random() * 10 ) + 1;
var numRandom3 = Math.floor(Math.random() * 10 ) + 1;

let resultado1 = numRandom1 + numRandom2 ;
let resultado2 = numRandom1 + numRandom2 + numRandom3 ;

function sumar(){
    num = num + 1;
    tomarCarta();
}  

function tomarCarta(){
    if(num == 1){

        var div1 = document.createElement("DIV");
        var span1 = document.createElement("SPAN");

        div1.id = `carta${num}`;
        div1.className = "carta";

        span1.id = `cartaNumero${num}`;
        span1.className = "numeroCarta";
        span1.innerHTML = numRandom1;
        

        tablero.appendChild(div1);
        div1.appendChild(span1);

        console.log(num);

    }else if(num == 2){

        var div2 = document.createElement("DIV");
        var span2 = document.createElement("SPAN");

        div2.id = `carta${num}`;
        div2.className = "carta";

        span2.id = `cartaNumero${num}`;
        span2.className = "numeroCarta";
        span2.innerHTML = numRandom2;
        

        tablero.appendChild(div2);
        div2.appendChild(span2);

        if(resultado1 >= 21){
            alert("te pasate! game over")
        }else{
            alert("¿queres tirar otra carta?")
        }

        console.log(num);

    }else if(num == 3){

        var div3 = document.createElement("DIV");
        var span3 = document.createElement("SPAN");

        div3.id = `carta${num}`;
        div3.className = "carta";

        span3.id = `cartaNumero${num}`;
        span3.className = "numeroCarta";
        span3.innerHTML = numRandom3;
        

        tablero.appendChild(div3);
        div3.appendChild(span3);

        console.log(num)

        if(resultado2 >= 21){
            alert("te pasate! game over")
        }else{
            alert("haz ganado! Felicitaciones");
        }

    }else{

        alert("no hay mas cartas")

    }
}

function eliminarTablero(){
 while(tablero.hasChildNodes())
    tablero.removeChild(tablero.firstChild);
    num = 0;	
 }
var player;
var numero;
var simbolo;
var player1 = "X";
var player2 = "O";

var nomePlayer1 = prompt("Nome Player 1: ");
var nomePlayer2 = prompt("Nome Player 2: ");

var numero = Math.floor(Math.random() * 2);

if (numero == 0){
    alert(nomePlayer1 + " começa o jogo");
    
} else {
    alert(nomePlayer2 + " começa o jogo");
    
}

document.getElementById("player1").value=nomePlayer1;
document.getElementById("player2").value=nomePlayer2;


function casa1 () {
    if (numero == 0){
        document.getElementById("casa1").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa1").innerHTML = player2;
        numero = 0
        
    }
   
}

function casa2 () {
    if (numero == 0){
        document.getElementById("casa2").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa2").innerHTML = player2;
        numero = 0
        
    }
   
}

function casa3 () {
    if (numero == 0){
        document.getElementById("casa3").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa3").innerHTML = player2;
        numero = 0
        
    }
    
}

function casa4 () {
    if (numero == 0){
        document.getElementById("casa4").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa4").innerHTML = player2;
        numero = 0
        
    }
    
}

function casa5 () {
    if (numero == 0){
        document.getElementById("casa5").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa5").innerHTML = player2;
        numero = 0
        
    }
    
}

function casa6 () {
    if (numero == 0){
        document.getElementById("casa6").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa6").innerHTML = player2;
        numero = 0
        
    }
    
}

function casa7 () {
    if (numero == 0){
        document.getElementById("casa7").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa7").innerHTML = player2;
        numero = 0
        
    }
    
}

function casa8 () {
    if (numero == 0){
        document.getElementById("casa8").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa8").innerHTML = player2;
        numero = 0
        
    }
    
}

function casa9 () {
    if (numero == 0){
        document.getElementById("casa9").innerHTML = player1;
        numero = 1;
    
    }else {
        document.getElementById("casa9").innerHTML = player2;
        numero = 0
        
    }
    
}

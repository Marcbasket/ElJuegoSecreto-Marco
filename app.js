let numeroSecreto = 0;
let intentos = 0;
let listaNumerosorteado = [];
let numeromaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'itento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
        }else{
        asignarTextoElemento('p','El número secreto es mayor');    
        }
        intentos++;
        limpiarcaja();
    }
    return;
}
function limpiarcaja(){
   let valorcaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumerosorteado.length == numeromaximo)
        asignarTextoElemento('p','Ya se generaron todos los números posibles.');
        if(listaNumerosorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    
}
function condicionesiniciales(){
    asignarTextoElemento('h1','Juego del número secreto.');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeromaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesiniciales();
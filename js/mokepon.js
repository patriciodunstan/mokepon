//variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//función para inciar juego 
function iniciarJuego(){
    //variables
    let botonMascotaJugador= document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    //eventos
    let botonFuego= document.getElementById('boton-Fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua= document.getElementById('boton-Agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra= document.getElementById('boton-Tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}
//Funciones para seleccionar mascotas.
function seleccionarMascotaJugador(){
    let inputTortle= document.getElementById('Tortle')
    let inputHood= document.getElementById('Hood')
    let inputCharman= document.getElementById('Charman')
    let inputJaivamon= document.getElementById('Jaivamon')
    let inputPepino= document.getElementById('Pepino')
    let inputPirosand= document.getElementById('Pirosand')
    let spanMascotaJugador= document.getElementById('mascota-jugador')

    let botonReiniciar= document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

    if(inputTortle.checked){
        spanMascotaJugador.innerHTML= 'Tortle'
    }
    else if(inputHood.checked){
        spanMascotaJugador.innerHTML= 'Hood'
    }
    else if(inputCharman.checked){
        spanMascotaJugador.innerHTML= 'Charman'
    }
    else if(inputJaivamon.checked){
        spanMascotaJugador.innerHTML= 'Jaivamon'
    }
    else if(inputPepino.checked){
        spanMascotaJugador.innerHTML= 'Pepino'
    }
    else if(inputPirosand.checked){
        spanMascotaJugador.innerHTML= 'Pirosand'
    }
    else{
       alert('selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
        
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria= aleatorio(1,6)
    let spanMascotaEnemigo= document.getElementById('mascota-enemigo')
    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML= 'Tortle'
    }
    else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML= 'Hood'
    }
    else if(mascotaAleatoria==3){
        spanMascotaEnemigo.innerHTML= 'Charman'
    }
    else if(mascotaAleatoria==4){
        spanMascotaEnemigo.innerHTML= 'Jaivamon'
    }
    else if(mascotaAleatoria==5){
        spanMascotaEnemigo.innerHTML= 'Pepino'
    }
    else 
        spanMascotaEnemigo.innerHTML= 'Pirosand'
    }
function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'Agua' 
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)
    
    if(ataqueAleatorio==1){
        ataqueEnemigo= 'Fuego'
    }else if(ataqueAleatorio==2){
       ataqueEnemigo= 'Agua'
    }else{
        ataqueEnemigo= 'Tierra'
    }
    combate() //se utiliaz para mandar a llamar el ataque enemigo
}
function combate(){
    let spanVidasJugador= document.getElementById('vidas-jugador')
    let spanVidasEnemigo= document.getElementById('vidas-enemigo')


    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('empate')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }
    else if(ataqueJugador ==' Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }
    else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }
    else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
  }
    else {
        crearMensaje('perdiste')
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }
    revisarVidas()

}

function revisarVidas(){
    if(vidasJugador == 0){
        crearMensajeFinal('PERDISTE')
    }
    else if(vidasEnemigo == 0){
        crearMensaje('GANASTE')
    }
}

function crearMensaje(definicion){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "tu mascota ataco con" + ataqueJugador +  "mascota enemigo ataco con" + ataqueEnemigo + "--" + definicion
    
    sectionMensajes.appendChild(parrafo)
}
 
function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)
    
let botonFuego = document.getElementById('boton-Fuego')
botonFuego.disabled = true
let botonAgua = document.getElementById('boton-Agua')
botonAgua.disable = true
let botonTierra = document.getElementById('boton-Tierra')
botonTierra.disable = true
}
    function reiniciarJuego(){
        location.reload()
    }
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

window.addEventListener('load',iniciarJuego)
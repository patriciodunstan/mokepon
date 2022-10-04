//variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

//función para inciar juego 
function iniciarJuego(){
    //variables
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none' 

    //display es una propiedad que ayuda a acultar los alementos
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    //eventos
    let botonFuego = document.getElementById('boton-Fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua= document.getElementById('boton-Agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra= document.getElementById('boton-Tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar= document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}
//Funciones para seleccionar mascotas.
function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputTortle= document.getElementById('Tortle')
    let inputHood = document.getElementById('Hood')
    let inputCharman = document.getElementById('Charman')
    let inputJaivamon = document.getElementById('Jaivamon')
    let inputPepino = document.getElementById('Pepino')
    let inputPirosand = document.getElementById('Pirosand')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

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
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Tortle'
    }
    else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Hood'
    }
    else if(mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Charman'
    }
    else if(mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Jaivamon'
    }
    else if(mascotaAleatoria ==5 ) {
        spanMascotaEnemigo.innerHTML = 'Pepino'
    }
    else 
        spanMascotaEnemigo.innerHTML = 'Pirosand'
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
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego'
    }else if(ataqueAleatorio == 2) {
       ataqueEnemigo = 'Agua'
    }else{
        ataqueEnemigo = 'Tierra'
    }
    combate() //se utiliaz para mandar a llamar el ataque enemigo
}
function combate(){
    let spanVidasJugador= document.getElementById('vidas-jugador')
    let spanVidasEnemigo= document.getElementById('vidas-enemigo')


    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('empate')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador ==' Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }
    else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje('ganaste')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
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

function revisarVidas() {
    if (vidasJugador == 0) {
        crearMensajeFinal('PERDISTE')
    } else if( vidasEnemigo == 0){
        crearMensaje('GANASTE')
    }
}

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let AtaqueDelJugado = document.getElementById('Ataque-del-jugador')
    let AtaqueDelEnemigo = document.getElementById('Ataque-del-enemigo')

    let notificacion = document.createElement('p')
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    AtaqueDelJugador.appendChild(parrafo)
    AtaqueDelEnemigo.appendChild(parrafo)
}
 
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal
    
    sectionMensajes.appendChild(parrafo)
    
let botonFuego = document.getElementById('boton-Fuego')
botonFuego.disabled = true
let botonAgua = document.getElementById('boton-Agua')
botonAgua.disabled = true
let botonTierra = document.getElementById('boton-Tierra')
botonTierra.disabled = true

let sectionReiniciar= document.getElementByiD('reiniciar')
sectionReiniciar.style.display = 'block'
}
    function reiniciarJuego(){
        location.reload()
    }
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

window.addEventListener('load', iniciarJuego)
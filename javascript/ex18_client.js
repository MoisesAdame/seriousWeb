// Author: Moisés Adame-Aguilar
// Date: January 9, 2023
// Descrption: Introduction to WebSockets (Client)

// Variables
userName = ''
const miWebSocket = new WebSocket('ws://localhost:8080')
const miNuevoMensaje = document.querySelector('#nuevo-mensaje')
const misRespuestas = document.querySelector('#respuestas')

// Function for registering the user and changing page.
function logIn(){
    var inputUser = document.getElementById('user-box').value
    if(inputUser === ''){
        alert('Invalid User Name. Try Again')
    }else{
        userName = inputUser
        console.log(userName)
        document.getElementById('log-in').innerHTML = ''
    }
}

// Funcion that is executed once the connection is open.
function open () {
    console.log("WebSocket abierto.")
}

// Function executed once a message has arrived.
async function message (evento){
    var receivedMessage = await evento.data.text()
    misRespuestas.innerHTML = misRespuestas.innerHTML.concat(receivedMessage, '<br>')
}

function error (evento) {
    // Ha ocurrido un error
    console.error("WebSocket ha observado un error: ", evento)
}

function close () {
    // Cierra la conexión
    console.log("WebSocket cerrado.")
}

function enviarNuevoMensaje (evento) {
    // Evento tecla Enter
    if(evento.code === 'Enter') {
        // Envia mensaje por WebSockets
        miWebSocket.send(miNuevoMensaje.value)
        // Borra texto en el input
        miNuevoMensaje.value = ''
    }
}

// Eventos de WebSocket
miWebSocket.addEventListener('open', open)
miWebSocket.addEventListener('message', message)
miWebSocket.addEventListener('error', error)
miWebSocket.addEventListener('close', close)

// Evento para envia nuevo mensaje
miNuevoMensaje.addEventListener('keypress', enviarNuevoMensaje)
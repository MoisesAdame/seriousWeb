export class Client{
	constructor(link){
		this.socket = new WebSocket(link)

		this.socket.onmessage = function (event) {
			var respuesta = document.querySelector("#respuestas")
			respuesta.innerHTML = respuesta.innerHTML.concat(event.data, "<br>");
		};
	}

	send(data){
		if(!this.socket.CONNECTING){
			this.socket.send(data)
		}
	}
}

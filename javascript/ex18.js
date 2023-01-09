// Author: Moisés Adame-Aguilar
// Date: January 8, 2023
// Descrption: Introduction to WebSockets (Server)

// Requiered modules
WebSocket = require('ws')
http = require('http')

// An instance of the HTTP server is created.
server = http.createServer()

// An instnce of the WebSocket, based on the HTTP server is created.
wss = new WebSocket.Server({ server })

// Listening to new connections.
wss.on('connection', function connection(ws) {
    // Listening to incoming messages.
    ws.on('message', function incoming(data) {
        // For each client connected, the received info is sent.
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    })
})

// Finally, the server gets running on port 8080
server.listen(8080)
console.log('Server running...')
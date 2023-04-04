// Importaciones
const WebSocket = require("ws");
const http = require("http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});
const wss = new WebSocket.Server({ server });

http.get('http://localhost:8080/', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    // Any 2xx status code signals a successful response but
    // here we're only checking for 200.
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});

// Escuchamos los eventos de conexión
wss.on("connection", function connection(ws) {
    console.log('Connected User')

    // Escuchamos los mensajes entrantes
    ws.on("message", function incoming(data) {
        // Iteramos todos los clientes que se encuentren conectados
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                // Enviamos la información recibida
                client.send(data.toString());
            }
        });
    });
});

// Levantamos servidor HTTP
server.listen(8080);
console.log("[*] Websocket: ws://localhost:8080")
console.log("[*] Get Request: http://localhost:8080/")
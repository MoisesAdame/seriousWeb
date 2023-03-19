
// Instatiation of the map.
var map = L.map('map').setView([19.432608, -99.133209], 13)

// Map Tile Layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Api GET Request
async function getRequest(){
    var response
    const myRequest = await fetch("https://api.datos.gob.mx/v1/precio.gasolina.publico")
        .then((response) => response.json())
        .then((json) => console.log(JSON(json)));
}

console.log(getRequest())

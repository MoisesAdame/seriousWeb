// Author: Moises Adame-Aguilar
// Date: January 6, 2023
// Descrption: ISS and Map Implementation

// Instantiating a map and adding a tile
var map = L.map('map')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Customizing marker's icon.
var issIcon = L.icon({
    iconUrl: 'images/issIcon.png',
    iconSize: [50, 31.5],
    iconAnchor: [25, 16],
});

// Function that fetches the ISS's location and returns it.
async function getLocation(){
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'
    var response = await fetch(url)
    var data = await response.json()
    return [data.latitude, data.longitude]
}

// Function that creates the marker & map using the ISS's location.
async function createMarker(){
    var location = await getLocation()
    map.setView(location, 2)
    issMarker = L.marker(location, {icon: issIcon}).addTo(map);
}

// Function that changes the marker's location.
async function updateLocation(){
    var location = await getLocation()
    issMarker.setLatLng(location)
}

// Function that instatiates the marker and updates it forever every second.
function loopLocation(){
    createMarker()
    setInterval(updateLocation, 1000)
}

// Calling the function.
loopLocation()
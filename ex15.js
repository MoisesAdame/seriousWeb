// Author: Moises Adame-Aguilar
// Date: January 6, 2023
// Descrption: ISS and Map Implementation

// Instantiating a map and adding a tile
var map = L.map('map')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)


// Customizing marker's icon.
var issIcon = L.icon({
    iconUrl: 'images/issIcon.png',
    iconSize: [50, 31.5],
    iconAnchor: [25, 16],
})

var houseIcon = L.icon({
    iconUrl: 'images/house.webp',
    iconSize: [35, 25],
    iconAnchor: [17.5, 25],
})

// Function that fetches the ISS's location and returns it.
async function getLocation(){
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'
    var response = await fetch(url)
    var data = await response.json()
    return [data.latitude, data.longitude]
}

// Function that creates the marker & map using the ISS's location.
async function createMarker(){
    issLocation = await getLocation()
    map.setView(issLocation, 2)
    issMarker = L.marker(issLocation, {icon: issIcon}).addTo(map);
}

// Function that changes the marker's location.
async function updateLocation(){
    issLocation = await getLocation()
    issMarker.setLatLng(issLocation)
    distance(userLocation, issLocation)
    pathUserIss.setLatLngs([userLocation, issLocation])
}

// Get user's location
const successCallback = async (position) => {
    userLocation = [position.coords.latitude, position.coords.longitude]
    userMarker = L.marker(userLocation, {icon: houseIcon}).addTo(map)
    pathUserIss = L.polyline([userLocation, issLocation], {color: "red"}).addTo(map);
};
  
const errorCallback = (error) => {
    console.log("error");
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// Function that instatiates the marker and updates it forever every second.
function loopLocation(){
    createMarker()
    setInterval(updateLocation, 1000)
}

// Calculate distance between two lat/lon coordinates.
function distance(loc1, loc2){
    // Both coordinates are converted to radians.
    loc1 = [loc1[0] * Math.PI / 180, loc1[1] * Math.PI / 180]
    loc2 = [loc2[0] * Math.PI / 180, loc2[1] * Math.PI / 180]

    // Difference between latitude and longitudes.
    var differenceLatitude = loc1[0] - loc2[0]
    var differenceLongitude = loc1[1] - loc2[1]

    // Haversine formula
    var distance = Math.pow(Math.sin(differenceLatitude / 2), 2)
                    + Math.cos(loc1[0]) * Math.cos(loc2[0])
                    * Math.pow(Math.sin(differenceLongitude / 2),2);

    distance = 2 * 6371 * Math.asin(Math.sqrt(distance))

    // Round result
    distance = Math.round(distance * 100) / 100

    // Add to HTML document
    document.getElementById('distance-iss').textContent = 'Distance from you: ' + distance + ' km.'
}

// Calling the function.
loopLocation()
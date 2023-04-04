
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else { 
        throw 'Geolocation is not supported by this browser.'
    }
}

async function showPosition(position) {
    coords = {'lat': 39.916668, 'long': 116.383331}

    // MAP
    var map = L.map('map').setView([coords.lat, coords.long], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([coords.lat, coords.long]).addTo(map);

    // API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=7f95472e36ea55ab5f5e474665219d28`);
    response.json().then(response => {
        formatApi(response)
    })
}

function formatApi(response){
    const element = document.getElementById("loader-div");
    element.remove()

    // Current Date
    const d = new Date();
    document.getElementById('date').innerHTML = d

    // Current City
    document.getElementById('city').innerHTML = response.name + ', ' + response.sys.country

    // Current Temperature
    document.getElementById('temperature').innerHTML = (response.main.temp - 273.15).toFixed(2) + ' °C'
    var image = document.getElementById('image')
    image.setAttribute('src', `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)

    // Current Feeling
    document.getElementById('feeling').innerHTML = 'Feels like ' + (response.main.temp - 273.15).toFixed(2) + ' °C'

    // Humidity
    document.getElementById('humidity').innerHTML = 'Humidity: ' + response.main.humidity + ' %'

    // Visibility
    document.getElementById('visibility').innerHTML = 'Visibility: ' + response.visibility + ' km.'

    // Pressure
    document.getElementById('pressure').innerHTML = 'Pressure: ' + response.main.pressure + 'hPa.'
}
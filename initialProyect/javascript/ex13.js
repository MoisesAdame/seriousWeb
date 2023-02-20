// Author: Moisés Adame-Aguilar
// Date: January 5, 2023
// Descrption: Deep down in Ajax... Promises?

// Promise: JS Object that links producing code and consuming code.
// -- Example 1: Calling an API (Not working)
var promiseTimeAPI = new Promise(function(resolve, reject){
    var request = new XMLHttpRequest()
    setInterval(() => {
        request.addEventListener('readystatechange', () => {
            console.log(request.readyState, request.status)
            if(request.readyState == 4 && request.status == 200){
                resolve(request.responseText)
            }else{
                reject('Communication error: No data received!')
            }
        })

        request.open('GET', 'http://worldtimeapi.org/api/timezone/America/Mexico_City')
        request.send()
    }, 1000)
})

function text2date(text){
    var date = JSON.parse(text)
    date = new Date(date.utc_datetime)
    document.getElementById('time-paragraph').textContent = date
}

promiseTimeAPI.then(
    function(value){
        text2date(value)
    },
    function(error){
        console.log(error)
    }
)
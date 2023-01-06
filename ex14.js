// Author: Moisés Adame-Aguilar
// Date: January 5, 2023
// Descrption: Deep down in Ajax... Async & Await

// Async: Makes a function return a Promise.
// Await: Makes a function wait for a Promise.

// -- Example 1: The following functions are the same.
async function myFunction1() {
    return "Hello";
}

function myFunction2(){
    return Promise.resolve('Hello')
}

// Using the promise
myFunction1().then(
    function(value){
        console.log(value)
    }
)

// -- Example 2: Await can only be used in async functions
// It makes the function pause til' the promise gets resolved.
// ISS Location
async function printISSLocation(){
    const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544'
    var response = await fetch(apiUrl)
    var data = await response.json()
    var {latitude, longitude} = data 
    console.log(latitude, longitude)
}

setInterval(printISSLocation, 1000)
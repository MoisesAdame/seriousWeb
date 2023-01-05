// Author: Moisés Adame-Aguilar
// Date: January 5, 2023
// Descrption: Deep down in Ajax... Async

// Asynchronous Functions: Are functions running in parallel with other functions.
// The best example is setTimeout()

// --Example 1
// setTimeout() does the action once.
function displaySomething(){
    var myText = 'Hello, World!'
    console.log(myText)
}

setTimeout(displaySomething, 3000)

// -- Example 2
// setInterval() does the action infinitely.
function printTheDate(){
    var date = new Date
    console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
}

setInterval(printTheDate, 1000)


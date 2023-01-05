// Author: Moisés Adame-Aguilar
// Date: January 5, 2023
// Descrption: Clock

function printTime(){
    var date = new Date()
    date = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())
    
    document.getElementById('time-paragraph').innerHTML = date;
}

function addZero(number){
    return number < 10 ? '0' + number : number
}

setInterval(printTime, 1000)
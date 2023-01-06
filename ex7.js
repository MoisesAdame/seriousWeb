// Author: Moisés Adame-Aguilar
// Date: January 3, 2023
// Descrption: Api Calls & Ajax

function getTime(){
    var request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            var date = JSON.parse(request.responseText)

            date = new Date(date.utc_datetime)

            document.getElementById('time-paragraph').textContent = date
        }else if(request.readyState === 4){
            alert('Communication error: No data received!')
        }
    })
    
    request.open('GET', 'http://worldtimeapi.org/api/timezone/America/Mexico_City')
    request.send()
}

function addToParagraph(date){
    document.getElementById('time-paragraph').innerHTML = ''
    document.getElementById('time-paragraph').innerHTML = date
}

function loopGetTime(){
    setInterval(getTime, 1000)
}

loopGetTime()
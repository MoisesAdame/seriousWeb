// Author: Moisés Adame-Aguilar
// Date: January 2, 2023
// Descrption: Async program

// Cross-Browser Async Function
function asyncRequest(){
    try{
        // For Non Internet Explorer Browser
        var request = new XMLHttpRequest()
    }catch(error1){
        try{
            // For Internet Explorer 6+
            request = new ActiveXObject("Msxml2.XMLHTTP")
        }catch(error2){
            try{
                // For Internet Explorer 5
                request = new ActiveXObject("Microsoft.XMLHTTP")
            }catch(error3){
                // No Async support
                request = false
            }
            
        }
    }

    return request
}

// Async Application
var params = 'news.com'
var request = new asyncRequest()

// A POST request is sent to urlpost.php
request.open("POST", "urlpost.php", true)

// Headers requiered for the receiving server to know a POST request is coming.
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
request.setRequestHeader("Content-length", params.length)
request.setRequestHeader("Connection", "close")

// Anonymous, callback function that changes onreadystatechange everytime 
// the attribute readyState changes.
request.onreadystatechange = function(){
    // Allows the program to keep accepting user input and changing the screen.
    // Everytime readyState changes, we will change request.onreadystatechange
    // readyState values:
    // 0 = Unitialized
    // 1 = Loading
    // 2 = Loaded
    // 3 = Interactive
    // 4 = Completed
    if(this.readyState == 4){
        // The 200 means that the call succeeded.
        if(this.status == 200){
            if(this.responseText != null){
                document.getElementById('info').innerHTML = this.responseText
            }else{
                alert("Communication error: No data received")
            }
        }else{
            alert("Communication error: " + this.statusText)
        }
    }
}

request.send(params)
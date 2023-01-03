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
params = 'url=news.com'
request = new asyncRequest()

request.open("POST", "urlpost.php", true)
request.setRequestHeader("Content-type", "application /x-www-form-urlencoded")
request.setRequestHeader("Content-length", params.length)
request.onreadystatechange = function(){
    if(this.readyState == 4){
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
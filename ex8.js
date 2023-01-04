// Author: Moisés Adame-Aguilar
// Date: January 4, 2023
// Descrption: Api Calls & Ajax (GET Request)

// Ensuring every url is unique, so that GET requests
// don't get cached.
nocache = "&nocache=" + Math.random() * 10000000
request = new asyncRequest()
request.open("GET", "urlget.php?url=news.com" + nocache, true)

// Anonymous, callback function that changes onreadystatechange everytime 
// the attribute readyState changes.
request.onreadystatechange = function(){
    if(this.readyState === 4){
        // The 200 means that the call succeeded.
        if(this.status === 200){
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

request.send(null)

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
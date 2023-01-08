// Author: Moisés Adame-Aguilar
// Date: December 22, 2022
// Descrption: Form's button

function addResult(){
    var a = document.getElementById("a_val").value
    var b = document.getElementById("b_val").value
    var c = document.getElementById("c_val").value
    
    if(a === "" || b === "" || c === ""){
        addResponse("One or more of the values are empty.")
    }else{
        a = Number(a)
        b = Number(b)
        c = Number(c)

        if(Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c)){
            determinant = b * b - 4 * a * c
            if(determinant < 0){
                addResponse("Imaginary result!")
            }else{
                res1 = (-b + Math.sqrt(determinant)) / (2 * a)
                res2 = (-b - Math.sqrt(determinant)) / (2 * a)

                if(res1 !== res2){
                    printResult(res1, res2)
                }else{
                    printResult(res1)
                }
            }
        }else{
            addResponse("Invalid input!")
        }
    }
}

function addResponse(result){
    var paragraph = document.createElement("P")

    paragraph.setAttribute("id", "paragraph_res")

    document.getElementById("result").appendChild(paragraph)

    var text = document.createTextNode(result)

    document.getElementById("result").innerHTML = ""

    document.getElementById("result").appendChild(text)
}

function printResult(res1, res2 = ""){
    var paragraph = document.createElement("P")

    paragraph.setAttribute("id", "paragraph_res")

    document.getElementById("result").innerHTML = ""

    if(res2 === ""){
        var text = document.createTextNode("x0 = " + res1)
        document.getElementById("result").appendChild(text)
    }else{
        var text = document.createTextNode("x0 = " + res1 + ", x1 = " + res2)
        document.getElementById("result").appendChild(text)
    }
}
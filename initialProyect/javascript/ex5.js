// Author: Moisés Adame-Aguilar
// Date: December 23, 2022
// Descrption: Vector Sum Functionality

var numberOfVectors = 2

function addComponents(){
    // The paragraph where the vector is going to be is created
    var paragraph = document.createElement("p")

    // The x label is created
    var labelX = document.createElement("label")
    var textLabelX = document.createTextNode("x" + numberOfVectors + " = ")
    labelX.appendChild(textLabelX)
    paragraph.appendChild(labelX)

    // The x input is created
    var inputTextX = document.createElement("input")
    inputTextX.setAttribute("type", "text")
    inputTextX.setAttribute("id", "x" + numberOfVectors + "_val")
    paragraph.appendChild(inputTextX)

    // The y label is created
    var labelY = document.createElement("label")
    var textLabelY = document.createTextNode(" y" + numberOfVectors + " = ")
    labelY.appendChild(textLabelY)
    paragraph.appendChild(labelY)

    // The y input is created
    var inputTextY = document.createElement("input")
    inputTextY.setAttribute("type", "text")
    inputTextY.setAttribute("id", "y" + numberOfVectors + "_val")
    paragraph.appendChild(inputTextY)

    // The paragraph is added to the vector_components div
    document.getElementById("vector_components").appendChild(paragraph)

    numberOfVectors += 1
}

function toArray(){
    var arrayX = new Array()
    var arrayY = new Array()

    for(var i = 0; i < numberOfVectors; ++i){
        var valueX = document.getElementById("x" + i + "_val").value
        var valueY = document.getElementById("y" + i + "_val").value
        if(valueX === "" || valueY === ""){
            addResponse("Invalid input!")
            break
        }else{
            valueX = Number(valueX)
            valueY = Number(valueY)

            if(!(Number.isFinite(valueX) && Number.isFinite(valueY))){
                addResponse("Invalid input!")
                break
            }else{
                arrayX.push(valueX)
                arrayY.push(valueY)
            }
        }
    }

    if(arrayX.length == numberOfVectors){
        var sumX = sumY = 0
        for(var i = 0; i < numberOfVectors; ++i){
            sumX += arrayX[i]
            sumY += arrayY[i]
        }

        var mod = Math.sqrt(sumX * sumX + sumY * sumY)

        var angle = (180 / Math.PI) * Math.atan(sumY / sumX)

        printResult(sumX, sumY, mod, angle)
    }
}

function addResponse(result){
    document.getElementById("result").innerHTML = ""

    var paragraph = document.createElement("p")

    paragraph.setAttribute("id", "paragraph_res")

    var text = document.createTextNode(result)

    paragraph.appendChild(text)

    document.getElementById("result").appendChild(paragraph)
}

function printResult(res1, res2, mod, angle){
    document.getElementById("result").innerHTML = ""

    var paragraph1 = document.createElement("P")
    paragraph1.setAttribute("id", "paragraph1_res")

    var paragraph2 = document.createElement("P")
    paragraph2.setAttribute("id", "paragraph2_res")

    

    var text = document.createTextNode("Rx = " + res1 + ", Ry = " + res2)
    paragraph1.appendChild(text)

    var text = document.createTextNode("|R| = " + mod + ", θ = " + angle + "°")
    paragraph2.appendChild(text)

    document.getElementById("result").appendChild(paragraph1)
    document.getElementById("result").appendChild(paragraph2)
}
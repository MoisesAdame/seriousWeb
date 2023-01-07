// Author: Moisés Adame-Aguilar
// Date: January 7, 2023
// Descrption: Reading Files & Compression Algorithms.

function readFile(input) {
    let file = input.files[0]
  
    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = function() {
        convert2binary(reader.result)
    };
  
    reader.onerror = function() {
        console.log(reader.error)
    };
}

function convert2binary(text) {
    var output = "" 
    for (i = 0; i < text.length; i++) {
        output += text[i].charCodeAt(0).toString(2) + " ";
    }

    console.log(output)
}
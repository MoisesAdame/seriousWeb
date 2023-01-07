// Author: Moisés Adame-Aguilar
// Date: January 7, 2023
// Descrption: Reading Files & Compression Algorithms.

// Function that reads a file
function readFile(input) {
    let file = input.files[0]
  
    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = function() {
        var binary = text2binary(reader.result)
        var encoding = runLengthEncoding(binary)
        downloadFile(encoding, file.name)
    };
  
    reader.onerror = function() {
        console.log(reader.error)
    };
}

// Function that converts a string to binary.
function text2binary(text) {
    var output = "" 
    for (var i = 0; i < text.length; i++){
        var letter = text[i].charCodeAt(0).toString(2)
        letter = '0'.repeat(8 - letter.length) + letter
        output +=  letter
    }
    return output
}

// Function that converts a binary string to text.
function binary2text(binary){
    var output = "" 
    for (var i = 0; i < binary.length / 8; i++) {
        output += String.fromCharCode(parseInt(binary.substring(i * 8, i * 8 + 8), 2))
    }
    return output
}

// Function that converts a binary string to a Run-Lenght Encoding.
function runLengthEncoding(binary){
    var output = ""
    var counter = 0
    for(var i = 0; i < binary.length; i++){
        if(binary[i] === '0' && binary[i + 1] === '0' || binary[i] === '1' && binary[i + 1] === '1'){
            counter += 1
        }else if(binary[i] === '0' || binary[i] === '1'){
            counter += 1
            output += counter + ' '
            counter = 0
        }
    }
    return output
}

// Function that decodes a Run-Lenght Encoding.
function runLengthDencoding(encoding){
    encoding = encoding.split(' ')
    var output = ""
    for(var i = 0; i < encoding.length; i++){
        if(i % 2 === 0){
            output += '0'.repeat(Number(encoding[i]))
        }else{
            output += '1'.repeat(Number(encoding[i]))
        }
    }
    return output
}

// Function that creates and allows the user to download the compressed file.
function downloadFile(encoding, fileName){
    var link = document.createElement("a")
    var file = new Blob([encoding], { type: 'text/plain' })
    link.href = URL.createObjectURL(file)
    link.download = fileName.substring(0, fileName.length - 4) + '_compressed.txt'
    link.click();
    URL.revokeObjectURL(link.href);
}
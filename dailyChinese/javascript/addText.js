// Author: Moisés Adame-Aguilar
// Date: February 20, 2023
// Description: Calling a random word and it's meaning

words = ['世界', '你好']

function addHansi(hansi){
    // The paragraph where the hansi is going to be is created
    var paragraph = document.createElement("p")
    paragraph.innerText = hansi

    // Appending the paragraph to the main document.
    document.getElementById("main-character").appendChild(paragraph)
}

function test(){
    addHansi('手机')
}
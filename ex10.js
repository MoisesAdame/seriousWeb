// Author: Moisés Adame-Aguilar
// Date: January 5, 2023
// Descrption: Deep down in Ajax... Callback

// Callback: A function that gets called by another function.
// -- Example 1
// Callback function
function giveMeResult(){
    return 'second part'
}

// Normal function
function generateResult(first, callback){
    var res = first

    return res + callback()
}

console.log(generateResult('first part, ', giveMeResult))

// -- Example 2
var someArr = [3, 4, -5, 9, -1, -8]

function removeNeg(arr, callback){
    var newArr = new Array()
    for(var i = 0 ; i < arr.length; i++){
        if(callback(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeNeg(someArr, (x) => x >=0))
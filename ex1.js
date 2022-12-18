// Author: Moisés Adame-Aguilar
// Date: December 17, 2022
// Descrption: Excercise 1 in js
//document.write("<p>你好摩伊<p/>")

// Arrays can have any type
arr1 = ['考', '试', '很', '难']

// Arrays can also form matrices
mtrx1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Operators are exactly the same as in C++, the only difference
// is the existance of === and !== which serve just as == and !=
// but also take into account the type of the variables.

// Functions, work the same as in python, a llitle different definition.
function fib(number){
    if(number == 0 || number == 1){
        return 1
    }else{
        return fib(number - 1) + fib(number - 2)
    }
}

// The Document Object Model
//url = document.links.gitlink.href
//document.write("<p>[*] Your link is: " + url + "</p>")

// But is more convenient .getElementById

// You can acces the history, but just unharming data... like len
history_len = history.length
document.write("<p>[*] Your history length is: " + history_len + "</p>")

// Changing pages's dns
document.location.href = 'http://192.168.1.216:8080'
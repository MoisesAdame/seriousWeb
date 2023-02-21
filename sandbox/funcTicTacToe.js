// Author: Moisés Adame-Aguilar
// Date: February 20, 2023
// Description: Functionality for Tic Tac Toe Game

let turn = 0
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

function addToken(position, token){
    // Define the position of the token
    var squareId = 'square' + (position + 1)
    
    // Define the token.
    var box = document.getElementById(squareId)
    if(token === 'X'){
        box.innerText = 'X'
        board[position] = 'X'
    }else if(token === 'O'){
        box.innerText = 'O'
        board[position] = 'O'
    }
}

function counter(position){
    if(turn % 2 === 0 && board[position] === ' '){
        addToken(position, 'X')
    }else if(turn % 2 !== 0 && board[position] === ' '){
        addToken(position, 'O')
    }else{
        turn--
        alert('Invalid play. Try again!')
    }
    validateFinish(board)
    turn++
    if(turn === 9){
        alert('Tie!')
    }
}

function validateFinish(board){
    var result = ''
    if(board[0] === board[1] && board[0] === board[2] && board[0] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[3] === board[4] && board[3] === board[5] && board[3] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[6] === board[7] && board[6] === board[8] && board[6] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[0] === board[3] && board[0] === board[6] && board[0] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[1] === board[4] && board[1] === board[7] && board[1] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[2] === board[5] && board[2] === board[8] && board[2] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[0] === board[4] && board[0] === board[8] && board[0] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }else if(board[2] === board[4] && board[2] === board[6] && board[2] !== ' '){
        result += (turn % 2 === 0 ? 'X wins!' : 'O wins!')
        alert(result)
    }
}
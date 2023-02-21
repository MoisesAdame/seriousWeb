
let turn = 0
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ]

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

    turn++
}
'use strict'
require('../../../index.js')
// const api = require('../api')

// const onSpaceZero = (event) => {
//   if (playerOne) {
//     $('#spaceZero').text('x')
//   } else {
//     $('#spaceZero').text('o')
//   }
// }
let playerOne = true
let gameOver = false
const gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const playerTurnZero = () => {
  if (!gameOver) {
    if (gameboard[0] === ' ') {
      if (playerOne) {
        gameboard[0] = 'x'
        $('#spaceZero').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[0] = 'o'
        $('#spaceZero').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnOne = () => {
  if (!gameOver) {
    if (gameboard[1] === ' ') {
      if (playerOne) {
        gameboard[1] = 'x'
        $('#spaceOne').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[1] = 'o'
        $('#spaceOne').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnTwo = () => {
  if (!gameOver) {
    if (gameboard[2] === ' ') {
      if (playerOne) {
        gameboard[2] = 'x'
        $('#spaceTwo').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[2] = 'o'
        $('#spaceTwo').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnThree = () => {
  if (!gameOver) {
    if (gameboard[3] === ' ') {
      if (playerOne) {
        gameboard[3] = 'x'
        $('#spaceThree').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[3] = 'o'
        $('#spaceThree').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnFour = () => {
  if (!gameOver) {
    if (gameboard[4] === ' ') {
      if (playerOne) {
        gameboard[4] = 'x'
        $('#spaceFour').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[4] = 'o'
        $('#spaceFour').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnFive = () => {
  if (!gameOver) {
    if (gameboard[5] === ' ') {
      if (playerOne) {
        gameboard[5] = 'x'
        $('#spaceFive').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[5] = 'o'
        $('#spaceFive').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnSix = () => {
  if (!gameOver) {
    if (gameboard[6] === ' ') {
      if (playerOne) {
        gameboard[6] = 'x'
        $('#spaceSix').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[6] = 'o'
        $('#spaceSix').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnSeven = () => {
  if (!gameOver) {
    if (gameboard[7] === ' ') {
      if (playerOne) {
        gameboard[7] = 'x'
        $('#spaceSeven').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[7] = 'o'
        $('#spaceSeven').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnEight = () => {
  if (!gameOver) {
    if (gameboard[8] === ' ') {
      if (playerOne) {
        gameboard[8] = 'x'
        $('#spaceEight').text('x')
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[8] = 'o'
        $('#spaceEight').text('o')
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}

// Simplify by creating an array of HTML message names that loops through and finds the corresponding one
// const lookUpArray = []
// const playerTurn = (event) => {
// const index = lookUpArray.indexOf(event.target.id)
// }

const checkWinner = () => {
  if (playerOne === false) {
    checkWinnerX()
  } else if (playerOne === true) {
    checkWinnerO()
  }
}
const checkWinnerX = () => {
  if (gameboard[0] === 'x' && gameboard[1] === 'x' && gameboard[2] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[0] === 'x' && gameboard[3] === 'x' && gameboard[6] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[0] === 'x' && gameboard[4] === 'x' && gameboard[8] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[1] === 'x' && gameboard[4] === 'x' && gameboard[7] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[2] === 'x' && gameboard[4] === 'x' && gameboard[6] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[3] === 'x' && gameboard[4] === 'x' && gameboard[5] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[6] === 'x' && gameboard[7] === 'x' && gameboard[8] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (gameboard[2] === 'x' && gameboard[5] === 'x' && gameboard[8] === 'x') {
    $('#gameMessage').text('Player One Wins!')
    gameOver = true
  } else if (!gameOver) {
    if (gameboard.includes(' ')) {
      gameOver = false
    } else {
      gameOver = true
      $('#gameMessage').text('It is a Tie!')
    }
  } else {
    gameOver = false
  }
}
const checkWinnerO = () => {
  if (gameboard[0] === 'o' && gameboard[1] === 'o' && gameboard[2] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[0] === 'o' && gameboard[3] === 'o' && gameboard[6] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[0] === 'o' && gameboard[4] === 'o' && gameboard[8] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[1] === 'o' && gameboard[4] === 'o' && gameboard[7] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[2] === 'o' && gameboard[4] === 'o' && gameboard[6] === '0') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[3] === 'o' && gameboard[4] === 'o' && gameboard[5] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[6] === 'o' && gameboard[7] === 'o' && gameboard[8] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else if (gameboard[2] === 'o' && gameboard[5] === 'o' && gameboard[8] === 'o') {
    $('#gameMessage').text('Player Two Wins!')
    gameOver = true
  } else {
    gameOver = false
  }
}

const startGame = () => {
  for (let i = 0; i < gameboard.length; i++) {
    gameboard[i] = ' '
  }
  $('#gameMessage').text('Player One, your turn')
  $('#spaceZero').text(' ')
  $('#spaceOne').text(' ')
  $('#spaceTwo').text(' ')
  $('#spaceThree').text(' ')
  $('#spaceFour').text(' ')
  $('#spaceFive').text(' ')
  $('#spaceSix').text(' ')
  $('#spaceSeven').text(' ')
  $('#spaceEight').text(' ')
  gameOver = false
}

const addHandlers = () => {
  $('#spaceZero').on('click', playerTurnZero)
  $('#spaceOne').on('click', playerTurnOne)
  $('#spaceTwo').on('click', playerTurnTwo)
  $('#spaceThree').on('click', playerTurnThree)
  $('#spaceFour').on('click', playerTurnFour)
  $('#spaceFive').on('click', playerTurnFive)
  $('#spaceSix').on('click', playerTurnSix)
  $('#spaceSeven').on('click', playerTurnSeven)
  $('#spaceEight').on('click', playerTurnEight)
  $('#gameStarter').on('click', startGame)
}

module.exports = {
  addHandlers
}

'use strict'
require('../../../index.js')
const store = require('./../store')
const ui = require('../ui')
const api = require('../api')
const getFormFields = require('./../../../lib/get-form-fields')

let playerOne = true
let gameOver = false
const gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
// const boardSpaces = ['spaceZero', 'spaceOne', 'spaceTwo', 'spaceThree', 'spaceFour', 'spaceFive', 'spaceSix', 'spaceSeven', 'SpaceEight']
const playerTurnZero = () => {
  if (!gameOver) {
    if (gameboard[0] === ' ') {
      if (playerOne) {
        gameboard[0] = 'x'
        $('#spaceZero').text('x')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[0] = 'o'
        $('#spaceZero').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 0
  updateGame()
}
const playerTurnOne = () => {
  if (!gameOver) {
    if (gameboard[1] === ' ') {
      if (playerOne) {
        gameboard[1] = 'x'
        $('#spaceOne').text('x')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[1] = 'o'
        $('#spaceOne').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 1
  updateGame()
}
const playerTurnTwo = () => {
  if (!gameOver) {
    if (gameboard[2] === ' ') {
      if (playerOne) {
        gameboard[2] = 'x'
        $('#spaceTwo').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[2] = 'o'
        $('#spaceTwo').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 2
  updateGame()
}
const playerTurnThree = () => {
  if (!gameOver) {
    if (gameboard[3] === ' ') {
      if (playerOne) {
        gameboard[3] = 'x'
        $('#spaceThree').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[3] = 'o'
        $('#spaceThree').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 3
  updateGame()
}
const playerTurnFour = () => {
  if (!gameOver) {
    if (gameboard[4] === ' ') {
      if (playerOne) {
        gameboard[4] = 'x'
        $('#spaceFour').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[4] = 'o'
        $('#spaceFour').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 4
  updateGame()
}
const playerTurnFive = () => {
  if (!gameOver) {
    if (gameboard[5] === ' ') {
      if (playerOne) {
        gameboard[5] = 'x'
        $('#spaceFive').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[5] = 'o'
        $('#spaceFive').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 5
  updateGame()
}
const playerTurnSix = () => {
  if (!gameOver) {
    if (gameboard[6] === ' ') {
      if (playerOne) {
        gameboard[6] = 'x'
        $('#spaceSix').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[6] = 'o'
        $('#spaceSix').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 6
  updateGame()
}
const playerTurnSeven = () => {
  if (!gameOver) {
    if (gameboard[7] === ' ') {
      if (playerOne) {
        gameboard[7] = 'x'
        $('#spaceSeven').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[7] = 'o'
        $('#spaceSeven').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 7
  updateGame()
}
const playerTurnEight = () => {
  if (!gameOver) {
    if (gameboard[8] === ' ') {
      if (playerOne) {
        gameboard[8] = 'x'
        $('#spaceEight').text('x')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[8] = 'o'
        $('#spaceEight').text('o')
        store.currentPlayer = 'o'
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
  store.game.cells.id = 8
  updateGame()
}

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
    if (!gameboard.includes(' ')) {
      gameOver = true
      $('#gameMessage').text('It is a Tie!')
    } else {
      gameOver = false
    }
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
  } else if (!gameOver) {
    if (!gameboard.includes(' ')) {
      gameOver = true
      $('#gameMessage').text('It is a Tie!')
    } else {
      gameOver = false
    }
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
  showBoard()
}
const showBoard = () => {
  $('#gameBoard').show()
}

const createGame = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const updateGame = () => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.updateGame(data)
    .then(console.log('updated new game'))
    .catch(console.error)
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
  $('#gameStarter').on('click', createGame)
}

module.exports = {
  addHandlers
}

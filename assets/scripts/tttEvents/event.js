'use strict'
require('../../../index.js')
const store = require('./../store')
const ui = require('../ui')
const api = require('../api')
const getFormFields = require('./../../../lib/get-form-fields')

let playerOne = true
let gameOver = false
const gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
const playerTurnZero = () => {
  if (!gameOver) {
    if (gameboard[0] === ' ') {
      store.game.cells.id = 0
      if (playerOne) {
        gameboard[0] = 'x'
        $('#spaceZero').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[0] = 'o'
        $('#spaceZero').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnOne = () => {
  if (!gameOver) {
    if (gameboard[1] === ' ') {
      store.game.cells.id = 1
      if (playerOne) {
        gameboard[1] = 'x'
        $('#spaceOne').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[1] = 'o'
        $('#spaceOne').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnTwo = () => {
  if (!gameOver) {
    if (gameboard[2] === ' ') {
      store.game.cells.id = 2
      if (playerOne) {
        gameboard[2] = 'x'
        $('#spaceTwo').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[2] = 'o'
        $('#spaceTwo').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnThree = () => {
  if (!gameOver) {
    if (gameboard[3] === ' ') {
      store.game.cells.id = 0
      if (playerOne) {
        gameboard[3] = 'x'
        $('#spaceThree').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[3] = 'o'
        $('#spaceThree').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnFour = () => {
  if (!gameOver) {
    if (gameboard[4] === ' ') {
      store.game.cells.id = 0
      if (playerOne) {
        gameboard[4] = 'x'
        $('#spaceFour').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[4] = 'o'
        $('#spaceFour').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnFive = () => {
  if (!gameOver) {
    if (gameboard[5] === ' ') {
      store.game.cells.id = 0
      if (playerOne) {
        gameboard[5] = 'x'
        $('#spaceFive').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[5] = 'o'
        $('#spaceFive').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnSix = () => {
  if (!gameOver) {
    if (gameboard[6] === ' ') {
      store.game.cells.id = 0
      if (playerOne) {
        gameboard[6] = 'x'
        $('#spaceSix').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        $('#gameMessage').text('Player Two, your turn')
        store.currentPlayer = 'x'
        playerOne = false
      } else if (!playerOne) {
        gameboard[6] = 'o'
        $('#spaceSix').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnSeven = () => {
  if (!gameOver) {
    if (gameboard[7] === ' ') {
      store.game.cells.id = 7
      if (playerOne) {
        gameboard[7] = 'x'
        $('#spaceSeven').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[7] = 'o'
        $('#spaceSeven').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}
const playerTurnEight = () => {
  if (!gameOver) {
    if (gameboard[8] === ' ') {
      store.game.cells.id = 8
      if (playerOne) {
        gameboard[8] = 'x'
        $('#spaceEight').html('<img src="./public/img/graymoon.jpeg" height="30" width="30">')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[8] = 'o'
        $('#spaceEight').html('<img src="./public/img/bluemoon.jpg" height="30" width="30">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner()
    updateGame()
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
  } else {
    checkWinnerO()
  }
  store.game.over = gameOver
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
  playerOne = true
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
  const form = event.target
  const data = getFormFields(form)

  api.updateGame(data)
    .then(ui.onUpdateSuccess)
    .catch(console.error)
}
// Games that have over as true
const getPastGames = (event) => {
  const form = event.target
  const data = getFormFields(form)
  api.getPastGames(data)
    .then(ui.onGetPastGamesSuccess)
    .catch(ui.onGetPastGamesFailure)
}

// const onClick = event => {
//   const currentbox = event.target.id
//   takeTurn(currentbox)
// }
// const takeTurn = (currentbox) => {
//   // if the game isnt over
//   if (!gameOver) {
//     // and if the currentbox is space zero and the game board at space zero is blank
//     if (currentbox === 'spaceZero' && gameboard[0] === ' ') {
//       // set the cell id to zero
//       store.game.cells.id = 0
//       // if player one is true aka if player one is x
//       if (playerOne) {
//         // mark gameboard at 0 to x
//         gameboard[0] = 'x'
//         // give space zero an x in the html
//         $('#spaceZero').text('x')
//         // and tell the user that its player twos turn
//         $('#gameMessage').text('Player Two, your turn')
//         // set the current player to x for the api
//         store.currentPlayer = 'x'
//         // change players
//         playerOne = false
//         // if its not player ones turn
//       } else if (!playerOne) {
//         // mark gameboard at 0 to o
//         gameboard[0] = 'o'
//         // give the space an o in the html
//         $('#spaceZero').text('o')
//         // store the current player to o for the api
//         store.currentPlayer = 'o'
//         // and tell the user that its player ones turn
//         $('#gameMessage').text('Player One, your turn')
//         // change players
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceOne' && gameboard[1] === ' ') {
//       store.game.cells.id = 1
//       if (playerOne) {
//         gameboard[1] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[1] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceTwo' && gameboard[2] === ' ') {
//       store.game.cells.id = 2
//       if (playerOne) {
//         gameboard[2] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[2] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceThree' && gameboard[3] === ' ') {
//       store.game.cells.id = 3
//       if (playerOne) {
//         gameboard[3] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[3] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceFour' && gameboard[4] === ' ') {
//       store.game.cells.id = 4
//       if (playerOne) {
//         gameboard[4] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[4] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceFive' && gameboard[5] === ' ') {
//       store.game.cells.id = 5
//       if (playerOne) {
//         gameboard[5] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[5] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceSix' && gameboard[6] === ' ') {
//       store.game.cells.id = 6
//       if (playerOne) {
//         gameboard[6] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[6] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceSeven' && gameboard[7] === ' ') {
//       store.game.cells.id = 0
//       if (playerOne) {
//         gameboard[7] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[7] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else if (currentbox === 'spaceEight' && gameboard[8] === ' ') {
//       store.game.cells.id = 8
//       if (playerOne) {
//         gameboard[8] = 'x'
//         $('#spaceZero').text('x')
//         $('#gameMessage').text('Player Two, your turn')
//         store.currentPlayer = 'x'
//         playerOne = false
//       } else if (!playerOne) {
//         gameboard[8] = 'o'
//         $('#spaceZero').text('o')
//         store.currentPlayer = 'o'
//         $('#gameMessage').text('Player One, your turn')
//         playerOne = true
//       }
//     } else {
//       $('#gameMessage').text('Try Again')
//     }
//     checkWinner()
//     updateGame()
//   } else {
//     $('#gameMessage').text('Please start a new game')
//   }
// }

const addHandlers = () => {
  // $('.ticbox').on('click', onClick)
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
  $('#pastGames').on('click', getPastGames)
}

module.exports = {
  addHandlers
}

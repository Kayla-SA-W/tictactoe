'use strict'
require('../../../index.js')
const store = require('./../store')
const ui = require('../ui')
const api = require('../api')
const getFormFields = require('./../../../lib/get-form-fields')

let playerOne = true
let gameOver = false
let playerScore = 0
const gameboard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']

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

const findSpot = event => {
  let jsBoardSpot
  const currentSpot = event.target.id
  if (currentSpot === 'spaceZero') {
    jsBoardSpot = 0
  } else if (currentSpot === 'spaceOne') {
    jsBoardSpot = 1
  } else if (currentSpot === 'spaceTwo') {
    jsBoardSpot = 2
  } else if (currentSpot === 'spaceThree') {
    jsBoardSpot = 3
  } else if (currentSpot === 'spaceFour') {
    jsBoardSpot = 4
  } else if (currentSpot === 'spaceFive') {
    jsBoardSpot = 5
  } else if (currentSpot === 'spaceSix') {
    jsBoardSpot = 6
  } else if (currentSpot === 'spaceSeven') {
    jsBoardSpot = 7
  } else if (currentSpot === 'spaceEight') {
    jsBoardSpot = 8
  }
  takeTurn(jsBoardSpot, currentSpot)
}

const takeTurn = (jsBoardSpot, currentSpot) => {
  currentSpot = '#' + currentSpot
  if (!gameOver) {
    if (gameboard[jsBoardSpot] === ' ') {
      store.game.cells.id = jsBoardSpot
      if (playerOne) {
        gameboard[jsBoardSpot] = 'x'
        $(currentSpot).html('<img src="./public/img/graymoon-bgblue.jpg" height="50" width="50">')
        store.currentPlayer = 'x'
        $('#gameMessage').text('Player Two, your turn')
        playerOne = false
      } else if (!playerOne) {
        gameboard[jsBoardSpot] = 'o'
        $(currentSpot).html('<img src="./public/img/pinkmoon-bgblue.jpg" height="50" width="50">')
        store.currentPlayer = 'o'
        $('#gameMessage').text('Player One, your turn')
        playerOne = true
      }
    } else {
      $('#gameMessage').text('Try Again')
    }
    checkWinner(jsBoardSpot)
    updateGame()
  } else {
    $('#gameMessage').text('Please start a new game')
  }
}

const checkWinner = () => {
  const message = playerOne ? 'Player Two Wins!' : 'Player One Wins!'
  if (gameboard[0] !== ' ' && gameboard[0] === gameboard[1] && gameboard[0] === gameboard[2]) {
    $('#gameMessage').text(message)
    $('#spaceZero > img, #spaceOne > img, #spaceTwo > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[0] !== ' ' && gameboard[0] === gameboard[3] && gameboard[0] === gameboard[6]) {
    $('#gameMessage').text(message)
    $('#spaceZero > img, #spaceThree > img, #spaceSix > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[0] !== ' ' && gameboard[4] === gameboard[0] && gameboard[8] === gameboard[0]) {
    $('#gameMessage').text(message)
    $('#spaceZero > img, #spaceFour > img, #spaceEight > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[1] !== ' ' && gameboard[4] === gameboard[1] && gameboard[7] === gameboard[1]) {
    $('#gameMessage').text(message)
    $('#spaceOne > img, #spaceFour > img, #spaceSeven > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[2] !== ' ' && gameboard[4] === gameboard[2] && gameboard[6] === gameboard[2]) {
    $('#gameMessage').text(message)
    $('#spaceTwo > img, #spaceFour > img, #spaceSix > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[3] !== ' ' && gameboard[4] === gameboard[3] && gameboard[5] === gameboard[3]) {
    $('#gameMessage').text(message)
    $('#spaceThree > img, #spaceFour > img, #spaceFive > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[6] !== ' ' && gameboard[7] === gameboard[6] && gameboard[8] === gameboard[6]) {
    $('#gameMessage').text(message)
    $('#spaceSix > img, #spaceSeven > img, #spaceEight > img').addClass('winning-combo')
    gameOver = true
  } else if (gameboard[2] !== ' ' && gameboard[5] === gameboard[2] && gameboard[8] === gameboard[2]) {
    $('#gameMessage').text(message)
    $('#spaceTwo > img, #spaceFive > img, #spaceEight > img').addClass('winning-combo')
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
  store.game.over = gameOver
  trackScore()
}

const updateGame = () => {
  const form = event.target
  const data = getFormFields(form)

  api.updateGame(data)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const getPastGames = event => {
  const form = event.target
  const data = getFormFields(form)
  api.getPastGames(data)
    .then(ui.onGetPastGamesSuccess)
    .catch(ui.onGetPastGamesFailure)
}

const trackScore = () => {
  if (!playerOne && gameOver) {
    playerScore += 5
  } else if (playerOne && gameOver) {
    playerScore -= 5
  }
  // store.games.score = playerScore
  $('#scoreMessage').text(playerScore)
  // console.log(playerScore)
}

// const rotateBoard = (event) => {
//   event.preventDefault()
//   $('rotate-me').addClass('rotate-me')
// }

const addHandlers = () => {
  $('.ticbox').on('click', findSpot)
  $('#gameStarter').on('click', startGame)
  $('#gameStarter').on('click', createGame)
  $('#pastGames').on('click', getPastGames)
  // $('rotate-me').on('click', rotateBoard)
}

module.exports = {
  addHandlers
}

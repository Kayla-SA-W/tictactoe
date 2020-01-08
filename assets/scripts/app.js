'use strict'

// use require with a reference to bundle the file and use it in this file
const gameEvents = require('./tttEvents/event')
const authEvents = require('./auth/auth-events')
// const apiEvents = require('./apiEvents')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#gameStarter').hide()
  $('#pastGames').hide()
  $('#logout').hide()
  // $('#gameBoard').hide()
  $('#change-pw').hide()
  gameEvents.addHandlers()
  authEvents.addHandlers()
})

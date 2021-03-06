'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('#signUpMessage').text('successfully signed up!')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#signUpMessage').text('sign up failure!')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  $('#signInMessage').text('successfully Signed In!')
  store.user = response.user
  $('#logout').show()
  $('#change-pw').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#gameStarter').show()
  $('#pastGames').show()
  $('.scoreboard').show()
  $('#logoutMessage').text('')
  $('#sign-in').trigger('reset')
  $('#signUpMessage').text('')
}

const signInFailure = function () {
  $('#signInMessage').text('Unable to Sign In!')
  $('#sign-in').trigger('reset')
}

const changePwSuccess = function (response) {
  $('#pwChangeMessage').text('successfully changed password!')
  $('#change-pw').trigger('reset')
  $('#signInMessage').text('')
}

const changePwFailure = function () {
  $('#pwChangeMessage').text('could not change password!')
  $('#change-pw').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#logoutMessage').text('successfully signed out!')
  $('#sign-in').trigger('reset')
  $('#change-pw').hide()
  $('#logout').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#gameStarter').hide()
  $('#pastGames').hide()
  $('.scoreboard').hide()
  $('#signInMessage').text('')
  $('pwChangeMessage').text('')
}

const signOutFailure = function () {
  $('#logoutMessage').text('could not sign out!')
}

const createGameSuccess = response => {
  $('#quick-test').text('successfully created game!')
  store.game = response.game
}

const createGameFailure = response => {
  $('#quick-test').text('no game created!')
}

const onUpdateSuccess = response => {
  store.game = response.game
}

const onUpdateFailure = response => {
  $('#quick-test').text('Game not updated in API!')
}

const onGetPastGamesSuccess = response => {
  $('#messages').text('You have completed ' + $(response.games).length + ' games')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutFailure,
  signOutSuccess,
  createGameSuccess,
  createGameFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onGetPastGamesSuccess
}

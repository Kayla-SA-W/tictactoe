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
  $('#signInMessage').text('successfully signed in!')
  // store the response (which is an object with another object inside
  // called user) and saving into our blank object called store
  store.user = response.user
  // console.log(store.user.token)
  $('#logout').show()
  $('#change-pw').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#createExample').show()
  $('#logoutMessage').text('')
  $('#sign-in').trigger('reset')
}

const signInFailure = function () {
  $('#signInMessage').text('Unable to Sign In!')
  $('#sign-in').trigger('reset')
}

const changePwSuccess = function (response) {
  $('#pwChangeMessage').text('successfully changed password!')
  $('#change-pw').trigger('reset')
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
  $('#signInMessage').text('')
  $('#createExample').hide()
}

const signOutFailure = function () {
  $('#logoutMessage').text('could not sign out!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure,
  signOutFailure,
  signOutSuccess
}

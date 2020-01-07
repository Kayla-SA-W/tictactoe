'use strict'
const store = require('./store')

const signUpSuccess = function (response) {
  $('#signUpMessage').text('successfully signed up!')
}

const signUpFailure = function () {
  $('#signUpMessage').text('sign up failure!')
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
}

const signInFailure = function () {
  $('#signInMessage').text('Unable to Sign In!')
}

const changePwSuccess = function (response) {
  $('#pwChangeMessage').text('successfully changed password!')
}

const changePwFailure = function () {
  $('#pwChangeMessage').text('could not change password!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePwSuccess,
  changePwFailure
}

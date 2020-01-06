'use strict'

// use require with a reference to bundle the file and use it in this file
const gameEvents = require('./tttEvents/event')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  gameEvents.addHandlers()
})

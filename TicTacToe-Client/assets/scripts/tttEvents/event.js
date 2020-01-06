'use strict'

const playerOne = true

const onSpaceZero = (event) => {
  if (playerOne) {
    $('#spaceZero').text('x')
  } else {
    $('#spaceZero').text('o')
  }
}

const addHandlers = () => {
  $('#spaceZero').on('click', onSpaceZero)
  $('#spaceOne').on('click', onSpaceOne)
  $('#spaceTwo').on('click', onSpaceTwo)
}

module.exports = {
  addHandlers
}

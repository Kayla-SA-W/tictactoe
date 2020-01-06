'use strict'

const config = require('./config')
const reset = formData => {
  return $.ajax({
    url: config.apiUrl + '/books/' + formData.book.id,
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
}

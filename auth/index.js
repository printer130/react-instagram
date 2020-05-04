const jwt = require('jsonwebtoken')

function sign() {
  return jwt.sign(data, 'secreto')
}

module.exports = {
  sign,
}

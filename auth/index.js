const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = config.jwt.secret

function sign(data) {
  return jwt.sign(data, secret)
}

const check = {
  own: (req, owner) => {
    const decoded = decodedHeader(req)
    console.log('DECODED', decoded)
    if (decoded.id !== owner) {
      throw new Error('no puedes hacer esto')
    }
  },
}

function verify(token) {
  return jwt.verify(token, secret)
}

function getToken(auth) {
  // console.log('[auth]:', auth)
  if (!auth) {
    throw new Error('No hay token')
  }
  if (auth.indexOf('Bearer ') === -1) {
    throw new Error('Formato invalido')
  }
  let token = auth.replace('Bearer ', '')
  return token
}

function decodedHeader(req) {
  const authorization = req.headers.authorization || ''
  const token = getToken(authorization)
  const decoded = verify(token)
  req.user = decoded
  return decoded
}

module.exports = {
  sign,
  check,
}

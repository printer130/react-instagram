const jwt = require('jsonwebtoken')
const [, , opts, secret, nameOrToken] = process.argv

function firmar(payload, secret) {
  return jwt.sign(payload, secret)
}

function verificar(token, secret) {
  return jwt.verify(token, secret)
}

if (opts == 'sign') {
  console.log(firmar({ sub: nameOrToken }, secret))
}

if (opts == 'verify') {
  console.log(verificar(nameOrToken, secret))
}

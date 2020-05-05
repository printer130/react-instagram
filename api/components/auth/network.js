const express = require('express')

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()

router.post('/login', (req, res) => {
  // console.log('[Req login]:', req.body)
  controller
    .login(req.body.username, req.body.password)
    .then((token) => {
      console.log('TOKEN:', token)
      response.success(req, res, token, 200)
    })
    .catch((e) => {
      response.error(req, res, e, 400)
    })
})

module.exports = router

const express = require('express')
const router = express.Router()
const response = require('../../../network/response')

const controller = require('./index')

router.get('/', (req, res) => {
  controller
    .list()
    .then((lista) => {
      response.success(req, res, lista, 200)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  controller
    .get(id)
    .then((userId) => {
      response.success(req, res, userId, 200)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
})

router.post('/', (req, res) => {
  const { body } = req
  controller
    .post(body)
    .then(() => {
      response.success(req, res, 'usuario creado', 201)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  controller
    .borrado(id)
    .then(() => {
      response.success(req, res, 'User Deleted', 200)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
})

module.exports = router

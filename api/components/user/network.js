const express = require('express')

const secure = require('./secure')

const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', secure('update'), updated) //CHEKEAR ERROR
router.delete('/:id', deleted)

function list(req, res) {
  console.log('QUERIES', req.query)
  controller
    .list()
    .then((lista) => {
      response.success(req, res, lista, 200)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
}

function get(req, res) {
  const id = req.params.id
  controller
    .get(id)
    .then((userId) => {
      response.success(req, res, userId, 200)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
}

function upsert(req, res) {
  const { body } = req
  controller
    .post(body)
    .then(() => {
      response.success(req, res, 'usuario creado', 201)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
}

function deleted(req, res) {
  const { id } = req.params
  controller
    .borrado(id)
    .then(() => {
      response.success(req, res, 'User Deleted', 200)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
}

function updated(req, res) {
  controller
    .post(req.body)
    .then((user) => {
      response.success(req, res, user, 201)
    })
    .catch((e) => {
      response.error(req, res, e, 500)
    })
}

module.exports = router

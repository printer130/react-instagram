const express = require('express')
const swaggerUi = require('swagger-ui-express')
const config = require('../config')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const app = express()
//ROUTES
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const swaggerDoc = require('./swagger.json')

app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.listen(config.api.port, () => {
  console.log('Server on port ', config.api.port)
})

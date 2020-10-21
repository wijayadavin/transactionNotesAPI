const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authorization = require('../../middleware/authorizationMiddleware')


app.use(authorization)

app.get('/accounts', (req, res) => {
  const result = db.get('accounts', req.query)
  res.send(result)
})


module.exports = app
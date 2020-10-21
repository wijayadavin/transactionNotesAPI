const express = require('express')
const app = express.Router()
const db = require('../controller/dbController')
const hyperid = require('hyperid')


app.post('/login', (req, res) => {
  const result = db.get('accounts', req.body)
  if (result) {
    result.token = (hyperid())()
    res.send(result)
  } else {
    res.status(401).send('Wrong credentials')
  }
})


module.exports = app
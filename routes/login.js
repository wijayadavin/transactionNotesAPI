const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')


app.post('/login', (req, res) => {
  const result = db.get('accounts', req.body)
  if (result) {
    res.send(result)
  } else {
    res.status(401).send('Unauthorized')
  }
  return
})


module.exports = app
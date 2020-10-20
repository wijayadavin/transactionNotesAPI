const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/inventories', (req, res) => {
  console.log(req.query);
  const result = db.get('inventories', req.query)
  res.send(result)
})


module.exports = app
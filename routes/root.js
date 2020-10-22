const express = require("express")
const app = express.Router()

const authorize = require('../middleware/authorizationMiddleware')

app.get("/", authorize('transaction: create'), (req, res) => {
  res.send('Hello world!')
})


module.exports = app
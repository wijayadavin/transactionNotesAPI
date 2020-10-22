const express = require("express")
const app = express.Router()
const jwt = require('jsonwebtoken')


app.get("/", (req, res) => {
  // Set a payload
  const payload = {
    name: "Davin",
    scopes: ["transaction: create"]
  }

  // Generate a token according to the secret key:
  const token = jwt.sign(payload, "Secret key")
  res.send(token)
})


module.exports = app
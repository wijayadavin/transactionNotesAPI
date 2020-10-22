const express = require("express")
const app = express.Router()
const db = require("../controller/dbController")
const jwt = require('jsonwebtoken')

app.post("/login", (req, res) => {
  const result = db.get("accounts", req.body)
  if (result) {
    // Set a payload
    const payload = {
      username: req.body.username,
      admin: false
    }

    // Generate a token according to the secret key:
    const token = jwt.sign(payload, "Secret key")
    res.send(token)
  } else {
    res.status(401).send("Wrong credentials")
  }
})


module.exports = app
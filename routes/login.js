const express = require('express');
const app = express.Router();
const db = require('../controller/dbController');
const jwt = require('jsonwebtoken');
const jwtConfigurations = require('../config/jwtConfigurations');

app.post('/login', (req, res) => {
  const result = db.get('accounts', req.body);
  if (result.username == 'admin') {
    // Set a payload for admin users:
    const payload = {
      username: req.body.username,
      permissions: ['transaction: create', 'product: create'],
    };

    // Generate a token according to the secret key:
    const token = jwt.sign(payload, jwtConfigurations.secret);
    res.send(token);
  }

  if (result) {
    // Set a payload for non-admin users:
    const payload = {
      username: req.body.username,
      permissions: ['transaction: create'],
    };

    // Generate a token according to the secret key:
    const token = jwt.sign(payload, jwtConfigurations.secret);
    res.send(token);
  } else {
    res.status(401).send('Wrong credentials');
  }
});


module.exports = app;

/* eslint-disable new-cap */
const express = require('express');
const app = express.Router();
const db = require('../controller/dbController');
const uid = require('uid');

app.post('/signup', (req, res) => {
  req.body.id = uid();
  const result = db.add('users', req.body);

  if (!result) {
    res.status(400).send('Wrong body');
  } else {
    res.send(result);
  }
  return;
});


module.exports = app;

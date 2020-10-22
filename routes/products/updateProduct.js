/* eslint-disable new-cap */
const express = require('express');
const app = express.Router();
const db = require('../../controller/dbController');

app.post('/products', (req, res) => {
  const result = db.edit('products', req.body);
  console.log(result);
  if (!result) {
    res.status(400).send('Wrong body');
  } else {
    res.send(result);
  }
  return;
});


module.exports = app;

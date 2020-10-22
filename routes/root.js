/* eslint-disable new-cap */
const express = require('express');
const app = express.Router();
const authorize = require('../middleware/authorizationMiddleware');


app.get('/', authorize(), (req, res) => {
  res.send('Hello world!');
});


module.exports = app;

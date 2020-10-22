/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../controller/dbController');

const router = express.Router();

router.post('/products', authorize('products: create'), (req, res) => {
  const result = db.add('products', req.body);

  if (!result) {
    res.status(400).send('Wrong body');
  } else {
    res.send(result);
  }
  return;
});


module.exports = router;

/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../../controller/dbController');
const authorize = require('../../middleware/authorizationMiddleware');


router.patch('/transactions', authorize('transactions: update'), (req, res) => {
  const result = db.edit('transactions', req.body);

  if (!result) {
    res.status(400).send('Wrong body');
  } else {
    res.send(result);
  }
  return;
});


module.exports = router;

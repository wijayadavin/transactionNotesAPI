/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../../controller/dbController');
const authorize = require('../../middleware/authorizationMiddleware');


router.post('/users', authorize('users: update'), (req, res) => {
  const result = db.edit('users', req.body);

  if (!result) {
    res.status(400).send('Wrong body');
  } else {
    res.send(result);
  }
  return;
});


module.exports = router;

/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../../controller/dbController');
const authorize = require('../../middleware/authorizationMiddleware');


router.get('/users', authorize('users: read'), (req, res) => {
  const result = db.get('users', {username: req.user.username});
  if (!result) {
    res.status(404).send('Error: Not found');
  } else {
    res.send(result);
  }
  return;
});


module.exports = router;

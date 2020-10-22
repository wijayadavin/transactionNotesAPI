/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../controller/dbController');
const jwt = require('jsonwebtoken');
const jwtConfigurations = require('../config/jwtConfigurations');
const authorize = require('../middleware/authorizationMiddleware');


router.post('/login', authorize(), (req, res) => {
  const result = db.get('users', req.body);

  if (result.username == 'admin') {
    // Set a payload for admin users:
    const payload = {
      username: req.body.username,
      permissions: jwtConfigurations.userPermission,
    };
    // Generate a token according to the secret key:
    const token = jwt.sign(payload, jwtConfigurations.secret);
    res.send(token);
  } else if (result) {
    // Set a payload for non-admin users:
    const payload = {
      username: req.body.username,
      permissions: jwtConfigurations.adminPermission,
    };
    // Generate a token according to the secret key:
    const token = jwt.sign(payload, jwtConfigurations.secret);
    res.send(token);
  } else {
    res.status(401).send('Wrong credentials');
  }
});


module.exports = router;

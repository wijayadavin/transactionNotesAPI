/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../controller/dbController');
const jwt = require('jsonwebtoken');
const jwtConfigurations = require('../config/jwtConfigurations');
const authorize = require('../middleware/authorizationMiddleware');


router.post('/login', authorize(), (req, res) => {
  const result = db.get('users', req.body);

  // Set a token for admin users:
  if (result.username == 'admin') {
    console.log('login as an admin');
    const payload = {
      username: req.body.username,
      permissions: jwtConfigurations.adminPermission,
    };
    result.token = jwt.sign(payload,
        jwtConfigurations.secret,
        {expiresIn: '45s'},
    );
    res.send(result);
  } else if (result) {
    // Set a token for non-admin users:
    console.log('login as a normal user');
    const payload = {
      username: req.body.username,
      permissions: jwtConfigurations.userPermission,
    };
    result.token = jwt.sign(payload,
        jwtConfigurations.secret,
        {expiresIn: '45s'});
    res.send(result);
  } else {
    res.status(401).send('Wrong credentials');
  }
});


module.exports = router;

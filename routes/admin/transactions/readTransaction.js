/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../../../controller/dbController');
const authorize = require('../../../middleware/authorizationMiddleware');


router.get('/admin/transactions',
    authorize(['transactions: read', 'admin: true']), (req, res) => {
      const result = db.get('transactions', req.body);

      if (!result) {
        res.status(404).send('Error: Not found');
      } else {
        res.send(result);
      }
      return;
    });


module.exports = router;

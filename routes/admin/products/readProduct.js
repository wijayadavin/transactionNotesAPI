/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../../controller/dbController');


router.get('/admin/products',
    authorize(['products: read', 'admin: true']), (req, res) => {
      const result = db.get('products', req.body);

      if (!result) {
        res.status(404).send('Error: Not found');
      } else {
        res.send(result);
      }
      return;
    });


module.exports = router;

/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const db = require('../../controller/dbController');


router.patch('/admin/products',
    authorize(['products: update', 'admin: true']), (req, res) => {
      const result = db.edit('products', req.body);

      if (!result) {
        res.status(400).send('Wrong body');
      } else {
        res.send(result);
      }
      return;
    });


module.exports = router;

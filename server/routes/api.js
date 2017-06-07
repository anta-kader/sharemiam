const express = require('express');
const router = express.Router();

var db_handler = require('../data/db_handler');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
  db_handler.add();
});

module.exports = router;
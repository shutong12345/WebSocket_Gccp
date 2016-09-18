var express = require('express');
var router = express.Router();
var client = require('./client');

/* GET home page. */
router.get('/', function(req, res, next) {
  client.sendNumber("Express");
  res.render('index', { title: 'Express' });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET the list of euqations */
router.get('/', function(req, res, next) {
//    res.send('Hello from equations!');
  res.render('equations', { title: 'The list of equations!!!' });
});

module.exports = router;

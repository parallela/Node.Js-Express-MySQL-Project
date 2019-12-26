var express = require('express');
var router = express.Router();
var mysqlpool = require('../dbconfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  mysqlpool.getConnection(function(err, connection) {
    connection.query('SELECT * FROM notes', function (error, results, fields) {
      connection.release();
      if (error) throw error;
      res.render('notes', { title: 'Notes', notes: JSON.stringify(results, null, 4) });
    });
  });
});

module.exports = router;

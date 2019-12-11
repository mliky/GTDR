var express = require('express');
var mysql   = require('mysql');
var dbconn = require('../properties/dbconfig');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  dbconn.query("SELECT * FROM SONG", function (err, result, fields) {
      if (err) throw err;
      var song_name = result[0].NAME;
      res.render('index', { title: '달팽이♥', test:song_name });

  });

});

module.exports = router;

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

/* 검색 */
router.get('/search', function(req, res){
    res.redirect('/main?content=' + req.query.content);
})

module.exports = router;

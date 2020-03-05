var express = require('express');
var mysql   = require('mysql');
var dbconn = require('../properties/dbconfig');
var router  = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.query);
    /* 검색한다 */
    /* 1. 파라미터가 없는 경우
          - main 에 전체 보여줌
       2. 파라미터가 있는 경우
          - 결과 1건 : detail 화면
          - 결과 n건 : main 화면
     */
  dbconn.query("SELECT * FROM SONG WHERE NAME LIKE '%' || ? || '%'", [req.query.content], function (err, result, fields) {
      if (err) throw err;
      var song_name = result.length ? result[0].NAME : '결과없음';
      res.render('main', { title: '달팽이♥', test:song_name });

  });

});

module.exports = router;

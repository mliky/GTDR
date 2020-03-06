var express = require('express');

var dbSql   = require('../sql/mainSQL');
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
    dbSql.selectSong([req.query.content, req.query.content], function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.render('main', {content:req.query.content, songs:results[0], versions:results[1]});

    });
});

module.exports = router;

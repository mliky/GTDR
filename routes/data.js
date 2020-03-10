var express = require('express');
var router  = express.Router();

var dbSql   = require('../sql/dataSQL');

router.get('/', function(req, res, next) {
    res.render('data', { title: '달팽이♥', test:'test' });
});

router.get('/song', function(req, res, next) {
    console.log(req.query);
    dbSql.selectSong(function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.json(results);
    });
});

router.post('/song', function(req, res, next) {
    console.log(req.query);
    dbSql.insertSong(req.query, function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.json(results);
    });
});

router.put('/song', function(req, res, next) {
    console.log(req.query);
    dbSql.updatetSong(req.query, function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.json(results);
    });
});

router.delete('/song', function(req, res, next) {
    console.log(req.query);
    dbSql.deleteSong(req.query.ID, function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.json(results);
    });
});


module.exports = router;
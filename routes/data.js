var express = require('express');
var router  = express.Router();

var dbSql   = require('../sql/dataSQL');

router.get('/', function(req, res, next) {
    res.render('data', { title: '달팽이♥', test:'test' });
});

/********************** SONG *************************/
router.get('/song', function(req, res, next) {
    dbSql.selectSong(req.query, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/song', function(req, res, next) {
    dbSql.insertSong(req.body, function (err, results, fields) {
        if (err) throw err;
        console.log(results);
        res.json(req.body);
    });
});

router.put('/song', function(req, res, next) {
    dbSql.updateSong(req.body, function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.json(req.body);
    });
});

router.delete('/song', function(req, res, next) {
    dbSql.deleteSong(req.body.ID, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});
/******************************************************/
/********************** SHEET *************************/
router.get('/sheet', function(req, res, next) {
    dbSql.selectSheet(req.query.ID, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/sheet', function(req, res, next) {
    dbSql.insertSheet(req.body, function (err, results, fields) {
        if (err) throw err;
        console.log(results);
        res.json(req.body);
    });
});

router.put('/sheet', function(req, res, next) {
    dbSql.updateSheet(req.body, function (err, results, fields) {
        if (err) throw err;
        console.log(results);

        res.json(req.body);
    });
});

router.delete('/sheet', function(req, res, next) {
    dbSql.deleteSheet(req.body.ID, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});
/********************************************************/
/********************** KEYWORD *************************/
router.get('/keyword', function(req, res, next) {
    dbSql.selectSong(req.query, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/keyword', function(req, res, next) {
    dbSql.insertSong(req.body, function (err, results, fields) {
        if (err) throw err;
        console.log(results);
        res.json(req.body);
    });
});

router.delete('/keyword', function(req, res, next) {
    dbSql.deleteSong(req.body.ID, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});
/******************************************************/
/********************** VIDEO *************************/
router.get('/video', function(req, res, next) {
    dbSql.selectSong(req.query, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/video', function(req, res, next) {
    dbSql.insertSong(req.body, function (err, results, fields) {
        if (err) throw err;
        console.log(results);
        res.json(req.body);
    });
});

router.put('/video', function(req, res, next) {
    dbSql.updateSong(req.body, function (err, results, fields) {
        if (err) throw err;
        res.json(req.body);
    });
});
router.delete('/video', function(req, res, next) {
    dbSql.deleteSong(req.body.ID, function (err, results, fields) {
        if (err) throw err;
        res.json(results);
    });
});
module.exports = router;
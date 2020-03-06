var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '달팽이♥', test:'test' });
});

/* 검색 */
router.get('/search', function(req, res){
    res.redirect('/main?content=' + req.query.content);
})

module.exports = router;

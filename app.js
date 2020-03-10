var createError = require('http-errors');
var express = require('express');
var mysql = require('mysql');
var dbConfig = require('./properties/dbconfig');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var mainRouter  = require('./routes/main');
var dataRouter  = require('./routes/data');
var usersRouter = require('./routes/users');

var app = express();


// DB
dbConfig.dbconn.connect(function(err, rows) {
    if (err) {
        console.error('mysql connection error :' + err);
    } else {
        console.info('mysql is connected successfully.');
    }
});

// read Code
app.use(function(req, res, next) {
    dbConfig.dbSql("SELECT * FROM CODE ORDER BY CODE_ID, SEQ",[], function (err, result, fields) {
        if (err) throw err;

        var codeListMap = {};
        var codeListArr = {};
        for(var i = 0; i < result.length; i++){
            var codeObj = (codeListMap[result[i].CODE_ID] == undefined) ? {} : codeListMap[result[i].CODE_ID];
            codeObj[result[i].CODE_VALUE] = result[i].CODE_NAME;
            codeListMap[result[i].CODE_ID] = codeObj;

            var codeArr = (codeListArr[result[i].CODE_ID] == undefined) ? [] : codeListArr[result[i].CODE_ID];
            if(result[i].CODE_ID == 'VERSION')
                codeArr.unshift(result[i]);
            else
                codeArr.push(result[i]);
            codeListArr[result[i].CODE_ID] = codeArr;
        }

        res.locals.codeMap = codeListMap;
        res.locals.codeArr = codeListArr;
        next();
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/data', dataRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.locals.pretty= true;

module.exports = app;

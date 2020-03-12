
var databaseOptions = {
    host     : '211.47.75.102',
    user     : 'dnduddl92',
    port     : '3306',
    database : 'dbdnduddl92',
    password : 'milky@hamdal',
    connectionLimit : 30
};
/*
var databaseOptions = {
    host     : 'localhost',
    user     : 'dnduddl92',
    port     : '3306',
    database : 'dbdnduddl92',
    password : 'milky@hamdal',
    multipleStatements: true,
    connectionLimit   : 30
};
*/
var mysql  = require('mysql');
var dbconn = mysql.createConnection(databaseOptions);

module.exports = {
    dbconn: dbconn,
    dbSql : function(sql, param, callback){
        dbconn.query(sql, param, callback);
    }
};


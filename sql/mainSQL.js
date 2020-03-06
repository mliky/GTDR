var mysql     = require('mysql');
var dbConfig  = require('../properties/dbconfig');

var sqlMapObj = {};

var selectSong =
"SELECT SONG.ID" +
"     , SONG.NAME" +
"     , SONG.ARTIST" +
"     , SONG.VERSION" +
"  FROM SONG " +
" WHERE SONG.NAME LIKE CONCAT('%',?,'%')" +
" ORDER BY SONG.VERSION" +
"     , SONG.SEQ; " +
"SELECT SONG.VERSION" +
"     , CODE.CODE_NAME AS VERSION_NAME" +
"  FROM SONG " +
"  JOIN CODE " +
"    ON CODE.CODE_VALUE = SONG.VERSION" +
"   AND CODE.CODE_ID    = 'VERSION'" +
" WHERE SONG.NAME LIKE CONCAT('%',?,'%')" +
" GROUP BY SONG.VERSION" +
"     , CODE.CODE_NAME" +
" ORDER BY SONG.VERSION;";

sqlMapObj.selectSong = function(param,callback){
    dbConfig.dbSql(selectSong, param, callback);
}
module.exports = sqlMapObj;

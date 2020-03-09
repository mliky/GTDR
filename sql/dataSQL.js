var mysql     = require('mysql');
var dbConfig  = require('../properties/dbconfig');

var sqlMapObj = {};

var selectSong =
    "SELECT ID" +
    "     , NAME" +
    "     , NAME_EN" +
    "     , NAME_KR" +
    "     , NAME_JP" +
    "     , ARTIST" +
    "     , ARTIST_EN" +
    "     , ARTIST_KR" +
    "     , ARTIST_JP" +
    "     , BPM" +
    "     , VERSION" +
    "     , TAG" +
    "     , HOT_YN" +
    "     , DEL_YN" +
    "     , SEQ" +
    "     , IMG" +
    " FROM SONG";

var insertSong =
    "INSERT INTO SONG" +
    "     ( ID" +
    "     , NAME" +
    "     , NAME_EN" +
    "     , NAME_KR" +
    "     , NAME_JP" +
    "     , ARTIST" +
    "     , ARTIST_EN" +
    "     , ARTIST_KR" +
    "     , ARTIST_JP" +
    "     , BPM" +
    "     , VERSION" +
    "     , TAG" +
    "     , HOT_YN" +
    "     , DEL_YN" +
    "     , SEQ" +
    "     , IMG" +
    "     ) VALUES";

var updateSong =
    "UPDATE SONG" +
    "   SET NAME = ?" +
    "     , NAME_EN = ?" +
    "     , NAME_KR = ?" +
    "     , NAME_JP = ?" +
    "     , ARTIST = ?" +
    "     , ARTIST_EN = ?" +
    "     , ARTIST_KR = ?" +
    "     , ARTIST_JP = ?" +
    "     , BPM = ?" +
    "     , VERSION = ?" +
    "     , TAG = ?" +
    "     , HOT_YN = ?" +
    "     , DEL_YN = ?" +
    "     , SEQ = ?" +
    "     , IMG = ?" +
    " WHERE ID = ?";

var deleteSong =
    "DELETE FROM SONG" +
    " WHERE ID = ?";
sqlMapObj.selectSong = function(callback){
    dbConfig.dbSql(selectSong,[], callback);
}
sqlMapObj.insertSong = function(param, callback){
    dbConfig.dbSql(insertSong, param, callback);
}
sqlMapObj.updateSong = function(param, callback){
    dbConfig.dbSql(updateSong, param, callback);
}
sqlMapObj.deleteSong = function(param, callback){
    dbConfig.dbSql(deleteSong, param, callback);
}

module.exports = sqlMapObj;

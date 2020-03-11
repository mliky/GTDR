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
    "  FROM SONG" +
    " WHERE 1 = 1";

var insertSong =
    "INSERT INTO SONG" +
    "   SET ?";

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
    "     , BPM = NULLIF(?, '')" +
    "     , VERSION = ?" +
    "     , HOT_YN = ?" +
    "     , DEL_YN = ?" +
    "     , SEQ = NULLIF(?, '')" +
    " WHERE ID = ?";

var deleteSong =
    "DELETE FROM SONG" +
    " WHERE ID = ?";

sqlMapObj.selectSong = function(param, callback){
    var whereStr = "";
    for (var columnName in param) {
        if(param[columnName]){
            if(columnName == 'BPM' || columnName == 'SEQ')
                whereStr += " AND " + columnName + " = " + mysql.escape(param[columnName]);
            else
                whereStr += " AND " + columnName + " LIKE CONCAT('%', " + mysql.escape(param[columnName]) + ", '%')";
        }
    }
    dbConfig.dbSql(selectSong + whereStr, callback);
}
sqlMapObj.insertSong = function(param, callback){
    param.HOT_YN = param.HOT_YN == 'true' ? 'Y' : 'N';
    param.DEL_YN = param.DEL_YN == 'true' ? 'Y' : 'N';
    param.BPM    = param.BPM ? parseInt(param.BPM, 10) : null;
    param.SEQ    = param.SEQ ? parseInt(param.BPM, 10) : null;
    dbConfig.dbSql(insertSong, param, callback);
}
sqlMapObj.updateSong = function(param, callback){
    var paramArr = [
        param.NAME,
        param.NAME_EN,
        param.NAME_KR,
        param.NAME_JP,
        param.ARTIST,
        param.ARTIST_EN,
        param.ARTIST_KR,
        param.ARTIST_JP,
        param.BPM ? parseInt(param.BPM, 10) : '', //null 안들어감
        param.VERSION,
        param.HOT_YN == 'true' ? 'Y' : 'N',
        param.DEL_YN == 'true' ? 'Y' : 'N',
        param.SEQ ? parseInt(param.SEQ, 10) : '',
        param.ID
    ];

    dbConfig.dbSql(updateSong, paramArr, callback);
}
sqlMapObj.deleteSong = function(param, callback){
    dbConfig.dbSql(deleteSong, param, callback);
}

var selectSheet =
    "SELECT ID" +
    "     , TYPE" +
    "     , STEP" +
    "     , LEVEL" +
    "     , NOTES_CNT" +
    "     , 8_BPM" +
    "     , MEMO" +
    "  FROM SHEET";

var insertSheet =
    "INSERT INTO SHEET" +
    "   SET ?";

var updateSheet =
    "UPDATE SHEET" +
    "   SET LEVEL = ?" +
    "     , NOTES_CNT = ?" +
    "     , 8_BPM = ?" +
    "     , MEMO = ?" +
    " WHERE ID = ?" +
    "   AND TYPE = ?" +
    "   AND STEP = ?";

var deleteSheet =
    "DELETE FROM SHEET" +
    " WHERE ID = ?" +
    "   AND TYPE = ?" +
    "   AND STEP = ?";

sqlMapObj.selectSheet = function(param, callback){
    dbConfig.dbSql(selectSheet, param, callback);
}
sqlMapObj.insertSheet = function(param, callback){
    param.LEVEL     = param.LEVEL     ? parseFloat(param.LEVEL, 10) : null;
    param.NOTES_CNT = param.NOTES_CNT ? parseInt(param.NOTES_CNT, 10) : null;
    param["8_BPM"]  = param["8_BPM"]  ? parseInt(param["8_BPM"], 10) : null;
    dbConfig.dbSql(insertSheet, param, callback);
}
sqlMapObj.updateSheet = function(param, callback){
    var paramArr = [
        parseFloat(param.LEVEL, 10),
        parseInt(param.NOTES_CNT,10),
        parseInt(param["8_BPM"],10),
        param.MEMO,
        param.ID,
        param.TYPE,
        param.STEP
    ];

    dbConfig.dbSql(updateSheet, paramArr, callback);
}
sqlMapObj.deleteSheet = function(param, callback){
    dbConfig.dbSql(deleteSheet, param, callback);
}
module.exports = sqlMapObj;

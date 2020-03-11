$(function() {

    $("#jsGridSong").jsGrid({
        height: "300px",
        width: "100%",
        filtering: true,
        inserting: true,
        editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete client?",
        controller: {
            loadData: function(item) {
                return $.ajax({
                    type: "GET",
                    url: "/data/song",
                    data: item
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/data/song",
                    data: item
                });
            },
            updateItem: function(item) {
                console.log(item);
                return $.ajax({
                    type: "PUT",
                    url: "/data/song",
                    data: item
                });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/data/song",
                    data: item
                });
            }
        },
        fields: [
            { name: "ID"       , type: "text"    , width: 150, autosearch:true, headercss:"essensialRed" },
            { name: "NAME"     , type: "text"    , width: 150, autosearch:true, headercss:"essensialRed" },
            { name: "NAME_EN"  , type: "text"    , width: 150, autosearch:true },
            { name: "NAME_KR"  , type: "text"    , width: 150, autosearch:true },
            { name: "NAME_JP"  , type: "text"    , width: 150, autosearch:true },
            { name: "ARTIST"   , type: "text"    , width: 150, autosearch:true, headercss:"essensialRed" },
            { name: "ARTIST_EN", type: "text"    , width: 150, autosearch:true },
            { name: "ARTIST_KR", type: "text"    , width: 150, autosearch:true },
            { name: "ARTIST_JP", type: "text"    , width: 150, autosearch:true },
            { name: "BPM"      , type: "number"  , width: 50, autosearch:true },
            { name: "VERSION"  , type: "select"  , items: codeArr.VERSION, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed" },
            { name: "HOT_YN"   , type: "checkbox", width: 50, title: "HOT_YN", headercss:"essensialRed" },
            { name: "DEL_YN"   , type: "checkbox", width: 50, title: "DEL_YN", headercss:"essensialRed" },
            { name: "SEQ"      , type: "number"  , width: 50, autosearch:true },
            { type: "control" }
        ]
    });

    $("#jsGridSheet").jsGrid({
        height: "300px",
        width: "50%",
        filtering: false,
        inserting: true,
        editing: true,
        sorting: false,
        paging: false,
        autoload: true,
        deleteConfirm: "Do you really want to delete client?",
        controller: {
            loadData: function(item) {
                return $.ajax({
                    type: "GET",
                    url: "/data/sheet",
                    data: item
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/data/sheet",
                    data: item
                });
            },
            updateItem: function(item) {
                console.log(item);
                return $.ajax({
                    type: "PUT",
                    url: "/data/sheet",
                    data: item
                });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/data/sheet",
                    data: item
                });
            }
        },
        fields: [
            { name: "ID"       , type: "text"    , width: 80, headercss:"essensialRed" },
            { name: "TYPE"     , type: "select"  , width: 70, items: codeArr.TYPE, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed" },
            { name: "STEP"     , type: "select"  , width: 70, items: codeArr.STEP, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed" },
            { name: "LEVEL"    , type: "number"  , width: 50},
            { name: "NOTES_CNT", type: "number"  , width: 50},
            { name: "8_BPM"    , type: "number"  , width: 50},
            { name: "MEMO"     , type: "text"    , width: 200, autosearch:true },
            { type: "control" }
        ]
    });
});
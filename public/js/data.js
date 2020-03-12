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
        deleteConfirm: "곡을 삭제하시겠습니까?",
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
        rowClick: function(args){
            $("#jsGridSheet"  ).jsGrid("loadData", { ID: args.item.ID });

            $("#selectedId"   ).val(args.item.ID);
            $("#selectedType" ).val("");
            $("#selectedStep" ).val("");
            $("#selectedSong" ).text(args.item.NAME);
            $("#selectedSheet").text("채보를 선택해주세요.");
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
        width: "100%",
        filtering: false,
        inserting: true,
        editing: true,
        sorting: false,
        paging: false,
        autoload: false,
        deleteConfirm: "채보를 삭제하시겠습니까?",
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
        rowClick: function(args){
            $("#jsGridVideo"  ).jsGrid("loadData", { ID: args.item.ID, TYPE: args.item.TYPE, STEP: args.item.STEP });
            $("#jsGridKeyword").jsGrid("loadData", { ID: args.item.ID, TYPE: args.item.TYPE, STEP: args.item.STEP });
            $("#selectedType" ).val(args.item.TYPE);
            $("#selectedStep" ).val(args.item.STEP);

            $("#selectedSheet").text(args.item.STEP + "-" + args.item.TYPE);
        },
        fields: [
            { name: "ID"       , type: "text"    , width: 80, headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedId").val();} },
            { name: "TYPE"     , type: "select"  , width: 70, items: codeArr.TYPE, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed" },
            { name: "STEP"     , type: "select"  , width: 70, items: codeArr.STEP, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed" },
            { name: "LEVEL"    , type: "number"  , width: 50, headercss:"essensialRed"},
            { name: "NOTES_CNT", type: "number"  , width: 50},
            { name: "8_BPM"    , type: "number"  , width: 50, headercss:"essensialRed"},
            { name: "MEMO"     , type: "text"    , width: 200 },
            { type: "control" }
        ]
    });

    $("#jsGridVideo").jsGrid({
        height: "300px",
        width: "59%",
        filtering: false,
        inserting: true,
        editing: true,
        sorting: false,
        paging: false,
        autoload: false,
        deleteConfirm: "영상을 삭제하시겠습니까?",
        controller: {
            loadData: function(item) {
                return $.ajax({
                    type: "GET",
                    url: "/data/video",
                    data: item
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/data/video",
                    data: item
                });
            },
            updateItem: function(item) {
                return $.ajax({
                    type: "PUT",
                    url: "/data/video",
                    data: item
                });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/data/video",
                    data: item
                });
            }
        },
        fields: [
            { name: "ID"       , type: "text"    , width: 80, headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedId").val();} },
            { name: "TYPE"     , type: "select"  , width: 70, items: codeArr.TYPE, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedType").val();} },
            { name: "STEP"     , type: "select"  , width: 70, items: codeArr.STEP, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedStep").val();} },
            { name: "SRN"      , type: "number"  , width: 50, headercss:"essensialRed"},
            { name: "RANDOM"   , type: "select"  , width: 70, items: ["NORMAL", "RANDOM", "S.RANDOM"], headercss:"essensialRed" },
            { name: "REVERSE"  , type: "select"  , width: 70, items: ["NORMAL", "REVERSE"], headercss:"essensialRed" },
            { name: "URL"     , type: "text"    , width: 200 },
            { type: "control" }
        ]
    });

    $("#jsGridKeyword").jsGrid({
        height: "300px",
        width: "40%",
        filtering: false,
        inserting: true,
        editing: false,
        sorting: false,
        paging: false,
        autoload: false,
        deleteConfirm: "키워드를 삭제하시겠습니까?",
        controller: {
            loadData: function(item) {
                return $.ajax({
                    type: "GET",
                    url: "/data/keyword",
                    data: item
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/data/keyword",
                    data: item
                });
            },
            updateItem:function(item){},
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/data/keyword",
                    data: item
                });
            }
        },
        fields: [
            { name: "ID"       , type: "text"    , width: 80 , headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedId").val();} },
            { name: "TYPE"     , type: "select"  , width: 70, items: codeArr.TYPE, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedType").val();} },
            { name: "STEP"     , type: "select"  , width: 70, items: codeArr.STEP, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed", readOnly:true, insertTemplate:"", insertValue:function(){return $("#selectedStep").val();} },
            { name: "KEYWORD"  , type: "select"  , width: 100, items: codeArr.KEYWORD, valueField: "CODE_VALUE", textField: "CODE_NAME", headercss:"essensialRed" },
            { type: "control" }
        ]
    });
});
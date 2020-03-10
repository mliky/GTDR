$(function() {

    $("#jsGrid").jsGrid({
        height: "300px",
        width: "100%",
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
            { name: "ID", type: "text", width: 150 },
            { name: "NAME", type: "text", width: 150 },
            { name: "NAME_EN", type: "text", width: 150 },
            { name: "NAME_KR", type: "text", width: 150 },
            { name: "NAME_JP", type: "text", width: 150 },
            { name: "ARTIST", type: "text", width: 150 },
            { name: "ARTIST_EN", type: "text", width: 150 },
            { name: "ARTIST_KR", type: "text", width: 150 },
            { name: "ARTIST_JP", type: "text", width: 150 },
            { name: "BPM", type: "number", width: 50, filtering: false },
            { name: "VERSION", type: "select", items: codeArr.VERSION, valueField: "CODE_VALUE", textField: "CODE_NAME" },

            { name: "HOT_YN", type: "checkbox", title: "HOT_YN", sorting: false },
            { name: "DEL_YN", type: "checkbox", title: "DEL_YN", sorting: false },
            { name: "SEQ", type: "number", width: 50, filtering: false },
            { type: "control" }
        ]
    });
});
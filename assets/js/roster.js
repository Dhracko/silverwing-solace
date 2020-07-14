const url = "assets/js/members.json";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

$(document).ready(function() {
    $.getJSON(url, function(data) {
        var member_roster = "";
        for (i=0; i <= 9; i++) {
            member_roster += '<tr>';
            member_roster += '<td>'+data[i].name+'</td>';
            member_roster += '<td>'+data[i].level+'</td>';
            member_roster += '<td>'+data[i].role+'</td>';
            member_roster += '<td>'+data[i].rank+'</td>';
            member_roster += '</tr>';
        };
        $('#roster').append(member_roster);
    });
        
})

function writeToDocument(type) {
    var el = document.getElementById("roster");
    el.innerHTML = '<tr>' + '<td>Character name </td>' +'<td>Level</td>'+'<td>Role</td>'+'<td>Guild Rank</td>'+'</tr>';
    var i;
    if (type == "pageOne") {
        var i = 0;
        var end = 9;
    } else if (type == "pageTwo") {
        var i = 10;
        var end = 19;
    } else if (type == "pageThree") {
        var i = 20;
        var end = 29;
    }else if (type == "pageFour") {
        var i = 30;
        var end = 39;
    }else {
        var i = 40;
        var end = 49;
    };
    getData(type, function(item) {
        for (i; i <= end; i++) {
            el.innerHTML += '<tr>' + '<td>' + item[i].name + '</td>' +'<td>'+  item[i].level+ '</td>'+'<td>' + item[i].role + '</td>'+'<td>' + item[i].rank + '</td>'+'</tr>';
        };
    });
};



// Roster Table
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

$(document).ready(function() { //loads the first 10 members when page finish loading
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
    if (type == "pageOne") { // Check which button page the users has pressed
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
    getData(type, function(item) { //Add the table rows and the table to the right page
        for (i; i <= end; i++) {
            el.innerHTML += '<tr>' + '<td>' + item[i].name + '</td>' +'<td>'+  item[i].level+ '</td>'+'<td>' + item[i].role + '</td>'+'<td>' + item[i].rank + '</td>'+'</tr>';
        };
    });
};

//Google Maps API

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 16.619261, lng: -13.134766 }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
      
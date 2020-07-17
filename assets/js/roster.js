
// Roster Table
var url = "assets/js/roles.json";


$(document).ready(function() { //loads the first 10 members when page finish loading
    $.getJSON(url, function(data) {
        var member_roster = "";
            member_roster += '<tr>';
            member_roster += '<td>'+data[i].name+'</td>';
            member_roster += '<td>'+data[i].level+'</td>';
            member_roster += '<td>'+data[i].role+'</td>';
            member_roster += '<td>'+data[i].rank+'</td>';
            member_roster += '</tr>';
        $('#roster').append(member_roster);
    });
        
})



//Google Maps API

// function initMap() {
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 2,
//         center: { lat: 16.619261, lng: -13.134766 }
//     });

//     var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     var locations = [
//         { lat: 40.785091, lng: -73.968285 },
//         { lat: 41.084045, lng: -73.874245 },
//         { lat: 40.754932, lng: -73.984016 }
//     ];

//     var markers = locations.map(function(location, i) {
//         return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//         });
//     });

//     var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
// }
      
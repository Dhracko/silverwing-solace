// Members details in JSON style for easier reading
var members = [  
    { 
    "level": 120,
    "location": [-31.2969541, 20.2479026],
    "name": "Lexari",
    "rank": 0,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [28.844829, 29.3840401],
    "name": "Mapen",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [-34.2969541, 19.2479026],
    "name": "Aysira",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 120,
    "location": [51.0968582, 8.9690268],
    "name": "Bentlee",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [50.4974444, 4.345157],
    "name": "Deriki",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [39.0100679, 35.6885503],
    "name": "Refaralon",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [40.1458903, -8.3168015],
    "name": "Berzak",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 39,
    "location": [40.1458903, -3.8196207],
    "name": "Locketo",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [46.139033, 1.4351197],
    "name": "Yirinae",
    "rank": 3,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [51.7602507, 0],
    "name": "Theomis",
    "rank": 6,
    "role": "Healer"
  }
]; 
//Reset the varibles to  empty variables
var membersTank = "";  
var membersHealer = "";
var membersDps = "";

//create a loop throught the members list
for (i = 0; i < members.length; i++) {      
    var membersRole = members[i].role;
    var membersName = members[i].name;

// Checks if the member role is a tank, a healer or a DPS
    if (membersRole == "Tank") {           
        membersTank += membersName += "<br>";
        document.getElementById("tank").innerHTML = membersTank;       
    } else if (membersRole == "Healer") {   
        membersHealer += membersName += "<br>";
        document.getElementById("heal").innerHTML = membersHealer;
    } else if (membersRole == "DPS") {             
        membersDps += membersName += "<br>"; 
        document.getElementById("dmg").innerHTML = membersDps;
    }
}

// Initiates the maps with a zoom and center location
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: {
            lat: 16.619261,
            lng: -13.134766
        }
    });
}

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Gets the button pressed at the wedsite and gives the variable "rl" an argument.
document.getElementById("tnkbtn").onclick = function () { myFunction("Tank"); };
document.getElementById("healerrl").onclick = function () { myFunction("Healer"); };
document.getElementById("dps").onclick = function () { myFunction("DPS"); };


//creates a locations array for the map to read.
function myFunction(rl) {   
    var locations = [];

/*creates a loop for the role button pressed.
Check if the member role is the same as the button pressed
designate the array "setMap" with the location of the member in the map
pushes the location of the member into the variable "locations" to be used later by google script */
    for (i = 0; i < members.length; i++) {     
        if (members[i].role === rl) {          
            var coords = members[i].location;   
            var setMap = { "lat": coords[0], "lng": coords[1] };    
            locations.push(setMap);                                 
        }
    }

//Google scripts to create the markers /marker Cluster in the map.
    markers = locations.map(function (location, i) {        
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

//Reset the map before placing the new markers.
    initMap(); 

    markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

}

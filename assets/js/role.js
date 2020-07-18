var members = [{  // Members details
    "level": 120,
    "location": {
      "South Africa": [-34.2969541, 18.2479026]
    },
    "name": "Lexari",
    "rank": 0,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": {
      "Egypt": [26.844829, 26.3840401]
    },
    "name": "Mapen",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": {
      "South Africa": [-34.2969541, 18.2479026]
    },
    "name": "Aysira",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 120,
    "location": {
      "Germany": [51.0968582, 5.9690268]
    },
    "name": "Bentlee",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": {
      "Belgium": [50.4974444, 3.345157]
    },
    "name": "Deriki",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": {
      "Turkey": [39.0100679, 30.6885503]
    },
    "name": "Refaralon",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": {
      "Portugal": [37.1458903, -23.3168015]
    },
    "name": "Berzak",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 39,
    "location": {
      "Spain": [40.1301544, -8.201855]
    },
    "name": "Locketo",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": {
      "France": [46.139033, -2.4351197]
    },
    "name": "Yirinae",
    "rank": 3,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": {
      "England": [52.7602507, -6.8123259]
    },
    "name": "Theomis",
    "rank": 6,
    "role": "Healer"
  }
];

var membersTank = "";
var membersHealer = "";
var membersDps = "";

for (i = 0; i < members.length; i++) { //create a loop throught the members list
    var membersRole = members[i].role;
    var membersName = members[i].name;
    
    if (membersRole === "Tank") {  // Checks if the member roll is a tank
        membersTank += membersName += "<br>";
        
    };
    if (membersRole === "Healer") { // Checks if the member roll is a Healer
        membersHealer += membersName += "<br>";
    };
    if (membersRole === "DPS") {  // Checks if the member roll is a DPS
        membersDps += membersName += "<br>";
    };

    document.getElementById("tank").innerHTML = membersTank;
    document.getElementById("heal").innerHTML = membersHealer;
    document.getElementById("dmg").innerHTML = membersDps;
};





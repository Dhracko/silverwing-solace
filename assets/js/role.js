var members = [  // Members details
    { 
    "level": 120,
    "location": [-34.2969541, 18.2479026],
    "name": "Lexari",
    "rank": 0,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [26.844829, 26.3840401],
    "name": "Mapen",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [-34.2969541, 18.2479026],
    "name": "Aysira",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 120,
    "location": [51.0968582, 5.9690268],
    "name": "Bentlee",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [50.4974444, 3.345157],
    "name": "Deriki",
    "rank": 2,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [39.0100679, 30.6885503],
    "name": "Refaralon",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [37.1458903, -23.3168015],
    "name": "Berzak",
    "rank": 2,
    "role": "Healer"
  },
  {
    "level": 39,
    "location": [40.1301544, -8.201855],
    "name": "Locketo",
    "rank": 2,
    "role": "DPS"
  },
  {
    "level": 120,
    "location": [46.139033, -2.4351197],
    "name": "Yirinae",
    "rank": 3,
    "role": "Tank"
  },
  {
    "level": 120,
    "location": [52.7602507, -6.8123259],
    "name": "Theomis",
    "rank": 6,
    "role": "Healer"
  }
];
    var membersTank = "";
    var membersHealer = "";
    var membersDps = "";


for (i = 0; i < members.length; i++) {      //create a loop throught the members list
    var membersRole = members[i].role;
    var membersName = members[i].name;

    
    if (membersRole === "Tank") {           // Checks if the member role is a tank
        membersTank += membersName += "<br>";
        
    } else if (membersRole === "Healer") {   // Checks if the member role is a Healer
        membersHealer += membersName += "<br>";

    } else {                                 // the member role is a DPS
        membersDps += membersName += "<br>";
    }

    document.getElementById("tank").innerHTML = membersTank;     //writes the list of tanks
    document.getElementById("heal").innerHTML = membersHealer;   //writes the list of healers
    document.getElementById("dmg").innerHTML = membersDps;       //writes the list of dps
}





var url = "assets/js/members.Json";

$(document).ready(function() { //loads the members when page finish loading
    $.getJSON(url, function(data) {
        var tank = "";
        member_role="";   
        member_roster += data[i].name;    
        member_role += data[i].role;    
        console.log(member_role)    
        $('#roster').append(member_roster);
    });
        
});
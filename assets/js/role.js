$(document).ready(function() { //loads the members when page finish loading
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
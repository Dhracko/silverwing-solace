var url = "assets/js/roster.json";

function numberOne() {
    $.getJSON(url, function(data) {
        var member_data = '';
            $.each(data, function(i, value) {
                if (i <= 9) {                  
                    console.log(i);
                member_data += '<tr>';
                member_data += '<td>'+value.name+'</td>';
                member_data += '<td>'+value.level+'</td>';
                member_data += '<td>'+value.role+'</td>';
                member_data += '<td>'+value.rank+'</td>';
                member_data += '</tr>';
                }; 
            }); 
        const newLocal = '#members_table';
        $(newLocal).append(member_data);
    });
};

document.getElementById("number-two").onclick = function() {
    $.getJSON(url, function(data) {
        var member_data = '';
        var i;
            $.each(data, function(i, value) {
                if (i > 9 && i <= 19) {
                    console.log(i);
                member_data += '<tr>';
                member_data += '<td>'+value.name+'</td>';
                member_data += '<td>'+value.level+'</td>';
                member_data += '<td>'+value.role+'</td>';
                member_data += '<td>'+value.rank+'</td>';
                member_data += '</tr>';
                }
            }); 
        const newLocal = '#members_table';
        $(newLocal).append(member_data);
    });
};


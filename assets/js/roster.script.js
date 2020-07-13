var url = "assets/js/roster.json";


$(document).ready(function() {
    $.getJSON(url, function(data) {
        var member_data = '';
            $.each(data, function(key, value){
                member_data += '<tr>';
                member_data += '<td>'+value.name+'</td>';
                member_data += '<td>'+value.level+'</td>';
                member_data += '<td>'+value.role+'</td>';
                member_data += '<td>'+value.rank+'</td>';
                member_data += '</tr>';
            }); 
        const newLocal = '#members_table';
        $(newLocal).append(member_data);
    });
});

const url = "assets/js/roster.json";

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

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";
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
        
        el.innerHTML += '<p>' + item[i].name + '</p>';
        // el.innerHTML += '<p>' + item[i].level + '</p>';
        console.log(item[i]);
        };
    });
}


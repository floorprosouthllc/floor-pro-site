/*::: Cookie Functions :::*/



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkAlertCookie() {
    var hasSeenAlert = getCookie("hasSeenAlert");
    //if an alert cookie has already been set to true, change it to false, otherwise set it to true
    if (hasSeenAlert == 'true') {
        //do not show page alert
        $('#status-alert').hide();
    } else {
        //show alert, but set hasSeen to true
        setCookie("hasSeenAlert", "true", 0);
    }
}
$(document).ready(function() {
    $('form').submit(function() {
        $('.container h1').text($('#input').val());
        var url = "";
        url += "http://api.openweathermap.org/data/2.5/weather?q="
        url += $('#input').val();
        url += "&&appid=a8311a816327358de7bf5604b9a95cb5";
        $.get(url, function(data) {
            var temp = 9 / 5 * (data.main.temp - 273) + 32;
            $('.container p').text("Temp: " + Math.round(temp) + "° F");
        }, 'json');
        return false;
    });
});
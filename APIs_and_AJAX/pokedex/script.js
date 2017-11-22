$(document).ready(function(){
    for (var i = 1; i <= 718; i++) {
        $('.thumbs').append(
            "<img id=" + i +
            " src='http://pokeapi.co/media/img/" + i +
            ".png'>");
    }
    $(document).on('click', 'img', function(){
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var url = "http://pokeapi.co/api/v2/pokemon/" + $(this).attr('id');
        $.get(proxyurl + url, function (data) {
            var html = "<div class='center'>";
            html += "<h1>#" + data.id + " - " + data.name + "</h1>";
            html += "<img src='http://pokeapi.co/media/img/" +
                    data.id + ".png'>";
            html += "</div><h3>Types</h3><ul>";
            for(var i in data.types) {
                html += "<li>";
                html += data.types[i].type.name;
                html += "</li>";
            }
            html += "</ul><h3>Height</h3>";
            html += "<p>" + data.height + "</p>";
            html += "</ul><h3>Weight</h3>";
            html += "<p>" + data.weight + "</p>";
            $('.feature').html(html);
        });
    });
});
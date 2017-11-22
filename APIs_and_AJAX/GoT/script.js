$(document).ready(function () {
    $('img').click(function () {
        var url = "https://api.got.show/api/houses/";
        url += $(this).attr("alt");
        $.get(url, function (result) {
            var html = "";
            html += "<table><tr><td>Name:</td><td>";
            html += result.data.name;
            html += "</td></tr><tr><td>Words:</td><td>";
            html += result.data.words;
            html += "</td></tr><tr><td>Region:</td><td>";
            html += result.data.region;
            html += "</td></tr><tr><td>Title:</td><td>";
            html += result.data.title;
            html += "</td></tr></table>";
            $('.data').html(html);
        }, 'json');
    });
});
$(document).ready(function(){
    $('button').click(function(){
        $('.values tbody').append(
            "<tr><td>" +
            $('#first-name').val() +
            "</td><td>" +
            $('#last-name').val() +
            "</td><td>" +
            $('#email').val() +
            "</td><td>" +
            $('#contact').val() +
            "</td></tr>"
        );
        
        $('#first-name').val("");
        $('#last-name').val("");
        $('#email').val("");
        $('#contact').val("");
    });
});
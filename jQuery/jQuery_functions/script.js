$(document).ready(function () {
    $("button.hide").click(function () {
        $("p.hide-show").hide();
    });
    $("button.show").click(function () {
        $("p.hide-show").show();
    });

    $("button.toggle").click(function () {
        $("p.toggle").toggle();
    });

    $("button.slide-down").click(function () {
        $("p.slide-up-down").slideDown();
    });
    $("button.slide-up").click(function () {
        $("p.slide-up-down").slideUp();
    });

    $("button.slide-toggle").click(function () {
        $("p.slide-toggle").slideToggle();
    });

    $("button.fade-out").click(function () {
        $("p.fade-in-out").fadeOut();
    });
    $("button.fade-in").click(function () {
        $("p.fade-in-out").fadeIn();
    });

    $("button.add-class").click(function () {
        $("p.add-remove-class").addClass("stylish");
    });
    $("button.remove-class").click(function () {
        $("p.add-remove-class").removeClass("stylish");
    });

    $("button.before").click(function () {
        $("p.before-after").before("<p>This is a new paragraph added before the original.</p>");
    });
    $("button.after").click(function () {
        $("p.before-after").after("<p>This is a new paragraph added after the original.</p>");
    });

    $("button.append").click(function () {
        $("p.append").append(" This text is appended to the original.");
    });

    $("button.html").click(function () {
        $("p.html").html("<p class='stylish'>This is new HTML content.</p>");
    });

    $("button.attr").click(function () {
        $(".attr a").attr("href", "https://www.google.com/");
    });

    $("button.val").click(function () {
        $("input.val").val("Text goes here.");
    });

    $("button.txt").click(function () {
        $("p.txt").text("This text is different.");
    });

    $("p.data").data("message", "This is data stored on the page.");
    $("button.data").click(function () {
        alert($("p.data").data("message"));
    });
});
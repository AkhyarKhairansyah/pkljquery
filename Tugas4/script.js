$(document).ready(function() {
    $(".navbar li").hover(function() {
        $(this).find("ul").stop(true, true).slideDown("normal");
    }, function() {
        $(this).find("ul").stop(true, true).slideUp("normal");
    });
});

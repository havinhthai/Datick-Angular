
$(window).bind('scroll', function() {
   parallax();
});

function parallax() {
    var topWindow = $(window).scrollTop();
    var topParallax = $("#parallax").offset().top;
    $("#parallax").css({"backgroundPosition":"50% " + Math.round((0 - topWindow) * 1.1) + "px"})
}
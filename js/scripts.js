$(document).on('ready', function() {
    $('#my-skills').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $('#my-skills').offset().top }, 1000);
    });
    $('#a2').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $('#section2').offset().top }, 1000);
    });
});
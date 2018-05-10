$(document).ready(function(){
    addScrolled();
});

$(window).scroll(function(){
    addScrolled();
});

function addScrolled() {
    var navHight = $('#main-nav').outerHeight();
    var actualPos = $(window).scrollTop();
    if(actualPos > navHight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}
//////

window.onscroll = function() {myFunction();};

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").className = "navbar-active";
    } else {
        document.getElementById("navbar").className = "navbar-inactive";
    }
}

////

$(document).ready(function() {

    // Parallax Function
    ////////////////////////////////////////////
    function parallax() {
        var scrolled = $(window).scrollTop();
        $(".front-page").css('top', (scrolled * 0.6) + "px");
    }
    // Parallax Function Execution
    ////////////////////////////////////////////
    $(window).scroll(function() {
        parallax();
    })
    //

    // Top Bar Click Animations
    ////////////////////////////////////////////
    $("#home-button").click(function() {
        $('html, body').animate({scrollTop: (0)}, 500);
    });

    $("#navbar-about").click(function() {
        $('html, body').animate({
            scrollTop: ($("#about-section").offset().top - 50)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#navbar-projects").click(function() {
        $('html, body').animate({
            scrollTop: ($("#project-section").offset().top - 50)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#navbar-blog").click(function() {
        $('html, body').animate({
            scrollTop: ($("#blog-section").offset().top - 50)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#navbar-resume").click(function() {
        $('html, body').animate({
            scrollTop: ($("#resume-section").offset().top - 50)
        }, 500);
    });
    //

});
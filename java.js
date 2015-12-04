$(document).ready(function() {

    // Parallax Function
    ////////////////////////////////////////////
    function parallax() {
        var scrolled = $(window).scrollTop();
        $("#front-page").css('top', (scrolled * 0.6) + "px");
    }
    // Top Bar Color and Hover Color Change
    ////////////////////////////////////////////
    function bar_color_change() {
        var scroll_pos = $(window).scrollTop();
        if (scroll_pos < ($("#my-skills-page").offset().top - 80)) {
            $("#top-bar").css("background-color", "#e6e6e6");
            $(".top-bar-text").removeClass("hover-transition-grey");
            $("#home-button").removeClass("hover-transition-grey");
            $(".top-bar-text").addClass("hover-transition-white");
            $("#home-button").addClass("hover-transition-white");
        } else if (scroll_pos >= ($("#my-skills-page").offset().top - 80) 
                   && 
                   scroll_pos < ($("#my-work-page").offset().top - 80)) {
            $("#top-bar").css("background-color", "#ffffff");
            $(".top-bar-text").removeClass("hover-transition-white");
            $("#home-button").removeClass("hover-transition-white");
            $(".top-bar-text").addClass("hover-transition-grey");
            $("#home-button").addClass("hover-transition-grey");
        } else if (scroll_pos >= ($("#my-work-page").offset().top - 80)
                   &&
                   scroll_pos < ($("#contact-me-page").offset().top - 83)) {
            $("#top-bar").css("background-color", "#e6e6e6");
            $(".top-bar-text").removeClass("hover-transition-grey");
            $("#home-button").removeClass("hover-transition-grey");
            $(".top-bar-text").addClass("hover-transition-white");
            $("#home-button").addClass("hover-transition-white");
        } else {
            $("#top-bar").css("background-color", "#ffffff");
            $("#top-bar-text").removeClass("hover-transition-white");
            $("#home-button").removeClass("hover-transition-white");
            $(".top-bar-text").addClass("hover-transition-grey");
            $("#home-button").addClass("hover-transition-grey");
        }
    }
    //

    // Parallax Function Execution
    ////////////////////////////////////////////
    $(window).scroll(function() {
        parallax();
        bar_color_change();    
    })
    //

    // Top Bar Click Animations
    ////////////////////////////////////////////
    $("#home-button").click(function() {
        $('html, body').animate({scrollTop: (0)}, 500);
    });

    $("#top-bar-short-bio").click(function() {
        $('html, body').animate({
            scrollTop: ($("#short-bio-page").offset().top - 79)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#top-bar-my-skills").click(function() {
        $('html, body').animate({
            scrollTop: ($("#my-skills-page").offset().top - 79)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#top-bar-my-work").click(function() {
        $('html, body').animate({
            scrollTop: ($("#my-work-page").offset().top - 79)
        }, 500);
    });
    ////////////////////////////////////////////
    $("#top-bar-contact-me").click(function() {
        $('html, body').animate({
            scrollTop: ($("#contact-me-page").offset().top - 79)
        }, 500);
    });
    //

});
/**
 * Created by joniweiss on 7/24/15.
 */
$(document).ready(function() {
    var thisYear = new Date().getFullYear();
    var timeNow  = new Date().getTime();

    var jcopyright = " Copyright 2002 - " + thisYear + ", Jitterbug Coffee Hop, Salt Lake City, Utah";

    $("#copyright").find("p").addClass("fa fa-copyright").append(jcopyright);

    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

    var amountScrolled = Math.round(screen.height * 0.5);
    // var amountScrolled = 300;

    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('slow');
        } else {
            $('a.back-to-top').fadeOut('slow');
        }
    });

    $('a.back-to-top, a.simple-back-to-top').click(function() {
        $('body').animate({
            scrollTop: 0
        }, 'fast');
        return false;
    });
});

var areWeOpen = function() {
    var open = "noValue";
    var timeNow = +moment().format('HHmm');
    var dayOfWeek  = +moment().format('e');

    // console.log(open + " - " + timeNow + " - " + dayOfWeek);
    if ((timeNow >= 0630) && (timeNow <= 2000) && ( dayOfWeek >= 1 && dayOfWeek <= 5)) {
        open = "We're open today until 8 pm.";
    //    console.log("if-weekdays" + open);
    } else if ((timeNow >= 0800) && (timeNow <= 2000) && ( dayOfWeek === 6)) {
        open = "We're open today until 8 pm.";
    //    console.log("if-saturday" + open);
    } else if ((timeNow >= 0900) && (timeNow <= 1800) && ( dayOfWeek === 0)) {
        open = "We're open today until 6 pm.";
     //   console.log("if-sunday" + open);
    } else if ( dayOfWeek >= 0 && dayOfWeek <= 4) {
        open = "Closed. We open tomorrow at 6:30am.";
    } else if ( dayOfWeek === 5) {
        open = "Closed. We open tomorrow at 8 am.";
    } else if ( dayOfWeek === 6) {
        open = "Closed. We open tomorrow at 9 am.";
    } else {
        open = "We are currently closed.";
    }
    document.getElementsByClassName("open-close")[0].innerHTML=open;
    return(open);
};

areWeOpen();

//console.log(areWeOpen());



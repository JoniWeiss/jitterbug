/**
 * Created by joniweiss on 8/23/15.
 */
$(document).ready(function() {
    //*******************************
    // create the back to top button
    //*******************************
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

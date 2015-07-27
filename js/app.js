/**
 * Created by joniweiss on 7/24/15.
 */
$(document).ready(function() {
    var thisYear = new Date().getFullYear();
    var timeNow  = new Date().getTime();

    var jcopyright = " Copyright 2009 - " + thisYear + ", Jitterbug Coffee Hop, Salt Lake City, Utah";

    $("#copyright").find("p").addClass("fa fa-copyright").append(jcopyright);

    $(window).resize(function(){
        if ($(window).width() < 767){
            $("header").find("img").addClass("hidden");
        }
    });
});
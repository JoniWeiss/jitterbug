/**
 * Created by joniweiss on 7/24/15.
 */
$(document).ready(function() {
    var thisYear = new Date().getFullYear();
    var timeNow  = new Date().getTime();

    var jcopyright = " Copyright 2002 - " + thisYear + ", Jitterbug Coffee Hop, Salt Lake City, Utah";

    $("#copyright").find("p").addClass("fa fa-copyright").append(jcopyright);

});

var app=angular.module('jitterbug-app',['ngRoute']);


app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'templates/home.html'
          })
          .when('/beveragesMenu',{
                templateUrl: 'templates/beverages.html'
          })
          .when('/foodMenu',{
                templateUrl: 'templates/food.html'
          })
          .when('/mapToUs',{
                templateUrl: 'templates/map.html'
          })
          .when('/aboutUs',{
            //   <a href="tel:801-884-7450"></a>
                templateUrl: 'templates/about.html'
          })
});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});

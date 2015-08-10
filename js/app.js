/**
 * Created by joniweiss on 7/24/15.
 */
var app=angular.module('jitterbug-app', [
    'ngRoute',
    'menuControllers'
]);


app.config(function($routeProvider){
      $routeProvider
          .when('/',{
                templateUrl: 'templates/home.html'
          })
          .when('/beveragesMenu',{
                templateUrl: 'templates/beverages.html',
                controller: 'BeveragesCtrl'
          })
          .when('/foodMenu',{
                templateUrl: 'templates/food.html',
                controller: 'FoodCtrl'
          })
          .when('/mapToUs',{
                templateUrl: 'templates/map.html'
          })
          .when('/aboutUs',{
                templateUrl: 'templates/about.html'
          })
});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});

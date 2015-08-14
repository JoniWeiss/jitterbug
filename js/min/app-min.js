/**
 * Created by joniweiss on 7/24/15.
 */
var app = angular.module('jitterbug-app', [
    'mm.foundation',
    'ngRoute',
    'menuControllers'
]);

app.filter('myFilter', function() {

  return function(input) {
    var newInput = [];
    angular.forEach(input, function(item) {
      console.log(item);
      if (item !== "") newInput.push(item);
    });
    return newInput;
  };
});

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
          });
});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});



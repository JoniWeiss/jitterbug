var appControllers = angular.module('appControllers',[]);

appControllers.controller('BeveragesCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('js/beverages.json').success(function(data) {
      $scope.beverages = data;
      $scope.oneAtATime = true;
    });
  }
]);

appControllers.controller('FoodCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('js/foodmenu.json').success(function(data) {
      $scope.foodmenu = data;
    });
  }
]);

appControllers.controller('appController', ['$scope', 
  function($scope) {
    $scope.message="Hello world";
  }
]);
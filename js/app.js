/**
 * Created by joniweiss on 7/24/15.
 */
var app = angular.module("jitterBug", [
    "ui.router",
    "smoothScroll"
    ]);

app.config(
    [         '$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
      // // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "templates/home.html"
        })
        .state('beveragesMenu', {
            url: "/beveragesMenu",
            templateUrl: 'templates/beverages.html',
            controller: 'BeveragesCtrl'
        })
        .state('foodMenu', {
            url: "/foodMenu",
            templateUrl: 'templates/food.html',
            controller: 'FoodCtrl'
        })
        .state('mapToUs', {
            url: "/maptoUs",
            templateUrl: "templates/map.html",
            controller: 'DefaultCtrl'
        })
        .state('aboutUs', {
            url: "/aboutUs",
            templateUrl: "templates/about.html",
            controller: 'DefaultCtrl'
        });
      }

    ]
);

app.controller('DefaultCtrl', ['$scope', 'smoothScroll',
  function($scope, smoothScroll) {
    var element = document.getElementById('scrollTop');
    var options = {
        duration: 700,
        easing: 'easeInQuad',
    };
    smoothScroll(element, options);  }
]);

app.controller('BeveragesCtrl', ['$scope', '$http', 'smoothScroll',
  function($scope, $http, smoothScroll) {
    $http.get('js/beverages.json').success(function(data) {
      $scope.beverages = data;
      $scope.oneAtATime = true;
    });
    var element = document.getElementById('scrollTop');
    var options = {
        duration: 700,
        easing: 'easeInQuad',
    };
    smoothScroll(element, options);
  }
]);

app.controller('FoodCtrl', ['$scope', '$http', 'smoothScroll',
  function($scope, $http, smoothScroll) {
    $http.get('js/foodmenu.json').success(function(data) {
      $scope.foodmenu = data;
    });
    var element = document.getElementById('scrollTop');
    var options = {
        duration: 700,
        easing: 'easeInQuad',
    };
    smoothScroll(element, options);  }
]);

app.controller('MapCtrl', ['$scope', 'smoothScroll',
  function($scope, smoothScroll) {
    var element = document.getElementById('scrollTop');
    var options = {
        duration: 700,
        easing: 'easeInQuad',
    };
    smoothScroll(element, options);  }
]);

app.controller('AboutCtrl', ['$scope', 'smoothScroll',
  function($scope, smoothScroll) {
    var element = document.getElementById('scrollTop');
    var options = {
        duration: 700,
        easing: 'easeInQuad',
    };
    smoothScroll(element, options);  }
]);

app.controller('MainCtrl', ['$scope',
    function ($scope) {
      $scope.message = "Welcome to JitterBug";
    }]);

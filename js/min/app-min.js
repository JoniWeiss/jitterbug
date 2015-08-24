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

app.directive('copyrightString', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        template: '<span class="fa fa-copyright"></span>',
        link:  function (scope, element) {
            var thisYear = new Date().getFullYear();
            var jcopyright = " Copyright 2002 - " + thisYear + ", Jitterbug Coffee Hop, Salt Lake City, Utah";
            element.text(jcopyright);
        }
    };
});

app.directive('openClosed', function($parse, $filter) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        template: '<span class="open-close"></span>',
        link: function (scope, element) {
            var open = '';
            var currentDate = new Date();
            var timeNow =  $filter('date')(currentDate, 'HHmm');
            var dayOfWeek =  $filter('date')(currentDate, 'EEE');
            switch (dayOfWeek) {
                case 'Mon':
                case 'Tue':
                case 'Wed':
                case 'Thu':
                    if (( timeNow >= 0630) && (timeNow <= 2000)) {
                        open = "We're open today until 8 pm.";
                    } else {
                        open = "Closed. We open tomorrow at 6:30am.";
                    }
                    break;
                case 'Fri':
                     if (( timeNow >= 0630) && (timeNow <= 2000)) {
                        open = "We're open today until 8 pm.";
                    } else {
                        open = "Closed. We open tomorrow at 8 am.";
                    }
                    break;
                case 'Sat':
                    if ((timeNow >= 0800) && (timeNow <= 2000)) {
                        open = "We're open today until 8 pm.";
                    } else {
                        open = "Closed. We open tomorrow at 9 am.";
                    }
                    break;
                case 'Sun':
                    if ((timeNow >= 0900) && (timeNow <= 1800)) {
                        open = "We're open today until 6 pm.";
                    } else {
                        open = "Closed. We open tomorrow at 6:30am.";
                    }
                    break;
                    default:
                    open = "We are currently closed.";
                    break;
            }
            
            
            element.text(open);
        }
};
});

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



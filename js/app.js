/**
 * Created by joniweiss on 7/24/15.
 */
var app = angular.module("jitterBug", [
    "ui.router",
    "smoothScroll",
    "ngSanitize",
    "com.2fdevs.videogular",
    "com.2fdevs.videogular.plugins.controls",
    "com.2fdevs.videogular.plugins.overlayplay",
    "com.2fdevs.videogular.plugins.poster"
    ]);

app.config(
    [         '$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
      // // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "templates/home.html",
            controller: 'HomeCtrl'
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

app.directive('backToTop', [function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<a href="#" class="back-to-top">Back to Top</a>',
        link: function(scope, element) {

            var amountScrolled = Math.round(screen.height * 0.5);

            scope.button = element.find('button');

            scope.button.on('click', function() {
                document.body.animate({ scrollTop: 0 }, 'fast');
                element.removeClass('show');
            });

            window.addEventListener('scroll', function() {
                if ($(window).scrollTop() > amountScrolled) {
                     $('a.back-to-top').fadeIn('slow');
                 } else {
                     $('a.back-to-top').fadeOut('slow');
                 }
            });
        }
    };

}]);


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
            var status = '';
            var openMsg = 'Shop & Drive-Thru open today until ';
            var closedMsg = 'Closed. Shop and Drive-Thru open tomorrow at ';
            var currentDate = new Date();
            var timeNow =  $filter('date')(currentDate, 'HHmm');
            var dayOfWeek =  $filter('date')(currentDate, 'EEE');
            switch (dayOfWeek) {
                case 'Mon':
                case 'Tue':
                case 'Wed':
                case 'Thu':
                    if (( timeNow >= 0630) && (timeNow <= 2000)) {
                        status = openMsg + "8 pm.";
                    } else {
                        status = closedMsg + "6:30am.";
                    }
                    break;
                case 'Fri':
                     if (( timeNow >= 0630) && (timeNow <= 2000)) {
                         status = openMsg + "8 pm.";
                    } else {
                         status = closedMsg + "8 am.";
                    }
                    break;
                case 'Sat':
                    if ((timeNow >= 0800) && (timeNow <= 2000)) {
                        status = openMsg +  "9 pm.";
                    } else {
                        status = closedMsg +  "9 am.";
                    }
                    break;
                case 'Sun':
                    if ((timeNow >= 0900) && (timeNow <= 1800)) {
                        status = openMsg + "6 pm.";
                    } else {
                        status = closedMsg +  "6:30am.";
                    }
                    break;
                    default:
                        status = "We are currently closed.";
                    break;
            }


            element.text(status);
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

app.controller('HomeCtrl', ['$scope', 'smoothScroll', '$sce', function ($scope, smoothScroll, $sce) {
    //var prePath = "//joniwebgirl.com/jitterbug.com/assets"; // production
    var prePath = "assets"; // dev/test - github doesn't allow large file sizes

    this.config = {
            sources: [
                {src: $sce.trustAsResourceUrl(prePath + "/jitterbug-commercial-2015-08.mp4"), type: "video/mp4"},
                {src: $sce.trustAsResourceUrl(prePath + "/jitterbug-commercial-2015-08.webm"), type: "video/webm"},
                {src: $sce.trustAsResourceUrl(prePath + "/jitterbug-commercial-2015-08.ogg"), type: "video/ogg"}
            ],
            tracks: [
                {
                    src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                    kind: "subtitles",
                    srclang: "en",
                    label: "English",
                    default: ""
                }
            ],
            theme: "css/videogular.min.css",
            plugins: {
                poster: "assets/jitterbug-commercial-2015-08.png"
            }
        }
    }
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

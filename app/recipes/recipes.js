'use strict';

angular.module('myApp.recipes', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes.html',
    controller: 'recipeCtrl'
  });
}])

.controller('recipeCtrl', ['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.location = $location;
  // $scope.currentPath = $locationProvider.path();
        // var path = $scope.path;
        // return path;
  // var path = $location.path();
  // $scope.isActive = function(viewLocation) {
    console.log($location.path());
    // return path;
  //   };
// ));
}]);
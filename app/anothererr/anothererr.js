'use strict';

angular.module('myApp.anothererr', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/anothererr', {
    templateUrl: 'anothererr/anothererr.html',
    controller: 'AnothererrCtrl'
  });
}])

.controller('AnothererrCtrl', [function() {

}]);
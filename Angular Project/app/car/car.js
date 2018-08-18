'use strict';

angular.module('myApp.car', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/car', {
    templateUrl: 'car/car.html',
    controller: 'CarCtrl'
  });
}])

.controller('CarCtrl', function($scope, $http) {
    $http.get("http://localhost:8081")
        .then(function(response) {
            $scope.carss = response.data;

        });

});
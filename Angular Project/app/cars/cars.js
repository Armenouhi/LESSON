'use strict';

angular.module('myApp.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider

      .when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'CarsCtrl'
  });
}])

.controller('CarsCtrl', function($scope, $http, $routeParams) {
    $http.get("http://localhost:8081")
        .then(function(response) {
            $scope.carss = response.data;

        });
    $scope.showHide = function (id) {

        $scope.carDetailId = id;

    };


});
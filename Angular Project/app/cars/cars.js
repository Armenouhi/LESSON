'use strict';

angular.module('myApp.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'CarsCtrl'
  });
}])

.controller('CarsCtrl', function($scope, $http) {
    $http.get("cars.json")
        .then(function(response) {
            $scope.carss = response.data;
            // console.log($scope.carss);

            $scope.carsImg = {
                "width" : "220px",
                "height" : "100px",
                "margin-top" : "13px"
            };
        });
});
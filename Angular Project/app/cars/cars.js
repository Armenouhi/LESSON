'use strict';

angular.module('myApp.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'CarsCtrl'
  });
}])

.controller('CarsCtrl', function($scope, $http) {
    $http.get("http://localhost:8081")
        .then(function(response) {
            $scope.carss = response.data;

            $scope.carsImg = {
                "width" : "220px",
                "height" : "100px",
                "margin-top" : "13px"
            };

            $scope.IsVisible = true;

            $scope.ShowHide = function(){
                $scope.IsVisible = $scope.IsVisible = false;
            }
        });
});
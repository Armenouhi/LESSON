'use strict';

angular.module('myApp.cars', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider

      .when('/cars', {
    templateUrl: 'cars/cars.html',
    controller: 'CarsCtrl'
  })
      .otherwise({
        redirectTo: '/car'
    });
}])

.controller('CarsCtrl', function($scope, $http) {
    $http.get("http://localhost:8081")
        .then(function(response) {
            $scope.carss = response.data;


             $scope.carOnPage = 5;
            $scope.startFrom = 0;
            $scope.CountPageDivs = [];
            for(var i=1; i <= Math.round($scope.carss.data.cars.length/5); i++) {
                $scope.CountPageDivs.push(i);
            }
            $scope.PaginationFunction = function(event){
                $scope.turId = event.target.id;
                $scope.startFrom= ($scope.turId-1)*$scope.carOnPage;
            };


        })




});
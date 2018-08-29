'use strict';

angular.module('myApp.car', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/car', {
    templateUrl: 'car/car.html',
    controller: 'CarCtrl'
  });
}])

.controller('CarCtrl', function($scope, $http, $location) {
    $http.get("http://localhost:8081")
        .then(function(response) {
            $scope.carss = response.data;

            $scope.url = document.URL;
            // console.log($scope.url);

            $scope.id = $scope.url.substring($scope.url.lastIndexOf('?')+1);
            console.log($scope.id);

        });

});
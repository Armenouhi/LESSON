'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $http) {

    $scope.funcSave = function()
    {
            if($scope.myForm.$valid) {
                alert("Form is Valid..!!");
            }
            else
            {
                alert("Form is not Valid..!!");
                return false;
            }

    }


    $http.get("http://localhost:1313")
        .then(function(response) {
            $scope.carss = response.data;

        });


    $scope.addCars = function(){
        $scope.dataCars = [
            {
                cars_name : $scope.cars_name,
                cars_price : $scope.cars_price,
                cars_year : $scope.cars_year,
                cars_transmission : $scope.cars_transmission,
                cars_useWay : $scope.cars_useWay
            }
        ];
        console.log( $scope.dataCars);
    }


})


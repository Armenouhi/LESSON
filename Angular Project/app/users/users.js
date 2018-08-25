'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', ['$scope', function($scope) {
    $scope.addUsers = function(){
        $scope.dataUsers = [
            {
                email : $scope.email,
                password : $scope.password
            }
        ];
        console.log( $scope.dataUsers);
    }
}]);
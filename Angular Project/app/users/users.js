'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', [function($scope) {
    $scope.submit= function(data){
        data = [{
            user: JSON.stringify({
                email: $scope.email,
                pswd: $scope.pswd
            })
        }];
        console.log(data)

    }
}]);
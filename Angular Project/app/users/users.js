'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', [function() {
    $scope.submit= function(){
        var data = $.param({
            user: JSON.stringify({
                email : $scope.email,
                pswd : $scope.pswd
            })
        });
        console.log(data)

    }
}]);
'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.addUsers = function(){

        var url = "http://127.0.0.1:7778/api/car";

        var dataUsers =
            {
                email : $scope.email,
                password : $scope.password
            };

        $http.post(url, dataUsers)
            .then(function(httpRequest) {
                //console.log(httpRequest);
            });
    };
}]);
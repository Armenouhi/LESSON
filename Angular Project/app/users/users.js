'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get("http://127.0.0.1:7778/api/user_list")
        .then(function(response) {
            $scope.users = response.data;
        });

    $scope.addUsers = function(){

        var url = "http://127.0.0.1:7778/userData";

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


    $scope.editUser = function (id) {
        console.log(id);

        var url = "http://127.0.0.1:7778/update/userData";

        var dataId =
            {
                id: id
            };

        $http.post(url,dataId)
            .then(function(httpRequest) {
                //console.log(httpRequest);
            });
    };

    $scope.deleteUser = function (id) {
        console.log(id);


        var url = "http://127.0.0.1:7778/delete/userData";

        var dataId =
            {
                id: id
            };

        $http.post(url,dataId)
            .then(function(httpRequest) {
                //console.log(httpRequest);
            });
    };
}]);
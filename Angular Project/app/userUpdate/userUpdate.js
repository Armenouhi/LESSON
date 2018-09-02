'use strict';

angular.module('myApp.userUpdate', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userUpdate', {
    templateUrl: 'userUpdate/userUpdate.html',
    controller: 'UserUpdateCtrl'
  });
}])

.controller('UserUpdateCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.updateUsers = function(){

        var urlDelete = "http://127.0.0.1:7778/update/userData";

        var dataUpdate =
            {
                email : $scope.email,
                password : $scope.password
            };

        $http.post(urlDelete, dataUpdate)
            .then(function(httpRequest) {
                console.log(httpRequest.status + "OK");
            });
    };

}]);
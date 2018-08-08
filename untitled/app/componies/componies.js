'use strict';

angular.module('myApp.componies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/componies', {
    templateUrl: 'componies/componies.html',

    controller: 'ComponiesCtrl'
  });
}])


.controller('ComponiesCtrl', function($scope, $http) {
    $http.get("http://localhost:7777")
        .then(function(response) {

            console.log(response.data);

        });

});
'use strict';

angular.module('myApp.restaurants', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurants', {
    templateUrl: 'restaurants/restaurants.html',

    controller: 'RestaurantsCtrl'
  });
}])


.controller('RestaurantsCtrl', function($scope, $http) {

    $http.get("http://localhost:7777")
        .then(function(response) {

            console.log(response.data);

        });

});
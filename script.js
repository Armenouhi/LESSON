  'use strict';

var scotchApp = angular.module('testApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the products page
        .when('/products', {
            templateUrl : 'products.html',

        })

        // route for the restorans page
        .when('/restorans', {
            templateUrl : 'restorans.html',

        })

    // route for the componies page
        .when('/companies', {
        templateUrl : 'companies.html',

         });
});

// create the controller and inject Angular's $scope
scotchApp.controller('ProductCntl', function($scope) {

});

scotchApp.controller('RestoranCtrl', function($scope) {

});

scotchApp.controller('ComponyCtrl', function($scope) {

});

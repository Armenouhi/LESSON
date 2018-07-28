/*  'use strict';

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.html",
        })
        .when("/products", {
            templateUrl : "products/products.html",
            controller : "ProductCtrl"
        })
        .when("/restorans", {
            templateUrl : "restorans/restorans.html",
            controller : "RestoranCtrl"
        })
        .when("/componies", {
            templateUrl : "componies/componies.html",
            controller : "ComponyCtrl"
        });
});
app.controller("ProductCtrl", function ($scope) {

});
app.controller("RestoranCtrl", function ($scope) {

});
app.controller("ComponyCtrl", function ($scope) {

});     */


var scotchApp = angular.module('testApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the about page
        .when('/products', {
            templateUrl : 'products.html',

        })

        // route for the contact page
        .when('/restorans', {
            templateUrl : 'restorans.html',

        })

    // route for the contact page
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

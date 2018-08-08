'use strict';

angular.module('myApp.errorPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/errorPage', {
            templateUrl: 'errorPage/errorPage.html',

            controller: 'ErrorPageCtrl'
        });
    }])

    .controller('ErrorPageCtrl', function($scope, $http) {

    });
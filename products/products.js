(function() {
    "use strict";

    var app = angular.module("testApp", []).factory("PagerService", PagerService);
    app.filter('isArray', function() {
        return function(x) {
            var ok;
            for (var i = 0; i < x.length; i++) {

                if (Array.isArray(x)) {
                    ok =  x[0];
                } else {
                    ok =  x
                }

            }
            return ok;
        };
    });

    app.filter('isObj', function() {
        return function(data) {


            var ok;

            if (typeof data == "object") {
                for(var value in data) {
                    ok =  data[value];
                }

            } else {
                ok =  data;

            }

            return ok;
        };
    });

    //controllers
    app.controller("ProductCntl", [
        "$scope",
        "$http",
        "PagerService",
        function($scope, $http, PagerService) {
            var vm = this;

            $scope.showHide = function (id) {

                $scope.productDetailId = id;

            };

            $scope.firstProductImg = {
                "width" : "250px",
                "height" : "200px"
            };

            $scope.secondProductImg = {
                "width" : "500px",
                "height" : "500px"
            };

            $scope.performSearch = function() {

                $http
                    .get("../index.json")
                    .then(function(response) {
                        $scope.myFavorite = response.data;
                        vm.itemsToDisplay =  $scope.myFavorite.data.products; // array of items to be paged

                        console.log($scope.myFavorite.data.restorans);

                        vm.pager = {};
                        vm.setPage = setPage;

                        initController();

                        function initController() {
                            // initialize to page 1
                            vm.setPage(1);
                        }

                        function setPage(page) {
                            if (page < 1 || page > vm.pager.totalPages) {
                                return;
                            }
                            // get pager object from service
                            vm.pager = PagerService.GetPager(vm.itemsToDisplay.length, page /*, vm.itemsToDisplay1.length, page*/);

                            // get current page of items
                            vm.products = vm.itemsToDisplay.slice(
                                vm.pager.startIndex,
                                vm.pager.endIndex + 1
                            );
                        }
                    });
            };
        }


    ]);


    function PagerService() {
        // service definition
        var service = {};

        service.GetPager = GetPager;

        return service;

        // service implementation
        function GetPager(totalItems, currentPage, pageSize) {
            // default to first page
            currentPage = currentPage || 1;

            // default page size is 10
            pageSize = pageSize || 3;

            // calculate total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            } else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    };


})();


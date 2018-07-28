var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("../index.json")
        .then(function(response) {
            $scope.myFavorite = response.data;
        });
    $scope.myImg = {
        "width" : "300px",
        "height" : "300px"
    }
    $scope.showHide = function (id) {

       /* var product_class = document.getElementsByClassName("hide");
        for (let i = 0; i < product_class.length; i++) {

            var obj = document.getElementsByClassName("hide")[i].getAttribute("id");
            console.log(obj);

                document.getElementById('' + obj).style.display = "none";

        }   */

        $scope.productDetailId = id;

    }
});
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


// app.filter('newFilter', function() {
//     return function(data) {
//
//         console.log(typeof data)
//
//         var ok;
//
//         if (typeof data == "object") {
//             for(var value in data) {
//                 ok =  data[value];
//                 console.log(ok)
//
//             }
//
//         } else {
//             ok =  data;
//             console.log(ok)
//         }
//
//         return ok;
//     };
// });
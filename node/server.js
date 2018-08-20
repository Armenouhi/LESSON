// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(7777);



//2.
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })




//3.

var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage


app.get('/', function (req, res) {
   // console.log("Got a GET request for the homepage");
   // res.send('Hello GET');


res.setHeader('Access-Control-Allow-Origin', '*');
	

     // Request methods you wish to allow
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

     // Request headers you wish to allow
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

     // Set to true if you need the website to include cookies in the requests sent
     // to the API (e.g. in case you use sessions)
     res.setHeader('Access-Control-Allow-Credentials', true);
	
    var responseBody = {"data":{"cars":[{"_id":1,
        "year":2001,
    "make":"INFINITI",
    "model":"QX4",
    "image":"http://www.trbimg.com/img-531f6920/turbine/chi-top-10-dream-cars-101210",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":13000,
    "price":264000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {    "_id":2,
      "year":2007,
    "make":"INTERNATIONAL",
    "model":"4700LPX",
    "image":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F161217142430-2017-cars-ferrari-1.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":14280,
    "price":720000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {     "_id":3,
      "year":1993,
    "make":"ISUZU",
    "model":"FVR",
    "image":"https://www.beaulieu.co.uk/wp/wp-content/uploads/2017/11/desktop-attraction_On-Screen-Cars-Jaguar-XKR_w870px_h475px.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":10690,
    "price":169000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {     "_id":4,
      "year":1997,
    "make":"JAGUAR",
    "model":"XJ8",
    "image":"https://cs3.gtaall.com/attachments/2015-08/original/97eea81b149b00bf959e8f4797b6788a32656a59/5577-287486-2015-08-17-203516.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":13280,
    "price":184000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {     "_id":5,
      "year":2000,
    "make":"JEEP",
    "model":"WRANGLER",
    "image":"https://res.cloudinary.com/jpress/image/fetch/c_fill,f_auto,h_596,q_auto:eco,w_900/https://inews.co.uk/wp-content/uploads/2018/03/Ford-Mustang-Bullitt.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":15460,
    "price":131000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},



    ],
            "selects": [
                {
                    "li1":"Condition",
                    "li2":"New Car (4,500)",
                    "li3":"Used Cars (6,540)",
                    "li4":"Car Rental(9,960)",
                },
                {
                    "li1":"Body",
                    "li2":"Sedan",
                    "li3":"SUV",
                    "li4":"Truck",
                },
                {
                    "li1":"Make",
                    "li2":"Ford",
                    "li3":"Huyndai",
                    "li4":"Nissan",
                },
                {
                    "li1":"Mode",
                    "li2":"Versa",
                    "li3":"Cruze",
                    "li4":"Malibu",
                },
                {
                    "li1":"Year",
                    "li2":"2015",
                    "li3":"2016",
                    "li4":"2017",
                },
                {

                    "li1":"Transition",
                    "li2":"Automatic",
                    "li3":"Manual",
                    "li4":"Semi-automatic",
                }
            ],


            "filter": [
                {
                    "li1":"Other",
                    "li2":"Best Seller",
                    "li3":"Featured",
                    "li4":"Latest",
                }
            ],

            "show": [
                {
                    "li1":6,
                    "li2":12,
                    "li3":24,
                    "li4":"All",
                }
            ]
        }};


    // console.log(JSON.stringify(responseBody));
    res.write(JSON.stringify(responseBody));

    res.send();
    res.end();
})


var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
});
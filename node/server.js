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
	
    var responseBody = [{"year":2001,
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

  {"year":2001,
    "make":"INTERNATIONAL",
    "model":"4700LPX",
    "image":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1024,c_fill,g_auto,h_576,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F161217142430-2017-cars-ferrari-1.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":13000,
    "price":720000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {"year":2001,
    "make":"ISUZU",
    "model":"FVR",
    "image":"https://www.beaulieu.co.uk/wp/wp-content/uploads/2017/11/desktop-attraction_On-Screen-Cars-Jaguar-XKR_w870px_h475px.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":13000,
    "price":169000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {"year":2001,
    "make":"JAGUAR",
    "model":"XJ8",
    "image":"https://cs3.gtaall.com/attachments/2015-08/original/97eea81b149b00bf959e8f4797b6788a32656a59/5577-287486-2015-08-17-203516.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":13000,
    "price":184000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"},

  {"year":2001,
    "make":"JEEP",
    "model":"WRANGLER",
    "image":"https://res.cloudinary.com/jpress/image/fetch/c_fill,f_auto,h_596,q_auto:eco,w_900/https://inews.co.uk/wp-content/uploads/2018/03/Ford-Mustang-Bullitt.jpg",
    "condition":"use car",
    "body":"compact",
    "transmission":"Automatic",
    "useWay":13000,
    "price":131000,
    "stars":"cars/carsImage/stars.png",
    "description":"Nunc facilisis sagittis ullamcorper. Proin lectulputate"}];
    // console.log(JSON.stringify(responseBody));
    res.write(JSON.stringify(responseBody));

    res.send();
    res.end();
})


var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
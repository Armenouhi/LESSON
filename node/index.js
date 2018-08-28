// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(7777);


// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
//
// var server = app.listen(7777, function () {
//    var host = server.address().address
//    var port = server.address().port
//
//    console.log("Example app listening at http://%s:%s", host, port)
// })



var express = require('express');
var bodyParser= require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// This responds with "Hello World" on the homepage
app.post('/api/car', function (req, res) {
    // console.log("Got a GET request for the homepage");

    console.log(req.body);
    res.end();
})

var server = app.listen(7778, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
});



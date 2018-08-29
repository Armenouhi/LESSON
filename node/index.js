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

var MongoClient = require('mongodb').MongoClient
var dbUrl = 'mongodb://localhost:27017/dbCars';
var dbName = 'dbCars';
var collName = 'users';

var ObjectID = require("bson-objectid");
var S = require('string');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// This responds with "Hello World" on the homepage
app.post('/userData', function (req, res) {
    // console.log("Got a GET request for the homepage");

    const req_body = req.body;
    console.log(req_body);
    res.end();

    MongoClient.connect(dbUrl, function (err, client) {
        if (err) throw err

        var db = client.db(dbName)
        var myobj = req_body;
        db.collection(collName).insertOne(myobj, function(err, res) {
            if (err) throw err
            console.log("1 document inserted");
            client.close();
        })
    });
})


app.post('/update/userData', function (req, res) {

    const req_body = req.body;
    // console.log(req_body);

    const req_body_id = req.body.id;

    res.end();

    MongoClient.connect("mongodb://localhost:27017/dbCars", function(err, client) {
        if (err) throw err;
        var db = client.db(dbName)

        var myId = req_body_id;
        var myObj = req_body

        // console.log(myObj);
        // console.log(myObj.email);
        // console.log(myObj.password);

        var objUpd = {
            email:  myObj.email,
            password: myObj.password
        }


        db.collection(collName).updateOne({'_id':ObjectID(myId)},{$set: {"email": S(objUpd.email)} }, function(err, obj) {
            if (err) throw err;
            console.log(objUpd.email);
            console.log("1 document updated");
            client.close();
        });

    });
})


app.post('/delete/userData', function (req, res) {

    const req_body_id = req.body.id;
    console.log(req_body_id)

    res.end();

    MongoClient.connect("mongodb://localhost:27017/dbCars", function(err, client) {
        if (err) throw err;
        var db = client.db(dbName)

        var myId = req_body_id;

        db.collection(collName).deleteOne({'_id':ObjectID(myId)}, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            client.close();
        });

    });
})

app.get('/api/user_list', function (req, res) {

    MongoClient.connect(dbUrl, function (err, client) {
        if (err) throw err

        var db = client.db(dbName)
        db.collection(collName).find().toArray(function (err, userData) {
            if (err) throw err
            res.send(userData);
        })
    });
})

var server = app.listen(7778, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
});



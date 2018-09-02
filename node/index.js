const express = require('express');
const bodyParser= require('body-parser');
const app = express();

const MongoClient = require('mongodb').MongoClient



 const url = 'mongodb://localhost:27017/dbCars';
const dbName = 'dbCars';
const collName = 'users';

const ObjectID = require("bson-objectid");


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

    MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
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

    res.end();

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        var db = client.db(dbName)
        db.collection(collName).updateOne({'_id':ObjectID(req.body.id)}, { $set : {email : req.body.email, password: req.body.password}}, function(err, obj) {
            if (err) throw err;
             console.log(req.body.email + " " + req.body.password);
             console.log("1 document updated");
            client.close();
        });

    });
})


app.post('/delete/userData', function (req, res) {

    const req_body_id = req.body.id;
    console.log(req_body_id)

    res.end();

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
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

    MongoClient.connect(url,  { useNewUrlParser: true },function (err, client) {
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



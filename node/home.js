// var http = require('http');
//
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World!');
// }).listen(4444);



// 2.
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//    res.send('Hello World');
// })
//
// var server = app.listen(1313, function () {
//    var host = server.address().address
//    var port = server.address().port
//
//    console.log("Example app listening at http://%s:%s", host, port)
// })


const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());
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

    res.send();
    res.end();

})



app.post('/file_upload', function(req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');

    let sampleFile = req.files.file_name;

// Use the mv() method to place the file somewhere on your server
    sampleFile.mv('../Angular Project/app/upload_files/'+sampleFile.name, function(err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

var server = app.listen(1313, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});
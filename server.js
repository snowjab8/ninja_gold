// Require the Express Module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

// Angular app 
app.use(express.static(__dirname + '/ninja/dist' ));

// Mongoose config require
require('./server/config/mongoose.js');
// Require route for server.js
var route = require('./server/config/routes.js');
// Invoke route
route(app);

// Define Schema
// var goldSchema = new mongoose.Schema({
//     gold: Number
// })
// // Setting this schema
// mongoose.model('Gold', goldSchema);
// var Gold = mongoose.model('Gold');
// 



app.listen(8000, function() {
    console.log('Listening to port 8000');
})
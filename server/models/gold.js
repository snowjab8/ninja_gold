var mongoose = require('mongoose');

// Define Schema
var goldSchema = new mongoose.Schema({
    gold: Number
})

var Gold = mongoose.model('Gold', goldSchema);
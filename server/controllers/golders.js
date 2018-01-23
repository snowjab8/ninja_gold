var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');
var bodyParser = require('body-parser')
module.exports = {
    getGold: function(request, response) {
        Gold.findOne({}, function(err, result) {
            if (err) {
            } else {
                console.log('Get gold done');
                response.json(result);
            }
        })
    },
    getFarm: function(request, response) {
        // const random_number = Math.floor(Math.random() * 4) + 2  
        console.log(request.body.num); 
        Gold.updateOne({}, {$inc: {gold: request.body.num}}, function(err, result) {
            if (err) {
                console.log('Farm update went wrong');
            } else {
                Gold.findOne({}, function(err, gold) {
                    if (err) {
                        console.log('Grabbing gold did not go well at getFarm');
                    } else {
                        console.log('Grabbing gold successful from db');
                        console.log(gold);
                        response.json(gold);
                    }
                })
                console.log('Farm update successful!');
            }
        })
    },
    getCave: function(request, response) {
        // const random_number = Math.floor(Math.random() * 6) + 5 
        // console.log(random_number); 
        Gold.updateOne({}, {$inc: {gold: request.body.num}}, function(err, result) {
            if (err) {
                console.log('Cave update went wrong');
            } else {
                console.log('hello from gold/farm else')
                Gold.findOne({}, function(err, gold) {
                    if (err) {
                        console.log('Grabbing gold did not go well at getCave');
                    } else {
                        console.log('Grabbing gold successful from db');
                        console.log(gold);
                        response.json(gold);
                    }
                })
                
            }
        })
    },
    getHouse: function(request, response) {
        // const random_number = Math.floor(Math.random() * 10) + 7
        Gold.updateOne({}, {$inc: {gold: request.body.num}}, function(err, result) {
            if (err) {
                console.log('House update went wrong');
            } else {
                Gold.findOne({}, function(err, gold) {
                    if (err) {
                        console.log('Grabbing gold did not go well at getHouse');
                    } else {
                        console.log('Grabbing gold successful from db');
                        console.log(gold);
                        response.json(gold);
                    }
                })
            }
        })
    },
    getCasino: function(request, response) {
        // const random_number = Math.floor(Math.random() * 201) - 100
        // console.log(random_number); 
        Gold.updateOne({}, {$inc: {gold: request.body.num}}, function(err, result) {
            if (err) {
                console.log('Casino update went wrong');
            } else {
                Gold.findOne({}, function(err, gold) {
                    if (err) {
                        console.log('Grabbing gold did not go well at getCasino');
                    } else {
                        console.log('Grabbing gold successful from db');
                        console.log(gold);
                        response.json(gold);
                    }
                })
            }
        })
    },
    restart: function(request, response) {
        Gold.updateOne({}, {$set: {gold: 0}}, function(err, result) {
            if (err) {
                console.log('Restart went wrong');
            } else {
                console.log('YAY, BACK TO HOMELESSNESS');
                Gold.findOne({}, function(err, gold) {
                    if (err) {
                        console.log('Grabbing gold did not go well at getFarm');
                    } else {
                        console.log('Grabbing gold successful from db');
                        console.log(gold);
                        response.json(gold);
                    }
                })
            }
        })
    }
}
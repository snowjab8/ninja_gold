var mongoose = require('mongoose');
var Gold = mongoose.model('Gold');

module.exports = {
    getGold: function(request, response) {
        Gold.findOne({}, function(err, result) {
            if (err) {
            } else {
                response.json(result);
            }
        })
    },
    getFarm: function(request, response) {
        const random_number = Math.floor(Math.random() * 4) + 2  
        console.log(random_number); 
        Gold.updateOne({}, {$inc: {gold: random_number}}, function(err, result) {
            if (err) {
                console.log('Farm update went wrong');
            } else {
                console.log('hello from gold/farm else')
                response.redirect('/gold');
            }
        })
    },
    getCave: function(request, response) {
        const random_number = Math.floor(Math.random() * 6) + 5 
        console.log(random_number); 
        Gold.updateOne({}, {$inc: {gold: random_number}}, function(err, result) {
            if (err) {
                console.log('Farm update went wrong');
            } else {
                console.log('hello from gold/farm else')
                response.redirect('/gold');
            }
        })
    },
    getHouse: function(request, response) {
        const random_number = Math.floor(Math.random() * 10) + 7
        console.log(random_number); 
        Gold.updateOne({}, {$inc: {gold: random_number}}, function(err, result) {
            if (err) {
                console.log('Farm update went wrong');
            } else {
                console.log('hello from gold/farm else')
                response.redirect('/gold');
            }
        })
    },
    getCasino: function(request, response) {
        const random_number = Math.floor(Math.random() * 201) - 100
        console.log(random_number); 
        Gold.updateOne({}, {$inc: {gold: random_number}}, function(err, result) {
            if (err) {
                console.log('Farm update went wrong');
            } else {
                console.log('hello from gold/farm else')
                response.redirect('/gold');
            }
        })
    },
    restart: function(request, response) {
        Gold.updateOne({}, {$set: {gold: 0}}, function(err, result) {
            if (err) {
                console.log('Restart went wrong');
            } else {
                console.log('YAY, BACK TO HOMELESSNESS');
                response.redirect('/gold');
            }
        })
    }
}
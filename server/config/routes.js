var golds = require('../controllers/golders.js');

module.exports = function(app) {
    app.get('/gold', function(request, response) {
        golds.getGold(request, response);
    })

    app.get('/gold/farm', function(request, response) {
        golds.getFarm(request, response);
    })

    app.get('/gold/cave', function(request, response) {
        golds.getCave(request, response);
    })

    app.get('/gold/house', function(request, response) {
        golds.getHouse(request,response);
    })

    app.get('/gold/casino', function(request, response) {
        golds.getCasino(request, response);
    })

    app.get('/gold/restart', function(request, response) {
        golds.restart(request, response);
    })
    
}
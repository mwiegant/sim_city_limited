(function() {
    var mongoose = require('mongoose'),
        schemas = require('./logic/schemas');

    var db = mongoose.connection;


    function connectToDatabase(models) {
        db.on('error', console.error);

        db.once('open', function() {

            // create a model that maps to my Community schema
            models.CommunityModel = mongoose.model('Community', schemas.CommunityModel);


            console.log("modals have been loaded");
        });

        mongoose.connect('mongodb://localhost/simcity');
    }


    module.exports = function(models) {
        connectToDatabase(models);
        return models;
    }

}) (module);



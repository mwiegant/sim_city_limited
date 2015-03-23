( function() {
    var Schema = require('mongoose').Schema;

    function CommunityModel() {

        this.schema = new Schema({
            name: String,
            population: Number,
            description: String
        });

    }

    CommunityModel.prototype.increasePopulation = function(amount) {
        console.log("Increasing population of community '%s'", this.name);
        this.population += amount;
        console.log("New population: " + this.population);
    };


    module.exports = {
        'CommunityModel': CommunityModel
    }


})(module);
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var DogeSchema = new Schema({
    name: {
        type: String,
    },
    breed: {
        type: String, 
    },
    imgLink: {
        type: String,
    },
    moreInfo: {
        type: String, 
    },
    site: {
        type: String,
    }
});

var Doge = mongoose.model("Doge", DogeSchema)

module.exports = Doge;
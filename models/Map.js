const mongoose = require('mongoose');

const mapSchema = mongoose.Schema({
    catNum:{
        type: Number
    },
    catLocation:{
        type: String,
        trim:false,
        unique:1
    },
    image: String,
})

const Map =  mongoose.model('Map',mapSchema);

module.exports = { Map };
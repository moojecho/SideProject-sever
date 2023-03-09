const mongoose = require('mongoose');

const mapSchema = mongoose.Schema({
    mapNum:{
        type: String,
        unique:1
    },
    catNum:{
        type: Number
    },
    catLocation:{
        type: String,
        trim:false,
        unique:1
    },
    mapLocation1:{
        type: Number
    },
    mapLocation2:{
        type: Number
    },
    image: String,
})

const Map =  mongoose.model('Map',mapSchema);

module.exports = { Map };
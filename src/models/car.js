const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    platenumber:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    dailyvalue:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Car', carSchema);
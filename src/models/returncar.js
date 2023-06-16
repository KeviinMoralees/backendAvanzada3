const mongoose = require("mongoose");

const returncarSchema = mongoose.Schema({
    returnnumber:{
        type: String,
        required: true
    },
    rentnumber:{
        type: String,
        required: true
    },
    returndate:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Returncar', returncarSchema);
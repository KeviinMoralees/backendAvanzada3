const mongoose = require("mongoose");

const rentSchema = mongoose.Schema({
    rentnumber:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    platenumber:{
        type: String,
        required: true
    },
    initialdate:{
        type: String,
        required: true
    },
    finaldate:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Rent', rentSchema);
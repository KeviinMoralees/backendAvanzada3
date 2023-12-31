const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    reservword:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);
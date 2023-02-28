// CREATING USER SCHEMA FOR ADDING USER DATA INTO DATABASE


const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema);
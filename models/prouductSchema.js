// CREATING PRODUCT SCHEMA FOR ADDING PRODUCT DATA INTO DATABASE 

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    // REFFERTING USER SCHEMA FOR SEEING WHICH USER ADD THE DATA 
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    name: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('products', productSchema);
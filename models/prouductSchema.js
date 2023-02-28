const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
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
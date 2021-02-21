const mongoose = require('mongoose');

const schema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    title_tier: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tiers', schema)
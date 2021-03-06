const mongoose = require('mongoose');

const schema = mongoose.Schema({
    max_amount: {
        type: Number,
    },
    min_amount: {
        type: Number,
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

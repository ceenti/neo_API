const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true  
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

module.exports = mongoose.model('schools', schema)
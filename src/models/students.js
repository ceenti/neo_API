const mongoose = require('mongoose');

const schema = mongoose.Schema({
    last_name: {
        type: String,
        trim: true, 
    },
   birthday: {
        type: Date,
        trim: true,
        required: true
   },
   grade:{
        type: Number,
        required: true
   },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
})

module.exports = mongoose.model('students', schema)
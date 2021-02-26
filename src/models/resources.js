const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:{
        type: String,
        trim: true,
        maxlength: 100,
        required: true  
    },
    content :{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    image:{
        type: String,
        trim: true
    }

})

module.exports = mongoose.model('resources', schema)


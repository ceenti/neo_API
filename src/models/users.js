const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{
        type: String,
        trim: true  
    },
    email :{
        type: String,
        pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    role: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required:true
    }

})

module.exports = mongoose.model('users', schema)

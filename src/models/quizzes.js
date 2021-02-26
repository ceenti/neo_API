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
    }
})  // Verificar posteriormente la relación de la escuela los quizzes que presenta y los alumnos a los que va dirigido

module.exports = mongoose.model('quizzes', schema)

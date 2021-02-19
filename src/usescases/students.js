const Students = require('./../models/students')

function createStudent(first_name, last_name, birthday, grade, user_id){
    return Schools.create({first_name, last_name, birthday, grade, user_id})
}

module.exports = {createStudent}
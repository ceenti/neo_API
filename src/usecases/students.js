const Students = require('../models/students')

function createStudent(first_name, last_name, birthday, grade, user){
    return Students.create({first_name, last_name, birthday, grade, user})
}

function getBySchool(school) {
    return Students.find({school: school}).populate('user')
}

module.exports = {
  createStudent,
  getBySchool
}

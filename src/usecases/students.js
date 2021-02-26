const Students = require('../models/students')

function createStudent(last_name, birthday, grade, user, school){
    return Students.create({last_name, birthday, grade, user, school})
}

function getBySchool(school) {
    return Students.find({school: school}).populate('user')
}

module.exports = {
  createStudent,
  getBySchool
}

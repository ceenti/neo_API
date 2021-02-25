const Schools = require('../models/schools')

function createSchool(school_name, address, phone,tier, user){
    return Schools.create({school_name, address, phone,tier, user})
}

function getAll(){
    allSchools = Schools.find()
    return allSchools;
}

function getById(id){
    school = Schools.findOne({_id: id}).populate('tier')
    return school
}

function updateById(id, school_name, address, phone){
  return  Schools.findByIdAndUpdate(id, {school_name, address, phone} )
}
module.exports = {
    createSchool, 
    getAll, 
    getById, 
    updateById
}

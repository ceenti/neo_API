const Schools = require('../models/schools')

function createSchool(school_name, address, phone, user){
    return Schools.create({school_name, address, phone, user})
}

module.exports = {createSchool}

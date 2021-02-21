const Schools = require('../models/schools')

function createSchool(school_name, address, phone,tier, user){
    return Schools.create({school_name, address, phone,tier, user})
}

module.exports = {createSchool}

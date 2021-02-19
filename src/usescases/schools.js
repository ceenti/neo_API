const Schools = require('./../models/schools')

function createSchool(name, address, phone, user_id){
    return Schools.create({name, address, phone, user_id})
}

module.exports = {createSchool}

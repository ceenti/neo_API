const Users = require('../models/users')
const bcrypt = require('bcrypt');




function getAll(){
    const allUsers = Users.find()
    return allUsers
}

function getById(id){
    return Users.findById(id)
}

function updateById(id, name, email, password){
    return Users.findByIdAndUpdate(id, {name, email, password})
}

function deleteById(id){
    return Users.findByIdAndDelete(id)
}

async function createUser(name, email, password, role, status){
    const passwordEncripted = await bcrypt.hash(password, 10)
    return Users.create({name, email, password : passwordEncripted, role, status})
}


module.exports = {
    getAll,
    getById,
    updateById,
    deleteById,
    createUser
}

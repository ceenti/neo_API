const Admins = require('../models/admins')

function getAll(){
    const allAdmins = Admins.find()
    return allAdmins
}

function getById(id){
    return Admins.findById(id)
}

function deleteById(id){
    return Admins.findByIdAndDelete(id)
}

function updateAdmin(id, email, password, name){
    return Admins.findByIdAndUpdate(id, {name, email, password})
}

// async function createAdmin(email, password){
//     const passwordEncripted = await bcrypt.hash(password, 10)
//     return Admins.create({email, password : passwordEncripted})
// }


module.exports = {
    getAll,
    getById,
    deleteById,
    updateAdmin,
    //createAdmin
}

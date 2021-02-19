const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/users');
const Admins = require('../models/admins');

// async function signupUsers(email, password){
//     const passwordEncripted = await bcrypt.hash(password, 10)
//     return Users.create({email, password: passwordEncripted})
// }

// async function signupAdmins(email, password){
//     const passwordEncripted = await bcrypt.hash(password, 10)
//     return Admins.create({email, password : passwordEncripted})
// }

async function loginUsers(email, password){
    const userFound = await Users.findOne({email})

    if(!userFound) throw new Error('La combinación de usuario y password es incorrecta')

    const isPasswordValid = await bcrypt.compare(password, userFound.password)

    if(!isPasswordValid) throw new Error('La combinación de usuario y password es incorrecta')

    const token = jwt.sign({id: userFound._id}, process.env.JWT_SECRET)

    return token
}

async function loginAdmins(email, password){
    const adminFound = await Admins.findOne({email})

    if(!adminFound) throw new Error('La combinación de usuario y password es incorrecta')

    const isPasswordValid = await bcrypt.compare(password, adminFound.password)

    if(!isPasswordValid) throw new Error('La combinación de usuario y password es incorrecta')

    const token = jwt.sign({id: adminFound._id}, process.env.JWT_SECRET)

    return token
}

module.exports = {
    // signupUsers,
    // signupAdmins,
    loginUsers,
    loginAdmins
}
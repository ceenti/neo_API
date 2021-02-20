const express = require('express')
const admins = require('../usecases/admins')
const users = require('../usecases/users')
const schools = require('../usecases/schools')
const students = require('../usecases/students')
const authMiddleware = require('../middlewares/auth')


const router = express.Router()

router.post('/create_user', async (req, res) => {
    const {name, email, password, role, first_name, school_name, last_name, birthday, grade, address, phone} =  req.body
    const userCreated = await users.createUser(name, email, password, role, true)

    if (role === 'student'){
        const studentCreated = await students.createStudent(first_name, last_name, birthday, grade, userCreated)
        data = studentCreated;
    } 
    if(role === 'school'){
        const schoolCreated = await schools.createSchool(school_name, address, phone, userCreated)
        data = schoolCreated
    }
   
    res.json({
        success: true,
        data: data
    })
})

router.get('/', async(req, res) => {
    const allAdmins = await admins.getAll()

    res.json({
        success:true,
        data: allAdmins
    })
})

router.get('/:id', async(req, res) => {
    const adminById = await admins.getById(req.params.id)

    res.json({
        success:true,
        data: adminById
    })
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const {name, email, password } = req.body

    const adminUpdated = await admins.updateAdmin(id, email, password, name)

    res.json({
        success: true,
        data: adminUpdated
    })
})

router.delete('/:id', async (req, res) => {
    const adminDeleted = await admins.deleteById(req.params.id)

    res.json({
        success: true,
        data: adminDeleted
    })
})

module.exports = router
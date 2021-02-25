const express = require('express')
const admins = require('../usecases/admins')
const users = require('../usecases/users')
const schools = require('../usecases/schools')
const students = require('../usecases/students')
const authMiddleware = require('../middlewares/auth')
const tiers = require('../usecases/tiers')


const router = express.Router()

router.post('/create_user', authMiddleware, async (req, res) => {
    const {name, email, password, role, first_name, school_name, last_name, birthday, grade, address, phone, tier_id} =  req.body
    const userCreated = await users.createUser(name, email, password, role, true)
    const getTierById = await tiers.getById(tier_id)

    if (role === 'student'){
        const studentCreated = await students.createStudent(first_name, last_name, birthday, grade, userCreated)
        data = studentCreated;
    } 
    if(role === 'school'){
        const schoolCreated = await schools.createSchool(school_name, address, phone, getTierById, userCreated)
        data = schoolCreated
    }
   
    res.json({
        success: true,
        data: data
    })
})

router.post('/tiers', authMiddleware, async(req, res) => {
    //El amount es la cantidad máxima de alumnos aceptada en esa membresía
    const {max_amount, min_amount, price, duration, title_tier} = req.body
    const tierCreated = await tiers.createTier(max_amount, min_amount, price, duration, title_tier)

    res.json({
        success: true,
        data: tierCreated
    })
})

router.get('/tiers/:id', authMiddleware, async(req, res) => {
    const tierById = await tiers.getById(req.params.id)

    res.json({
        success: true,
        data: tierById
    })
})

router.get('/tiers', authMiddleware, async(req, res) => {
    const allTiers = await tiers.getAll()

    res.json({
        success: true,
        data: allTiers
    })
})

router.patch('/tiers/:id', authMiddleware, async(req, res) => {
    const id = req.params.id
    const {max_amount, min_amount, price, duration, title_tier} = req.body

    const tierUpdated = await tiers.updateById(id, max_amount, min_amount, price, duration, title_tier)

    res.json({
        success: true,
        data: tierUpdated
    })
})

router.get('/schools', authMiddleware, async(req, res) => {
    const allSchools = await schools.getAll()

    res.json({
        success: true,
        data: allSchools
    })
})

router.get('/schools/:id', authMiddleware, async(req, res) => {
    const school = await schools.getById(req.params.id)

    res.json({
        success: true,
        data: school
    })
})

router.get('/', authMiddleware, async(req, res) => {
    const allAdmins = await admins.getAll()

    res.json({
        success:true,
        data: allAdmins
    })
})

router.get('/:id', authMiddleware, async(req, res) => {
    const adminById = await admins.getById(req.params.id)

    res.json({
        success:true,
        data: adminById
    })
})

router.patch('/:id', authMiddleware, async (req, res) => {
    const id = req.params.id
    const {name, email, password } = req.body

    const adminUpdated = await admins.updateAdmin(id, email, password, name)

    res.json({
        success: true,
        data: adminUpdated
    })
})

router.delete('/:id', authMiddleware, async (req, res) => {
    const adminDeleted = await admins.deleteById(req.params.id)

    res.json({
        success: true,
        data: adminDeleted
    })
})

module.exports = router
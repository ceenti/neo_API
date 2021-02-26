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

// Get all tiers
router.get('/tiers', authMiddleware, async(req, res) => {
    try {
        const allTiers = await tiers.getAll()

        res.json({
            success: true,
            data: allTiers
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Create Tier
router.post('/tiers', authMiddleware, async(req, res) => {
    try {
        const {max_amount, min_amount, price, duration, title_tier} = req.body
        const tierCreated = await tiers.createTier(max_amount, min_amount, price, duration, title_tier)

        res.json({
            success: true,
            data: tierCreated
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Get single tier
router.get('/tiers/:id', authMiddleware, async(req, res) => {
    try {
        const tierById = await tiers.getById(req.params.id)

        res.json({
            success: true,
            data: tierById
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Update single tier
router.patch('/tiers/:id', authMiddleware, async(req, res) => {
    try {
        const id = req.params.id 
        const { max_amount, min_amount, price, duration, title_tier } = req.body
        const tierUpdated = await tiers.updateById(id, max_amount, min_amount, price, duration, title_tier)

        res.json({
            success: true,
            data: tierUpdated
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Get all schools
router.get('/schools', authMiddleware, async(req, res) => {
    try {
        const allSchools = await schools.getAll()

        res.json({
            success: true,
            data: allSchools
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// GEt single school
router.get('/schools/:id', authMiddleware, async(req, res) => {
    try {
        const school = await schools.getById(req.params.id)

        res.json({
            success: true,
            data: school
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Update single school
router.patch('/schools/:id', authMiddleware, async(req, res) => {
    try {
        const id = req.params.id
        const {school_name, address, phone} = req.body

        const schoolUpdated = await schools.updateById(id, school_name, address, phone)

        res.json({
            success: true,
            data: schoolUpdated
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Get all admins
router.get('/', authMiddleware, async(req, res) => {
    try {
        const allAdmins = await admins.getAll()

        res.json({
            success:true,
            data: allAdmins
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Get single admin
router.get('/:id', authMiddleware, async(req, res) => {
    try {
        const adminById = await admins.getById(req.params.id)

        res.json({
            success:true,
            data: adminById
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Update single admin
router.patch('/:id', authMiddleware, async (req, res) => {
    try {
        const id = req.params.id
        const {name, email, password } = req.body
        const adminUpdated = await admins.updateAdmin(id, email, password, name)

        res.json({
            success: true,
            data: adminUpdated
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Delete a single admin
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const adminDeleted = await admins.deleteById(req.params.id)

        res.json({
            success: true,
            data: adminDeleted
        })
    } catch(error) {
        res.status(400)
        res.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router

const { request } = require('express')
const express = require('express')
const users = require('./../usecases/users')
const authMiddleware = require('../middlewares/auth')


const router = express.Router()



router.get('/', authMiddleware, async(request, response) => {
    const allUsers = await users.getAll()

    response.json({
        success: true,
        data: allUsers
    })
} )

router.get('/:id', authMiddleware, async(request, response) => {
    const userById = await users.getById(request.params.id)

    response.json({
        success: true,
        data: userById
    })
})

router.patch('/:id', authMiddleware, async (request, response) => {
    const id = request.params.id
    const {name, email, password} = request.body

    const userUpdated = await users.updateById(id, name, email, password)

    response.json({
        success: true,
        data: userUpdated
    })
})

router.delete('/:id', authMiddleware, async (request, response) => {
    const userDeleted = await users.deleteById(request.params.id)

    response.json({
        success: true,
        data: userDeleted
    })
})

module.exports = router
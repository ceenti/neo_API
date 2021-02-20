const express = require('express')

const adminsRouter = require('./routes/admins')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')

const server = express()
const cors = require('cors')
const { response } = require('express')

server.use(cors())

server.use(express.json())
server.use('/admins', adminsRouter)
server.use('/auth', authRouter)
server.use('/users', usersRouter)

server.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'NeoAPIv1'
    })
})

module.exports = server
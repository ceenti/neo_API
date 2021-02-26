const express = require('express')
const auth = require('../usecases/auth')
const authMiddleware = require('../middlewares/auth')


const router = express.Router()


router.post('/admin/create_admin', authMiddleware, async (req, res) => {

    try {
        const {email, password} = req.body
        const adminCreated = await auth.signupAdmins(email, password)
        
        res.json({
            success: true,
            data: adminCreated
        })
    } catch(error){
        res.status(401)
        res.json({
            success: false,
            message: error.message
        })
    }

})

router.post('/admin/login', async( request, response) => {
    try{
        const {email, password} = request.body
        const token = await auth.loginAdmins( email, password )

        response.json({
            success: true,
            message: 'User Admin Logged In :)',
            data: {
                token: token,
                email: email
            }
        })
    } catch(error){
        response.status(401)
        response.json({
            success: false,
            message: error.message
        })

    }
})

router.post('/user/login', async(request, response) => {
    
    try{
        const {email, password} = await request.body
        const token = await auth.loginUsers(email, password)

        response.json({
            success: true,
            message: 'User Logged In :)',
            data: {
                token: token,
                email: email
            }
        })

    } catch(error){
        response.status(401)
        response.json({
            success: false,
            message: error.message
        })
    }
})

module.exports = router

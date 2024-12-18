const admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const adminSignUpRouter = require('express').Router()

adminSignUpRouter.post('/',async (req,res) => {
    const {username,name,password} = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password,saltRounds)

    const newAdmin = new admin({
        name,
        passwordHash,
        username
    })

    const savedAdmin = newAdmin.save()
    res.status(201).json(savedAdmin)

})

module.exports = adminSignUpRouter

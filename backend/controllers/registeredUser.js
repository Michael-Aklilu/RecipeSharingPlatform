
const registeredUserRouter = require('express').Router()
const registeredUser = require('../models/registeredUser')
const bcrypt = require('bcryptjs')

registeredUserRouter.post('/', async (req,res) => {
    const {username,name,password} = req.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password,saltRounds)
    const newUser = new registeredUser({
        name,
        passwordHash,
        username
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
})

registeredUserRouter.get('/', async (req,res) => {
    const users = await registeredUser.find({}).populate('savedRecipes comments')
    res.status(200).json(users)
})

module.exports = registeredUserRouter

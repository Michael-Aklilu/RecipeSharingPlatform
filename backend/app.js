const config = require('./utils/config')
const middleware = require('./utils/middleware')
const express = require('express')
const app = express()
const cors = require('cors')
const loginRouter = require('./controllers/login')
const signUpRouter = require('./controllers/signUp')
const adminLoginRouter = require('./controllers/adminLogin')
const adminSignUpRouter = require('./controllers/adminSignup')

const mongoose = require('mongoose')


mongoose.set('strictQuery',false)
mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use(middleware.myLogger)
app.use(middleware.tokenExtractor)
app.use('/api/login',loginRouter)
app.use('/api/SignUp',signUpRouter)
app.use('/api/AdminLogin',adminLoginRouter)
app.use('/api/AdminSignUp', adminSignUpRouter)
app.use(middleware.unknownEndpoint)

module.exports = app
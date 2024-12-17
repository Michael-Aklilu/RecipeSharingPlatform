const config = require('./utils/config')
const middleware = require('./utils/middleware')
const express = require('express')
const app = express()
const cors = require('cors')
const loginRouter = require('./controllers/login')
const registeredUserRouter = require('./controllers/registeredUser')
const mongoose = require('mongoose')


mongoose.set('strictQuery',false)
mongoose.connect(config.MONGODB_URI)

app.use(cors())
app.use(express.json())
app.use(middleware.myLogger)
app.use(middleware.tokenExtractor)
app.use('/api/login',loginRouter)
app.use('/api/users',registeredUserRouter)
app.use(middleware.unknownEndpoint)

module.exports = app
const mongoose = require('mongoose')
const admin = require('../models/admin')
const adminRouter = require('express').Router()


adminRouter.get('/', async (req,res) => {
    try{
      const admins = await admin.find({})
      if(!admins) res.status(404).json({error: 'Admins not found'})
      res.status(200).json(admins)
    }catch(error){
      console.log(error)
      res.status(500).json({error:'Error when fetching admins'})
    }      
})

module.exports = adminRouter
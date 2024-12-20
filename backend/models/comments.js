const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    date: { type:Date, default:Date.now},
    RegisteredUser: {
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'RegisteredUser',
        required:true
    },
    Recipes: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Recipes'
    }
})

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
    }
})

const Comment = mongoose.model("Comments",commentSchema)
module.exports = Comment
const mongoose = require('mongoose')

const registeredUserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    addedRecipes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipes'
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId ,
            ref: 'Comments'
            
        }
    ],
    savedRecipes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Recipes'
        }
      
    ]
});

registeredUserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash

    }
})

const registeredUser = mongoose.model('RegisteredUser',registeredUserSchema)

module.exports = registeredUser


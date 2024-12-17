const mongoose = require('mongoose')

const registeredUserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    comments: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId },
            body: { type: String, required: true },
            date: { type: Date, default: Date.now }
        }
    ],
    savedRecipes: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId},
            body: {type: String, required: true}
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

const registeredUser = mongoose.model('Registered_User',registeredUserSchema)

module.exports = registeredUser


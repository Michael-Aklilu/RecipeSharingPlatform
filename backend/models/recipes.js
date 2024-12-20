const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: String, required: true}],
    instructions: [{type: String, required: true}],
    servings: { type: Number},
    prepTime: { type: String },
    cookTime: { type: String },
    imageUrl: { type: String },
    RegisteredUser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RegisteredUser',
        required: true
    },
    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comments' 
        }
      ]
    
})

recipeSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
    }
})

const Recipe = mongoose.model('Recipes', recipeSchema)

module.exports = Recipe

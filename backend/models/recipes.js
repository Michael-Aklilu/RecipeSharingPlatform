const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: [{ type: String, required: true }],
  servings: { type: Number, required: true },
  prepTime: { type: String, required: true },
  cookTime: { type: String, required: true },
  imageUrl: { type: String },
  RegisteredUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RegisteredUser",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
});

recipeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;

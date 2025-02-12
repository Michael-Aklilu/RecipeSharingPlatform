const mongoose = require("mongoose");

const registeredUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  passwordHash: { type: String, required: true },
  addedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  savedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});

registeredUserSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    if (
      returnedObject._id &&
      !returnedObject.$__ &&
      !returnedObject.$isDocument
    ) {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
    }
    delete returnedObject.__v;
    delete returnedObject.passwordHash;

    if (
      returnedObject.addedRecipes &&
      returnedObject.addedRecipes.length === 0
    ) {
      delete returnedObject.addedRecipes;
    }
    if (returnedObject.comments && returnedObject.comments.length === 0) {
      delete returnedObject.comments;
    }
    if (
      returnedObject.savedRecipes &&
      returnedObject.savedRecipes.length === 0
    ) {
      delete returnedObject.savedRecipes;
    }

    return returnedObject;
  },
});

const registeredUser = mongoose.model("RegisteredUser", registeredUserSchema);

module.exports = registeredUser;

const mongoose = require("mongoose");
const recipeRouter = require("express").Router();
const Recipes = require("../models/recipes");
const registeredUser = require("../models/registeredUser");
const { userExtractor } = require("../utils/middleware");

recipeRouter.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find({}).populate("RegisteredUser");

    if (!recipes) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the recipes" });
  }
});

recipeRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const recipe = await Recipes.findById(id).populate("RegisteredUser");

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching a recipe" });
  }
});
recipeRouter.post("/", userExtractor, async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      instructions,
      servings,
      prepTime,
      cookTime,
      imageUrl,
      RegisteredUser,
    } = req.body;

    const newRecipe = new Recipes({
      title,
      description,
      ingredients,
      instructions,
      servings,
      prepTime,
      cookTime,
      imageUrl,
      RegisteredUser,
    });

    await newRecipe.save();

    const user = await registeredUser.findById(RegisteredUser);

    if (user) {
      user.addedRecipes.push(newRecipe);
      await user.save();
    }

    const updatedRecipes = await Recipes.find({});

    res.status(201).json(updatedRecipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred when adding a recipe" });
  }
});

recipeRouter.put("/:id", userExtractor, async (req, res) => {
  try {
    const id = req.params.id;
    const {
      title,
      description,
      ingredients,
      instructions,
      servings,
      prepTime,
      cookTime,
      imageUrl,
      RegisteredUser,
    } = req.body;

    const newRecipe = {
      title,
      description,
      ingredients,
      instructions,
      servings,
      prepTime,
      cookTime,
      imageUrl,
      RegisteredUser,
    };

    const updatedRecipe = await Recipes.findByIdAndUpdate(id, newRecipe, {
      new: true,
    }).populate("RegisteredUser");

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const user = await registeredUser.findById(RegisteredUser);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const recipeIndex = user.addedRecipes.indexOf(id);

    if (recipeIndex === -1) {
      return res
        .status(404)
        .json({ error: "Recipe not associated with this user" });
    }

    user.addedRecipes[recipeIndex] = updatedRecipe;
    await user.save();
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred when adding a recipe" });
  }
});

recipeRouter.delete("/:id", userExtractor, async (req, res) => {
  try {
    const id = req.params.id;

    const recipe = await Recipes.findByIdAndDelete(id);

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const user = await registeredUser.findOne({ addedRecipes: id });

    if (user) {
      user.addedRecipes = user.addedRecipes.filter(
        (recipe) => recipe.toString() !== id
      );

      await user.save();
    }

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred when deleting a recipe" });
  }
});

module.exports = recipeRouter;

const mongoose = require("mongoose");
const commentRouter = require("express").Router();
const Comments = require("../models/comments");
const RegisteredUsers = require("../models/registeredUser");
const Recipes = require("../models/recipes");
const { userExtractor } = require("../utils/middleware");

commentRouter.use(userExtractor)

commentRouter.post("/", async (req, res) => {
  try {
    const { comment, RegisteredUser, Recipe, date } = req.body;

    const newComment = new Comments({ comment, RegisteredUser, Recipe, date });
    await newComment.save();

    const myUser = await RegisteredUsers.findById(RegisteredUser);
    const myRecipe = await Recipes.findById(Recipe);

    if (myUser && myRecipe) {
      myUser.comments.push(newComment.id);
      await myUser.save();
      myRecipe.comments.push(newComment.id);
      await myRecipe.save();
    }
    const updatedComments = await Comments.find({});
    res.status(201).json(updatedComments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while adding comment" });
  }
});

commentRouter.get("/", async (req, res) => {
  try {
    const comments = await Comments.find({})
      .populate("RegisteredUser")
      .populate("Recipe");
    if (!comments) {
      res.status(404).json({ error: "Comments not found" });
    }
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occured while fetching recipes" });
  }
});

commentRouter.delete("/:id", async (req, res) => {
  try {
    const commentID = req.params.id;
    const commentToDelete = await Comments.findByIdAndDelete(commentID);

    if (!commentToDelete) {
      res.status(404).json({ error: "Comment not found" });
    }
    const updatedComments = await Comments.find({});

    const user = await RegisteredUsers.findOne({ comments: commentID });
    const recipe = await Recipes.findOne({ comments: commentID });

    if (user) {
      user.comments = user.comments.filter((u) => u.toString() !== commentID);
      await user.save();
    }

    if (recipe) {
      recipe.comments = recipe.comments.filter(
        (r) => r.toString() !== commentID
      );
      await recipe.save();
    }

    res.status(200).json(updatedComments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred while deleting recipe" });
  }
});

commentRouter.put("/:id", async (req, res) => {
  try {
    const { comment, Recipe, RegisteredUser } = req.body;
    const commentID = req.params.id;
    const updatedComment = { comment, Recipe, RegisteredUser };
    const commentToEdit = await Comments.findByIdAndUpdate(
      commentID,
      updatedComment,
      {
        new: true,
      }
    );

    if (!commentToEdit) {
      res.status(404).json({ error: "Comment not found" });
    }

    const user = await RegisteredUsers.findOne({ comments: commentID });
    const myRecipe = await Recipes.findOne({ comments: commentID });

    if (user) {
      const commentIndex = user.comments.indexOf(commentID);
      user.comments[commentIndex] = updatedComment;
      await user.save();
    }

    if (myRecipe) {
      const recipeIndex = myRecipe.comments.indexOf(commentID);
      myRecipe.comments[recipeIndex] = updatedComment;
      await myRecipe.save();
    }

    res.status(200).json(updatedComment);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while editing a comment" });
  }
});

module.exports = commentRouter;

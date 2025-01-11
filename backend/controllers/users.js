const userRouter = require("express").Router();
const registeredUser = require("../models/registeredUser");
const bcrypt = require("bcryptjs");
const { userExtractor } = require("../utils/middleware");

userRouter.use(userExtractor);
userRouter.get("/", async (req, res) => {
  try {
    const users = await registeredUser.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

userRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await registeredUser.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the user." });
  }
});

userRouter.post("/", async (req, res) => {
  try {
    const { username, name, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const newUser = new registeredUser({ name, passwordHash, username });

    await newUser.save();
    const updatedUsers = await registeredUser.find({});

    res.status(201).json(updatedUsers);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: "An error occurred while creating the user." });
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await registeredUser.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    const { username, name, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const updatedUser = { username, name, passwordHash };

    const id = req.params.id;
    const user = await registeredUser.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
  
    const newUser = await registeredUser
      .findById(id)
      .populate("Comments")
      .populate("SavedRecipes");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the user." });
  }
});

module.exports = userRouter;

const signUpRouter = require("express").Router();
const registeredUser = require("../models/registeredUser");
const bcrypt = require("bcryptjs");

signUpRouter.post("/", async (req, res) => {
  const { username, name, password } = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = new registeredUser({
    name,
    passwordHash,
    username,
  });
  const savedUser = await newUser.save();
  res.status(201).json(savedUser);
});

module.exports = signUpRouter;

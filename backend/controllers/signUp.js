const signUpRouter = require("express").Router();
const registeredUser = require("../models/registeredUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


signUpRouter.post("/", async (req, res) => {
  const { username, name, password } = req.body;
  const existingUser = await registeredUser.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: "Username is already taken" });
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const newUser = new registeredUser({
    name,
    passwordHash,
    username,
  });
  const savedUser = await newUser.save();

  const userForToken = {
    username: savedUser.username,
    id: savedUser._id,
  };
  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: "1h" });
  res.status(201).json({token, user: savedUser})
});

module.exports = signUpRouter;

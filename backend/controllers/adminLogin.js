const adminLoginRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin = require("../models/admin");

adminLoginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await admin.findOne({ username });
    const correctPassword =
      admin == null ? false : bcrypt.compare(password, user.passwordHash);
  } catch (error) {
    console.log(error);
  }

  if (!(user && correctPassword)) {
    return res.status(401).send({ error: "Invalid username or password" });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({ token, username: user.username, name: user.name });
});

module.exports = adminLoginRouter;

const loginRouter = require("express").Router();
const registeredUser = require("../models/registeredUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = await registeredUser.findOne({ username });
  const correctPassword =
    user == null ? false : await bcrypt.compare(password, user.passwordHash);

  if (!(user && correctPassword)) {
    return res.status(401).send({ error: "invalid username or password" });
  }
  const userForToken = {
    username: user.username,
    id: user._id,
  };
  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;

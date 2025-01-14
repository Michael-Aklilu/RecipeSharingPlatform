const adminLoginRouter = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const admin = require("../models/admin");

adminLoginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await admin.findOne({ username });

    if (!user) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const correctPassword = await bcrypt.compare(password, user.passwordHash);

    if (!correctPassword) {
      return res.status(401).send({ error: "Invalid username or password" });
    }

    const userForToken = {
      username: user.username,
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: "1h",
    }); 

    res.status(200).send({
      token,
      username: user.username,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An unexpected error occurred" });
  }
});

module.exports = adminLoginRouter;

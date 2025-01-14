const adminSignUpRouter = require("express").Router();
const admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

adminSignUpRouter.post("/", async (req, res) => {
  const { username, name, password } = req.body;

  try {
    if (!username || !name || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const existingAdmin = await admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).send({ error: "Username already exists" });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newAdmin = new admin({
      name,
      passwordHash,
      username,
    });

    const savedAdmin = await newAdmin.save();

    const adminForToken = {
      username: savedAdmin.username,
      id: savedAdmin._id,
    };
    const token = jwt.sign(adminForToken, process.env.SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({
      token,
      id: savedAdmin._id,
      username: savedAdmin.username,
      name: savedAdmin.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An unexpected error occurred" });
  }
});

module.exports = adminSignUpRouter;

const config = require("./utils/config");
const middleware = require("./utils/middleware");
const express = require("express");
const app = express();
const cors = require("cors");
const loginRouter = require("./controllers/login");
const signUpRouter = require("./controllers/signUp");
const adminLoginRouter = require("./controllers/adminLogin");
const adminSignUpRouter = require("./controllers/adminSignup");
const userRouter = require("./controllers/users");
const recipeRouter = require("./controllers/recipes");
const adminRouter = require("./controllers/admin");
const commentRouter = require("./controllers/comments");
const initialRecipes = require("./initialRecipes");

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(middleware.myLogger);
app.use(middleware.tokenExtractor);
app.use("/api/login", loginRouter);
app.use("/api/signUp", signUpRouter);
app.use("/api/adminLogin", adminLoginRouter);
app.use("/api/adminSignUp", adminSignUpRouter);
app.use("/api/users", userRouter);
app.use("/api/recipes", recipeRouter);
app.use("/api/admins", adminRouter);
app.use("/api/comments", commentRouter);
app.use(middleware.unknownEndpoint);

module.exports = app;

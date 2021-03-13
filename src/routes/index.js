require("dotenv").config();
const express = require("express");
const userRouter = require("./users");

const app = express();
const PORT = process.env.PORT;
const onServerStart = () => {
  console.log(`Welcome to port ${PORT}`);
};

const setUpRoutes = () => {
  app.use("/api/user", userRouter);
};

module.exports.setUpServer = () => {
  app.use(express.json()); // => req.body

  setUpRoutes();
  app.listen(PORT, onServerStart);
};

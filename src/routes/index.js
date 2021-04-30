require("dotenv").config();
const express = require("express");
const StudentRoute = require("./studentRoute");
const AuthRoute = require('./authRoute')

const app = express();
const PORT = process.env.PORT;
const onServerStart = () => {
  console.log(`Welcome to port ${PORT}`);
};

const setUpRoutes = () => {
  app.use('/glcDB/User', AuthRoute);
  app.use('/glcDB/students', StudentRoute); 
};

module.exports.setUpServer = () => {
  app.use(express.json()); // => req.body

  setUpRoutes();
  app.listen(PORT, onServerStart);
};

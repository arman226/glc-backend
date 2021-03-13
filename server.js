require("dotenv").config();
const { connectToMonggo } = require("./src/data");
const { setUpServer } = require("./src/routes/index");

connectToMonggo();
setUpServer();

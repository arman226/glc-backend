require("dotenv").config();
const { connectToMonggo } = require("./src/data/dbConnection");
const { setUpServer } = require("./src/routes/index");

const AuthRoute = require('./src/routes/authRoute')
const StudentRoute = require('./src/routes/studentRoute')

connectToMonggo();
setUpServer();


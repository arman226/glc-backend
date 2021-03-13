require("dotenv").config();
const mongoose = require("mongoose");

const SERVER = process.env.MONGO_SERVER;

//Connects to Monggo DB Server
module.exports.connectToMonggo = () => {
  mongoose.connect(SERVER, { useNewUrlParser: true });
  const db = mongoose.connection;

  //Will be deprecated soon
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("GLC Database: Access Granted."));
};

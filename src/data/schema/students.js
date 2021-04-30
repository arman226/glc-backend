const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  lastname: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true, 
  },
});

module.exports = mongoose.model("students", studentSchema);

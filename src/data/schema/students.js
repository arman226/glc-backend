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
  createdBy: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedBy: {
    type: String,
    required: true,
  },
  dateUpdated: {
    type: Date,
    required: true,
    default: Date.now,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("students", studentSchema);

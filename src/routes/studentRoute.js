const express = require("express");
const {
  home,
  getAllStudents,
  createStudent,
  getStudentById,
  deleteStudent,
  updateStudent,
} = require("../controller/studentsController");
const router = express.Router();


router.get("/", home); //Welcome to Students API  

//returns all active and inactive students
router.get("/students", getAllStudents);

/**
 * retrieves student information according to id
 * @param id studentId String
 */
router.get("/student/:id", getStudentById, (req, res) => {
  res.json(res.user);
});

/**
 * creates student  
 * @lastname    String
 * @firstname String
 */
router.post("/student", createStudent);

/**removes student
 * @param id studentId string
 * */
router.delete("/student/:id", getStudentById, deleteStudent);

/**
 * updateStudent
 * @param id
 * REQUEST BODY
 * @lastname String
 * @firstname String
 * */
router.patch("/student/:id", getStudentById, updateStudent);

module.exports = router;

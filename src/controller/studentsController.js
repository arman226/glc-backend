const {
  retrieveAllStudents,
  retrieveStudentById,
  addStudent,
} = require("../repositories/studentsRepository");

module.exports.home = async (req, res) => {
  await res.status(200).json({
    message: "Welcome to Students API",
  });
};

module.exports.getAllStudents = async (req, res) => {
  try {
    const student = await retrieveAllStudents();
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.createStudent = async (req, res) => {
  try {
    const newStudent = await addStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.deleteStudent = async (req, res) => {
  try {
    const removed = await res.student.remove();
    res.status(200).json({ message: "Student has been deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Error:" + error.message,
    });
  }
};

module.exports.updateStudent = async (req, res) => {
  if (req.body.lastname !== null) {
    res.student.lastname = req.body.lastname;
  }
  if (req.body.firstname !== null) {
    res.student.firstname = req.body.firstname;
  }
  if (req.body.createdBy !== null) {
    res.student.createdBy = req.body.createdBy;
  }
  if (req.body.updatedBy !== null) {
    res.student.updatedBy = req.body.updatedBy;
  }
  try {
    const updatedStudent = res.student.save();
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({
      message: "Internal Error:" + error.message,
    });
  }
};

//
module.exports.getStudentById = async (req, res, next) => {
  let student;
  try {
    const { id } = req.params;
    student = await retrieveStudentById(id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Student does not exist",
    });
  }
  res.student = student;
  next();
};

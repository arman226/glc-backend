const Students = require("../data/schema/students");


module.exports.retrieveAllStudents = async () => {
  return await Students.find();
};

module.exports.addStudent = async (student) => {
  const { lastname, firstname } = student;
  const pupil = new Students({ lastname, firstname });
  const newStudent = await pupil.save();
  return newStudent;
};

module.exports.retrieveStudentById = async (id) => {
  return await Students.findById(id);
};

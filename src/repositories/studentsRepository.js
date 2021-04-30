const Students = require("../data/schema/students");


module.exports.retrieveAllStudents = async () => {
  return await Students.find();
};

module.exports.addStudent = async (student) => {
  const { lastname, firstname, createdBy, updatedBy } = student;
  const pupil = new Students({ lastname, firstname, createdBy, updatedBy });
  const newStudent = await pupil.save();
  return newStudent;
};

module.exports.retrieveStudentById = async (id) => {
  return await Students.findById(id);
};

const {
  retrieveAllUsers,
  retrieveUserById,
  addUser,
} = require("../repositories/usersRepository");

module.exports.home = async (req, res) => {
  await res.status(200).json({
    message: "Welcome to Users API",
  });
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const user = await retrieveAllUsers();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.createUser = async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const removed = await res.user.remove();
    res.status(200).json({ message: "User has been deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Error:" + error.message,
    });
  }
};

module.exports.updateUser = async (req, res) => {
  if (req.body.name !== null) {
    res.user.name = req.body.name;
  }
  if (req.body.nickName !== null) {
    res.user.nickName = req.body.nickName;
  }
  try {
    const updatedUser = res.user.save();
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: "Internal Error:" + error.message,
    });
  }
};

//
module.exports.getUserById = async (req, res, next) => {
  let user;
  try {
    const { id } = req.params;
    user = await retrieveUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "User does not exist",
    });
  }
  res.user = user;
  next();
};

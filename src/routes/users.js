const express = require("express");
const {
  home,
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controller/usersController");
const router = express.Router();

//this only to test the user route
router.get("/", home);

//returns all active and inactive users
router.get("/users", getAllUsers);

/**
 * retrieves user information according to id
 * @param id userId String
 */
router.get("/user/:id", getUserById, (req, res) => {
  res.json(res.user);
});

/**
 * creates user
 * @name     String
 * @nickName String
 */
router.post("/user", createUser);

/**remove user
 * @param id userId string
 * */
router.delete("/user/:id", getUserById, deleteUser);

/**
 * updateUser
 * @param id
 * REQUEST BODY
 * @name String
 * @nickName String
 * */
router.patch("/user/:id", getUserById, updateUser);

module.exports = router;

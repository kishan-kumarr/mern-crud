const express = require("express");
const route = express.Router();
const {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controller/UserController");

route.get("/users", getAllUsers);
route.get("/user/:id", getSingleUser);
route.post("/user", addUser);
route.put("/user/:id", updateUser);
route.delete("/user/:id", deleteUser);

module.exports = route;

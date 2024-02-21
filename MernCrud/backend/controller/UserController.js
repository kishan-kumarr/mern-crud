const User = require("../model/UserModel");
const { StatusCodes } = require("http-status-codes");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(StatusCodes.ACCEPTED)
      .send({ data: users, noOfRecord: users.length, msg: "All users list" });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: error });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findOne({ _id });

    if (user) res.status(StatusCodes.ACCEPTED).send({ data: user });
    else res.status(StatusCodes.ACCEPTED).send({ data: "User not found" });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: error });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      res
        .status(StatusCodes.BAD_GATEWAY)
        .send({ msg: "All fields are required" });
    }

    const user = await User.create({ name, email, phone });

    res
      .status(StatusCodes.CREATED)
      .send({ data: user, msg: "User added successfully" });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const _id = req.params.id;

    const user = await User.updateOne({ _id }, { name, email, phone });
    if (user.modifiedCount)
      res
        .status(StatusCodes.ACCEPTED)
        .send({ msg: "User Updated successfully done" });
    else res.status(StatusCodes.BAD_REQUEST).send({ msg: "User not found" });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.deleteOne({ _id });
    if (user.deletedCount)
      res
        .status(StatusCodes.ACCEPTED)
        .send({ msg: "User deleted successfully done" });
    else res.status(StatusCodes.BAD_REQUEST).send({ msg: "User not found" });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send({ msg: error });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
};

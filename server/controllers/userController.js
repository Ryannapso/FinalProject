const User = require("../models/userModel");

// Get Users
// route GET /User
const getUser = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

// Set User
// route POST /user
const setUser = async (req, res) => {
  if (!req.body.userName) {
    res.status(400);
    throw new Error("Must out User name.");
  }

  if (!req.body.password) {
    res.status(400);
    throw new Error("Must set a password.");
  }

  const user = await User.create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber1: req.body.phoneNumber1,
    address: req.body.address,
  });

  res.status(200).json(user);
};

// Update users
// route PUT /User/:id
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
};

// Delete Users
// route DELETE /users/:id
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error("user not found");
  }

  await user.remove();

  res.status(200).json({ _id: req.params.id });
};

module.exports = {
  getUser,
  setUser,
  updateUser,
  deleteUser,
};

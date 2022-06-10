const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

// Register user
// route POST /users/register
const registerUser = async (req, res) => {

  const {username, password, firstName, lastName, phoneNumber1, address } = req.body;

  if(!username || !password) {
    res.status(400)
  }

  // Check if user exists
  const userExists = await User.findOne({username})

  if(userExists) {
    res.status(400);
    res.json("User already exists");
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    username,
    password: hashedPassword,
    firstName,
    lastName,
    phoneNumber1,
    address
  });

  if(user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber1: user.phoneNumber1,
      address: user.address,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
  }
};

const loginUser = async (req, res) => {
  const {username, password} = req.body;

  // Check for username
  const user = await User.findOne({username});

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber1: user.phoneNumber1,
      address: user.address,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    res.json("Invalid Credentials");
  }
};

// Get user data
// route GET /users/user
const getUser = async (req, res) => {
  res.json({ message: 'User data display' });
};

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser
};

const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Bitte alle Felder richtig befüllen");
  }

  const userExits = await UserModel.findOne({ Name: name, Email: email });

  if (userExits) {
    res.status(400);
    throw new Error("Anwender existiert bereits");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user in Datebase
  const user = await UserModel.create({
    Name: name,
    Email: email,
    Password: hashedPassword,
  });

  if (user) {
    res.status(200).json({
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invaild user data");
  }
});

// @desc Authemticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ Email: email });

  if (user && (await bcrypt.compare(password, user.Password))) {
    res.status(200).json({
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invaild Email or Password");
  }
});

// @desc GET user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};

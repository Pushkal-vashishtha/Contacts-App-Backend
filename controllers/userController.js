const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUsers = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields mandatory ");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("Already reg. ");
  }

  //hash Pword

  const hashPassword = await bcrypt.hash(password, 10);
  console.log("hp->", hashPassword);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  console.log(`USer Created${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Data not valid");
  }
  res.json({
    message: "Register user",
  });
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("all are compulsory");
  }
  const user = await User.findOne({ email });
  //compare
  if (user && (await bcrypt.compare(password, user.password))) {
  const accessToken = jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
  res.status(200).json({ accessToken });
}else{
    res.status(401)
    throw new Error("Email or Password not valid")
} res.json({
    message:"Login    user"
})
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUsers, loginUser, currentUser };

const User = require("../models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  const createUser = await user.save();
  res.send({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    isAdmin: createdUser.isAdmin,
    token: generateToken(createdUser),
  });
};

const login = async (req, res) => {};

module.exports = {
  register,
  createUser,
};

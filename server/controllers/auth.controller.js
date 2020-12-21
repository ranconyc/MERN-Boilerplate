const User = require("../models/User");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  res.send("login");
};
const register = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send({ mag: "Please fill in all field" });
  }
  res.send(req.body);
};

module.exports = {
  login,
  register,
};

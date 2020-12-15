const User = require("../models/user");
const data = require("../data");

const seedUsers = async (req, res) => {
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers });
};

module.exports = { seedUsers };

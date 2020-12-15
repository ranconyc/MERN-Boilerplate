const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "ran",
      email: "ran@ran.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
  ],
};

module.exports = data;

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/test";

module.exports = {
  PORT,
  MONGODB_URL,
};

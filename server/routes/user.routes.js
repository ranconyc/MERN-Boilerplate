const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");

router.route("/seed").get(UserController.seedUsers);

module.exports = router;

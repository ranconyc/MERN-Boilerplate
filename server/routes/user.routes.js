const userRouter = require("express").Router();
const UserController = require("../controllers/user.controller");

userRouter.route("/seed").get(UserController.seedUsers);

module.exports = userRouter;

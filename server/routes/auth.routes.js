const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller");

authRouter.route("/signin").post(authController.login);

module.exports = authRouter;

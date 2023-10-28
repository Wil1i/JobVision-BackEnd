let {Router} = require("express")
const { } = require("../middlewares/auth")
Router = new Router()

const loginController = require("../controllers/auth/loginController")
Router.post("/login", isUserNotLoggedIn, loginController.post)

const registerController = require("../controllers/auth/registerController")
Router.post("/register", isUserNotLoggedIn, registerController.post)

const otpController = require("../controllers/auth/otpController")
Router.post("/otp", isUserNotLoggedIn, otpController.post)

module.exports = Router
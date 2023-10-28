let {Router} = require("express")
Router = new Router()

const loginController = require("../controllers/auth/loginController")
Router.post("/login", loginController.post)

const registerController = require("../controllers/auth/registerController")
Router.post("/register", registerController.post)

const otpController = require("../controllers/auth/otpController")
Router.post("/otp", otpController.post)

module.exports = Router
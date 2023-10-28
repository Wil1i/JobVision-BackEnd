let {Router} = require("express")
const {isUserAdmin} = require("../middlewares/auth")
Router = new Router()

const deleteController = require("../controllers/users/deleteController")
Router.post("/delete", isUserAdmin, deleteController.post)

const getAllController = require("../controllers/users/getAllController")
Router.get("/get/all", isUserAdmin, getAllController.get)

const getController = require("../controllers/users/getController")
Router.get("/get", getController.get)

const createController = require("../controllers/users/createController")
Router.post("/create", isUserAdmin, createController.post)

module.exports = Router

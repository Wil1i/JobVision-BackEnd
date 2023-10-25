let {Router} = require("express")
Router = new Router()

const deleteController = require("../controllers/users/deleteController")
Router.post("/delete", deleteController.post)

const getAllController = require("../controllers/users/getAllController")
Router.get("/get/all", getAllController.get)

const getController = require("../controllers/users/getController")
Router.get("/get", getController.get)

const newController = require("../controllers/users/newController")
Router.post("/new", newController.post)

module.exports = Router

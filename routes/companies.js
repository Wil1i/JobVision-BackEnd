let {Router} = require("express")
Router = new Router()

const deleteController = require("../controllers/companies/deleteController")
Router.post("/delete", deleteController.post)

const getController = require("../controllers/companies/getController")
Router.get("/get", getController.get)

const newController = require("../controllers/companies/newController")
Router.post("/new", newController.post)

module.exports = Router

let {Router} = require("express")
const {} = require("../middlewares/auth")
Router = new Router()

const deleteController = require("../controllers/companies/deleteController")
Router.post("/delete", isUserAdmin, deleteController.post)

const getController = require("../controllers/companies/getController")
Router.get("/get", getController.get)

const newController = require("../controllers/companies/newController")
Router.post("/new", isUserAdmin, newController.post)

module.exports = Router

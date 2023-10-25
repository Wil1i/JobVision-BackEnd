let {Router} = require("express")
Router = new Router()

const getAllController = require("../controllers/ads/getAllController")
Router.get("/all", getAllController.get)

const deleteController = require("../controllers/ads/deleteController")
Router.post("/delete", deleteController.post)

const newController = require("../controllers/ads/newController")
Router.post("/new", newController.post)

module.exports = Router

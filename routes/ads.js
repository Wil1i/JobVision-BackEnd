let {Router} = require("express")
const {} = require("../middlewares/auth")
Router = new Router()

const getAllController = require("../controllers/ads/getAllController")
Router.get("/all", getAllController.get)

const deleteController = require("../controllers/ads/deleteController")
Router.post("/delete", isUserCompanyOwner, deleteController.post)

const newController = require("../controllers/ads/newController")
Router.post("/new", isUserCompanyOwner, newController.post)

module.exports = Router

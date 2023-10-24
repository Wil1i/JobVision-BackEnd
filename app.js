const express = require("express")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const bodyParser = require("body-parser")
const config = require("./configs/config.json")

const app = express()

app.use(cors({
  origin : "*",
  methods : ['GET', 'POST']
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(fileUpload())
app.use(express.static(__dirname + "public"))

const adsRoutes = require("./routes/ads")
app.use("/ads", adsRoutes)

const companiesRoutes = require("./routes/companies")
app.use("/companies", companiesRoutes)

const usersRoutes = require("./routes/users")
app.use("/users", usersRoutes)

app.listen(config.port || 3000, () => {
  console.log(`Running on ${config.port}`)
})
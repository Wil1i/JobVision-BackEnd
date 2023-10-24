const sequelize = require("sequelize")
const config = require("./config.json")

const db = new sequelize(config.db.name, config.db.username, config.db.password, {
  host : config.db.host,
  dialect : config.db.dialect
})

module.exports = db
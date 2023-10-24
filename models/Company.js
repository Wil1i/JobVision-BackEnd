const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Company = db.define("companies", {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },

  logo : {
    type : DataTypes.TEXT
  },

  name : {
    type : DataTypes.TEXT
  },

  score : {
    type : DataTypes.INTEGER
  },

  aboutCompany : {
    type : DataTypes.TEXT
  },

  employees : {
    type : DataTypes.INTEGER
  },

  year : {
    type : DataTypes.INTEGER
  },

  activity : {
    type : DataTypes.TEXT
  },

  ownership : {
    type : DataTypes.TEXT
  },

  knowledgeBased : {
    type : DataTypes.BOOLEAN
  }
})

Company.sync()

module.exports = Company
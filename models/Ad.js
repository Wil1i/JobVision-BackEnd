const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const Ad = db.define("ads", {
  id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },

  category : {
    type : DataTypes.TEXT
  },

  title : {
    type : DataTypes.TEXT
  },

  companyId : {
    type : DataTypes.INTEGER
  },

  province : {
    type : DataTypes.TEXT
  },

  city : {
    type : DataTypes.TEXT
  },

  location : {
    type : DataTypes.TEXT
  },

  remote : {
    type : DataTypes.BOOLEAN
  },

  isUrgent : {
    type : DataTypes.BOOLEAN
  },

  salary : {
    type : DataTypes.INTEGER
  },

  workTimes : {
    type : DataTypes.TEXT
  },

  cooperationType : {
    type : DataTypes.TEXT
  },

  businessTrips : {
    type : DataTypes.TEXT
  },

  benefits : {
    type : DataTypes.TEXT
  },

  abilityForBoss : {
    type : DataTypes.TEXT
  },

  description : {
    type : DataTypes.TEXT
  },

  selected : {
    type : DataTypes.BOOLEAN
  }
})

Ad.sync()

module.exports = Ad
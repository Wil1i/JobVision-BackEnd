const db = require("../configs/db")
const {DataTypes} = require("sequelize")

const User = db.define("users", {
  id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },

  username : {
    type : DataTypes.TEXT
  },

  firstName : {
    type : DataTypes.TEXT
  },

  lastName : {
    type : DataTypes.TEXT
  },

  phone : {
    type : DataTypes.TEXT
  },

  profile : {
    type : DataTypes.TEXT
  },

  score : {
    type : DataTypes.INTEGER
  },

  about : {
    type : DataTypes.TEXT
  },

  birthday : {
    type : DataTypes.TEXT
  },

  isAccountPremium : {
    type : DataTypes.BOOLEAN
  },

  premiumEndDate : {
    type : DataTypes.DATE
  },

  status : {
    type : DataTypes.TEXT // Banned - timeout
  }
})

User.sync()

module.exports = User
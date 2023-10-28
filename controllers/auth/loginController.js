const config = require("../../configs/config.json")
const User = require("../../models/User")
const jwt = require("jsonwebtoken")

const post = async (req, res) => {
  let userValidation = req.body.phone
  let phone = true

  if(!userValidation) {
    userValidation = req.body.username
    phone = false
  }
  if(!userValidation) return res.json({ok : false, err : "user validation error"})

  let findUser;
  (phone)
    ? findUser = await User.findOne({where : {phone : req.body.phone}})
    : findUser = await User.findOne({where : {username : req.body.username}})

  if(!findUser) return res.json({ok : false, err : "user not defined"})

  const token = jwt.sign({id : findUser.id, session : findUser.session}, config.secret, {expiresIn: "30d"})

  res.json({ok : true, token})
}

module.exports = {
  post
}
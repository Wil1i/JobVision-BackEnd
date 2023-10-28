const User = require("../../models/User")
const config = require("../../configs/config.json")
const jwt = require("jsonwebtoken")

const post = async (req, res) => {
  const isPhoneUsed = await User.findOne({where : {phone : req.body.phone}})
  if(isPhoneUsed) return res.json({ok : false, err : "phone number is used"})

  const isUsernameUsed = await User.findOne({where : {username : req.body.username}})
  if(isUsernameUsed) return res.json({ok : false, err : "username is used"})

  try{
    const createdUser = await User.create({
      username : req.body.username,
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      phone : req.body.phone,
      birthday : req.body.birthday,
    })
    const token = jwt.sign({id : createdUser.id, session : createdUser.session}. config.secret, {expiresIn : "30d"})

    res.json({ok : true, token})
  }catch(e){
    res.json({ok : false, err : e})
  }
}

module.exports = {
  post
}
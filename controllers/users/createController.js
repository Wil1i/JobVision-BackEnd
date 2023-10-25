const User = require("../../models/User")

const post = async (req, res) => {
	try{
		const newUser = await User.create(req.body)
		res.json({ok : true, user : newUser})
	}catch(err){
		res.json({ok : false, err})
	}

}

module.exports = {
	post
}

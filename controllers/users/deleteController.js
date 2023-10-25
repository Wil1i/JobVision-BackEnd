const User = require("../../models/User")

const post = async (req, res) => {
	if(!req.body.id) return res.json({ok : false, err : "Paramteres undefined [id]"})

	const findUser = await User.findByPk(req.body.id)
	if(!findUser) return res.json({ok : false, err : "User is not defined"})

	try{
		await findUser.destroy()
		res.json({ok : true})
	}catch(err){
		res.json({ok : false, err})
	}
}

module.exports = {
	post
}

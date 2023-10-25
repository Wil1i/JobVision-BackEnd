const User = require("../../models/User")

const get = async (req, res) => {
	if(!req.body.id) return res.json({ok : false, err : "Parameters undefined [id]"})

	const findUser = await User.findByPk(req.body.id)
	if(!findUser) return res.json({ok : false, err : "User is not defined"})
	
	res.json({ok : true, user : findUser})
}

module.exports = {
	get
}

const User = require("../../models/User")

const get = async (req, res) => {
	const allUsers = await User.findAll()
	res.json({ok : true, users : allUsers})
}

module.exports = {
	get
}

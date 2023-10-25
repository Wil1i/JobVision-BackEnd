const Company = require("../../models/Company")

const post = async (req, res) => {
	if(!req.body.id) return res.json({ok : false, err : "Parameters undefined [id]"})

	const getCompany = await Company.findByPk(req.body.id)
	if(!getCompany) return res.json({ok : false, err : "Company is not defined"})

	await getCompany.destroy()
	res.json({ok : true})
}

module.exports = {
	post
}

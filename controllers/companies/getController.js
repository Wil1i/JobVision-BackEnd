const Company = require("../../models/Company")

const get = async (req, res) => {
	if(!req.query.id) return res.json({ok : false, err :"Parameters undefined [id]"})

	const getCompany = await Company.findByPk(req.query.id)
	if(!getCompany) return res.json({ok : false, err : "Company is not defined"})

	res.json({ok : true, company : getCompany})
}

module.exports = {
	get
}

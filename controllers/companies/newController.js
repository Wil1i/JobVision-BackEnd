const Company = require("../../models/Company")

const post = async (req, res) => {
	try{
		const newCompany = await Company.create(req.body)
		res.json({ok : true, company : newCompany })
	} catch(err){
		res.json({ok : false, err})
	}
}

module.exports = {
	post
}

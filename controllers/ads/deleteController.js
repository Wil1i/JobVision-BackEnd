const Ad = require("../../models/Ad")

const post = async (req, res) => {
	if(!req.body.id) return res.json({ok : false, err : "Parameters undefined [id]"})

	const ad = await Ad.findByPk(req.body.id)
	if(!ad) return res.json({ok : false, err : "Ad id is not correct"})

	await ad.destroy()
	res.json({ok : true})
}

module.exports = {
	post
}

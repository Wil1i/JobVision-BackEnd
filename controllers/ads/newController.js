const Ad = require("../../models/Ad")

const post = async (req, res) => {
	const newAd = await Ad.create(req.body)
	res.json({ok : true, ad : newAd})
}

module.exports = {
	post
}

const Ad = require("../../models/Ad")

const get = async (req, res) => {
	const allAds = await Ad.findAll()

	res.json({ok : true, ads: allAds})
}

module.exports = {
	get
}

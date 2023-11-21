const mongoose = require('mongoose');

const connect = async (db_url) => {
	try {
		await mongoose.connect(db_url)
		console.log('MongoDB connected!')
	} catch (error) {
		console.log(error.message)
	}
}

module.exports = {connect};
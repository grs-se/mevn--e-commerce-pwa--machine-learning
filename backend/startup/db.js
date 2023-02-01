const mongoose = require('mongoose');
let winston = require('winston');

module.exports = function () {
	mongoose.set('strictQuery', true);
	mongoose
		.connect('mongodb://localhost:27017/olx', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000,
			autoIndex: false, // Don't build indexes
			maxPoolSize: 10, // Maintain up to 10 socket connections
			socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
			family: 4, // Use IPv4, skip trying IPv6
		})
		.then(() => {
			winston.info(`Connected to MongoDB`);
		})
		.catch((err) => console.log(`Could not connect to MongoDB`, err));
};

const config = require('config');

module.exports = function () {
	if (!config.get('jwtPrivateKey')) {
		console.log('Fatal Error: jwt private key is not defined.');
		process.exit(1);
	}
};

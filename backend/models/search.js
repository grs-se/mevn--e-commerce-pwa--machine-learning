const mongoose = require('mongoose');
const Joi = require('joi');

const SearchSchema = new mongoose.Schema({
	data: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Products',
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const UserSearches = mongoose.model('UserSearches', SearchSchema);

const validateSearch = (search) => {
	const schema = Joi.object({
		data: Joi.string().required(),
		user: Joi,
	});

	return schema.validate(search);
};

exports.UserSearches = UserSearches;
exports.validate = validateSearch;

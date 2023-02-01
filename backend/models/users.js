const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 50,
	},
	last_name: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 50,
	},
	gender: {
		type: String,
		required: false,
	},
	birth_day: {
		type: String,
		required: false,
	},
	profile_img: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 1024,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ _id: this._id, isAdmin: this.isAdmin },
		config.get("jwtPrivateKey")
	);
	return token;
};

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
	const schema = Joi.object({
		first_name: Joi.string().min(5).max(50).required(),
		last_name: Joi.string().min(5).max(50).required(),
		gender: Joi.string(),
		birth_day: Joi.string(),
		profile_img: Joi.string(),
		email: Joi.string().email().min(5).max(500).required(),
		password: Joi.string().min(8).max(1024).required(),
		isAdmin: Joi.boolean(),
	});

	return schema.validate(user);
};

exports.User = User;
exports.validate = validateUser;

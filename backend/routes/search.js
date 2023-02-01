const { UserSearches } = require('../models/search');
const { Products } = require('../models/products');
const auth = require('../middleware/auth');

const express = require('express');
const router = express.Router();

// unauthenticated user search
router.get('/:SearchData', async (req, res) => {
	let regex = new RegExp(req.params.SearchData, 'i');

	const SearchResult = await Products.find({
		$or: [{ name: regex }, { desc: regex }],
	}).limit(6);
	res.send(SearchResult);
});

// with auth users
router.get('/user/:SearchData', auth, async (req, res) => {
	let regex = new RegExp(req.params.SearchData, 'i');

	const SearchResult = await Products.find({
		$or: [{ name: regex }, { desc: regex }],
	}).limit(6);
	// user & UserSearch
	for (let index = 0; index < SearchResult.length; index++) {
		let SearchData = SearchResult[index]._id;
		let userID = req.user._id;
		let search = new UserSearches(
			{ data: SearchData, user: userID },
			{ new: true, userFindAndModify: false }
		);

		await search.save();
	}
	res.send(SearchResult);
});

module.exports = router;

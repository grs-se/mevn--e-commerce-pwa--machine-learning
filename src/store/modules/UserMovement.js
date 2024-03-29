import axios from 'axios';
// const port = process.env.PORT || 5000;
// const URL_backend = `http://localhost:${port}/api`;
const URL_backend = `https://olx-vue--machine-learning.herokuapp.com/api`;

const state = {
	UserMovement: {
		Search: [],
		Cart: [],
		Items: [],
	},
};

const getters = {
	AllUserMovement: (state) => state.UserMovement,
};

const actions = {
	async SetUserMovementSearch({ commit }) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;

		axios
			.get(`${URL_backend}/machine_learning/SearchData`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('Result', res.data);
				commit('SetUserMovementSearch', '');
			});
	},
	async SetUserMovementCart({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;

		axios
			.patch(
				`${URL_backend}/machine_learning/ml_cart/${data}`,
				{},
				{
					headers: { 'x-auth-token': Tok },
				}
			)
			.then((res) => {
				console.log('Result', res.data);
				commit('SetUserMovementCart', data);
			});
	},
	async SetUserMovementItem({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;

		axios
			.patch(`${URL_backend}/machine_learning/ml_products/${data}`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('Result', res.data);
				commit('SetUserMovementItem', data);
			});
	},
};

const mutations = {
	// Search
	SetUserMovementSearch: (state, newusmoveSearch) =>
		state.UserMovement.Search.unshift(newusmoveSearch),
	// Cart
	SetUserMovementCart: (state, newusmoveCart) =>
		(state.UserMovement.Cart = newusmoveCart),
	// Items
	SetUserMovementItem: (state, newusmoveItem) =>
		state.UserMovement.Items.unshift(newusmoveItem),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

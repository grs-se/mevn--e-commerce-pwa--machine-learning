import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

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
		let Tok = JSON.parse(localStorage.getItem('Auth').Token);

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
		let Tok = JSON.parse(localStorage.getItem('Auth').Token);

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
	async SetUserMovementItems({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth').Token);

		axios
			.patch(`${URL_backend}/machine_learning/ml_products/${data}`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('Result', res.data);
				commit('SetUserMovementItems', data);
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
	SetUserMovementItem: (state, newusmoveItems) =>
		(state.UserMovement.Items = newusmoveItems),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

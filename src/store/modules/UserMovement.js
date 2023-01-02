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
	async SetUserMovementSearch({ commit }, data) {
		commit("SetUserMovementSearch", data);
	},
	async SetUserMovementCart({ commit }, data) {
		commit("SetUserMovementCart", data);
	},
	async SetUserMovementItems({ commit }, data) {
		commit("SetUserMovementItems", data);
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

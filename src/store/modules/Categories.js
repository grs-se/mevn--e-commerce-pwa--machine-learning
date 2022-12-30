const state = {
	categoriesList: [
		{ id: 1, name: "phone" },
		{ id: 2, name: "laptop" },
		{ id: 3, name: "cameras" },
		{ id: 4, name: "shirts" },
		{ id: 5, name: "shoes" },
		{ id: 6, name: "pants" },
	],
	non: "",
};

const getters = {
	allCategories: (state) => state.categoriesList,
};

const actions = {
	async GetCategories({ commit }) {
		const newCatData = [
			{ id: 11, name: "phone C" },
			{ id: 22, name: "laptop C" },
			{ id: 33, name: "cameras C" },
			{ id: 44, name: "shirts C" },
			{ id: 55, name: "shoes C" },
			{ id: 66, name: "pants C" },
		];
		commit("setCategories", newCatData);
	},
	async GetCatById({ commit }, ID) {
		let item = state.categoriesList.filter((x) => x.id == ID);
		// console.log("item id", ID, item);
		commit("non");
		return item;
	},
};

const mutations = {
	setCategories: (state, categories) => (state.categoriesList = categories),
	non: (state) => (state.non = ""),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

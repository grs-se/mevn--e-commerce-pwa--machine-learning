const state = {
	CategoriesList: [],
	non: "",
};

const getters = {
	AllCategories: (state) => state.CategoriesList,
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
		let item = state.CategoriesList.filter((x) => x.id == ID);
		// console.log("item id", ID, item);
		commit("non");
		return item;
	},
};

const mutations = {
	setCategories: (state, categories) => (state.CategoriesList = categories),
	non: (state) => (state.non = ""),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

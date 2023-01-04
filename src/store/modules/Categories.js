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
		commit("GetCategories", newCatData);
	},
	async GetCatById({ commit }, ID) {
		let item = state.CategoriesList.filter((x) => x.id == ID);
		// console.log("item id", ID, item);
		commit("non");
		return item;
	},
	async ADD_NEW_CAT({ commit }, data) {
		let NewDataArr = {};
		let newID = Math.floor(Math.random() * 50) + 10;
		NewDataArr = { id: newID, name: data.NewCatName };
		commit("NewCategories", NewDataArr);
	},
	async EditOneCat({ commit }, data) {
		let objIndex = state.CategoriesList.findIndex((obj) => obj.id === data.ID);
		let name = data.name;
		let newDataObj = { objIndex, name };
		commit("EditOneCategory", newDataObj);
	},
	async DeleteOneCat({ commit }, data) {
		let newArrDel = state.CategoriesList.filter((x) => {
			return x.id != data.ID;
		});
		commit("ResetAndDelete", newArrDel);
	},
	async GetCatByPageNum({ commit }) {
		const newCatData = [
			{ id: 77, name: "phone P" },
			{ id: 88, name: "laptop P" },
			{ id: 99, name: "cameras P" },
			{ id: 100, name: "shirts P" },
			{ id: 101, name: "shoes P" },
			{ id: 102, name: "pants P" },
		];
		commit("GetCategories", newCatData);
	},
};

const mutations = {
	GetCategories: (state, categories) => (state.CategoriesList = categories),
	NewCategories: (state, newData) => state.CategoriesList.unshift(newData),
	EditOneCategory: (state, NewDataObj) =>
		(state.CategoriesList[NewDataObj.objIndex].name = NewDataObj.name),
	ResetAndDelete: (state, newArrDel) => (state.CategoriesList = newArrDel),
	non: (state) => (state.non = ""),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

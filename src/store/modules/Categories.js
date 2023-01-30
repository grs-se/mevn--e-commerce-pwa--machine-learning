import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

const state = {
	CategoriesList: [],
	non: '',
};

const getters = {
	AllCategories: (state) => state.CategoriesList,
};

const actions = {
	async GetCategories({ commit }) {
		axios.get(`${URL_backend}/categories/CatByPage/${1}`).then((res) => {
			commit('setCategories', res.data);
		});
	},
	async GetCatByPageNum({ commit }, PageNum) {
		axios.get(`${URL_backend}/categories/CatByPage/${PageNum}`).then((res) => {
			commit('setCategories', res.data);
		});
	},
	async ADD_NEW_CAT({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth').Token);
		axios
			.post(
				`${URL_backend}/categories`,
				{
					name: data.NewCatName,
				},
				{ headers: { 'x-auth-token': Tok } }
			)
			.then((res) => {
				commit('NewCategories', res.data);
			});
	},
	async EditOneCat({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth').Token);
		axios
			.put(
				`${URL_backend}/categories/${data.ID}`,
				{
					name: data.NewCatName,
				},
				{ headers: { 'x-auth-token': Tok } }
			)
			.then(() => {
				let objIndex = state.CategoriesList.findIndex(
					(obj) => obj.id === data.ID
				);
				let name = data.name;
				let newDataObj = { objIndex, name };
				commit('EditOneCategory', newDataObj);
			})
			.catch((err) => {
				console.log(err.response.data.msg);
			});
	},
	async DeleteOneCat({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth').Token);
		axios
			.delete(`${URL_backend}/categories/${data.ID}`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('Deleted Cat successfully', res.data);

				let newArrDel = state.CategoriesList.filter((x) => {
					return x.id != data.ID;
				});
				commit('ResetAndDelete', newArrDel);
			})
			.catch((err) => {
				console.log(err.response.data.msg);
			});
	},
	async GetCatById({ commit }, ID) {
		axios
			.get(`${URL_backend}/categories/${ID}`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				commit('non');
				return res.data;
			});
	},
};

const mutations = {
	setCategories: (state, categories) => (state.CategoriesList = categories),
	NewCategories: (state, newData) => state.CategoriesList.unshift(newData),
	EditOneCategory: (state, NewDataObj) =>
		(state.CategoriesList[NewDataObj.objIndex].name = NewDataObj.name),
	ResetAndDelete: (state, newArrDel) => (state.CategoriesList = newArrDel),
	non: (state) => (state.non = ''),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

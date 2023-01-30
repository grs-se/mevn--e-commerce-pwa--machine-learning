import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

const state = {
	UsersList: [],
};

const getters = {
	AllUsers: (state) => state.UsersList,
};

const actions = {
	async GetUserList({ commit }) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;

		axios
			.get(`${URL_backend}/users/${1}`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('UserList', res.data);
				commit('SetUserList', res.data);
			});
	},
	async GetUserByPageNum({ commit }, PageNum) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;

		axios
			.get(`${URL_backend}/users/${PageNum}`, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('UserList by pageNum', res.data);
				commit('SetUserList', res.data);
			});
	},
	async EditOneUser({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;

		axios
			.put(
				`${URL_backend}/users/Role`,
				{ _id: data.ID, isAdmin: data.isAdmin },
				{
					headers: { 'x-auth-token': Tok },
				}
			)
			.then(() => {
				let objIndex = state.UsersList.findIndex((obj) => obj.id == data.id);
				let isAdmin = data.isAdmin;
				let NewDataObj = { objIndex, isAdmin };
				commit('EditOneUser', NewDataObj);
			})
			.catch((err) => {
				console.log(err.response.data.msg);
			});
	},
};

const mutations = {
	SetUserList: (state, data) => (state.UsersList = data),
	EditOneUser: (state, newData) =>
		(state.UsersList[newData.objIndex].isAdmin = newData.isAdmin),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

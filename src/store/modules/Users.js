import axios from 'axios';
const URL_backend = `https://olx-vue.herokuapp.com/api`;
// const port = process.env.PORT || 3000;
// const URL_backend = `http://localhost:${port}/api`;

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
				// console.log('data', data);
				let objIndex = state.UsersList.findIndex(
					// BE CAREFUL WITH THIS LINE!!!
					// data._id does not return an error but may sometimes turn all users to isAdmin!!
					// ((obj) => obj._id == data.id);
					//
					(obj) => obj.id == data._id
				);
				let isAdmin = data.isAdmin;
				let NewDataObj = { objIndex, isAdmin };
				commit('EditOneUser', NewDataObj);
			});
		// .catch((err) => {
		// console.log(err.response.data.msg);
		// });
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

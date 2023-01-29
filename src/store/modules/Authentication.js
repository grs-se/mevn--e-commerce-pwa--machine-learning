const state = {
	isAuthenticated: { isLoggedIn: false, isAdmin: false, Token: null },
};

const getters = {
	UserAuth: (state) => state.isAuthenticated,
};

const actions = {
	async SetUserAuth({ commit }, data) {
		// this data will include if user is logged in and if is user admin
		let newStatus = {
			isLoggedIn: data.isLoggedIn,
			isAdmin: data.isAdmin,
			Token: data.Token,
		};
		localStorage.setItem('Auth', JSON.stringify(newStatus));
		commit('SetAndGetUserAuthStatus', newStatus);
	},
	async GetUserAuth({ commit }) {
		if (localStorage.getItem('Auth')) {
			let AuthData = JSON.parse(localStorage.getItem('Auth'));
			commit('SetAndGetUserAuthStatus', AuthData);
		}
	},
};

const mutations = {
	SetAndGetUserAuthStatus: (state, UserAuthStatus) => (
		(state.isAuthenticated.isAdmin = UserAuthStatus.isAdmin),
		(state.isAuthenticated.isLoggedIn = UserAuthStatus.isLoggedIn),
		(state.isAuthenticated.Token = UserAuthStatus.Token)
	),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

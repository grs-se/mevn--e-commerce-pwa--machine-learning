const state = {
	IsAuthenticated: { isLoggedIn: false, isAdmin: false },
};

const getters = {
	UserAuth: (state) => state.IsAuthenticated,
};

const actions = {
	async SetUserAuth({ commit }, data) {
		// this data will include if user is logged in and if is user admin
		let newStatus = {
			isLoggedin: data.isLoggedIn,
			isAdmin: data.isAdmin,
		};
		localStorage.setItem("Auth", JSON.stringify(newStatus));
		commit("SetAndGetUserAuthStatus", newStatus);
	},
	async GetUserAuth({ commit }) {
		if (localStorage.getItem("Auth")) {
			let AuthData = JSON.parse(localStorage.getItem("Auth"));
			commit("SetAndGetUserAuthStatus", AuthData);
		}
	},
};

const mutations = {
	SetAndGetUserAuthStatus: (state, UserAuthStatus) => (
		(state.IsAuthenticated.isAdmin = UserAuthStatus.isAdmin),
		(state.IsAuthenticated.isLoggedIn = UserAuthStatus.isLoggedIn)
	),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

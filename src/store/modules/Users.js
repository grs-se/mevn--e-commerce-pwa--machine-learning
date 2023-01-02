const state = {
	UsersList: [
		{
			id: 5,
			name: "ahmed",
			isAdmin: true,
			imgSrc:
				"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
		},
		{
			id: 6,
			name: "hoda",
			isAdmin: false,
			imgSrc:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mZmMcQKh388FZtY7ZLydeYeIEboJZv3zUw&usqp=CAU",
		},
		{
			id: 7,
			name: "mohamed",
			isAdmin: true,
			imgSrc:
				"https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg",
		},
		{
			id: 8,
			name: "soki",
			isAdmin: false,
			imgSrc:
				"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
		},
		{
			id: 9,
			name: "mod",
			isAdmin: true,
			imgSrc:
				"https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg",
		},
		{
			id: 10,
			name: "rana",
			isAdmin: false,
			imgSrc:
				"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
		},
	],
};

const getters = {
	AllUsers: (state) => state.UsersList,
};

const actions = {
	async GetUserList({ commit }) {
		const NewUserListData = [
			{
				id: 11,
				name: "P ahmed",
				isAdmin: true,
				imgSrc:
					"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
			},
			{
				id: 12,
				name: "P hoda",
				isAdmin: false,
				imgSrc:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mZmMcQKh388FZtY7ZLydeYeIEboJZv3zUw&usqp=CAU",
			},
			{
				id: 13,
				name: "P mohamed",
				isAdmin: true,
				imgSrc:
					"https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg",
			},
			{
				id: 14,
				name: "P soki",
				isAdmin: false,
				imgSrc:
					"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
			},
			{
				id: 15,
				name: "P mod",
				isAdmin: true,
				imgSrc:
					"https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg",
			},
			{
				id: 16,
				name: "P rana",
				isAdmin: false,
				imgSrc:
					"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
			},
		];
		commit("SetUserList", NewUserListData);
	},
	async GetUsByPNum({ commit }, PageNum) {
		console.log("Page num", PageNum);
		const NewUsDataArr = [
			{
				id: 17,
				name: "X ahmed",
				isAdmin: true,
				imgSrc:
					"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
			},
			{
				id: 18,
				name: "X hoda",
				isAdmin: false,
				imgSrc:
					"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mZmMcQKh388FZtY7ZLydeYeIEboJZv3zUw&usqp=CAU",
			},
			{
				id: 19,
				name: "X mohamed",
				isAdmin: true,
				imgSrc:
					"https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg",
			},
			{
				id: 20,
				name: "X soki",
				isAdmin: false,
				imgSrc:
					"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
			},
			{
				id: 21,
				name: "X mod",
				isAdmin: true,
				imgSrc:
					"https://png.pngtree.com/element_our/png_detail/20181022/man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png_206531.jpg",
			},
			{
				id: 22,
				name: "X rana",
				isAdmin: false,
				imgSrc:
					"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400087/75406332-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
			},
		];
		commit("SetUserList", NewUsDataArr);
	},
	async EditOneUser({ commit }, data) {
		let objIndex = state.UsersList.findIndex((obj) => obj.id == data.id);
		let isAdmin = data.isAdmin;
		let NewDataObj = { objIndex, isAdmin };
		commit("EditOneUser", NewDataObj);
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

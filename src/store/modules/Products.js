import axios from 'axios';
const URL_backend = `https://olx-vue.herokuapp.com/api`;
// const port = process.env.PORT || 3000;
// const URL_backend = `http://localhost:${port}/api`;

const state = {
	ProductsList: [],
	// ProdListByPageNum: [],
	non: '',
};

const getters = {
	AllProducts: (state) => state.ProductsList,
};

const actions = {
	async GetProducts({ commit }) {
		axios.get(`${URL_backend}/products/ProdByPage/${1}`).then((res) => {
			commit('setProducts', res.data);
		});
	},
	async GetProdById({ commit }, ID) {
		axios.get(`${URL_backend}/products/${ID}`).then((res) => {
			commit('non');
			return res.data;
		});
	},
	async GetProdByPageNum({ commit }, pageNum) {
		axios.get(`${URL_backend}/products/ProdByPage/${pageNum}`).then((res) => {
			commit('SetProdByPageNum', res.data);
		});
	},
	async ADD_NEW_PRODUCT({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;
		axios
			.post(`${URL_backend}/products`, data, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				commit('NewProducts', res.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	},
	async EditOneProduct({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;
		axios
			.put(`${URL_backend}/products/${data._id}`, data, {
				headers: { 'x-auth-token': Tok },
			})
			.then(() => {
				let objIndex = state.ProductsList.findIndex(
					(obj) => obj._id == data._id
				);
				let name = data.name;
				let prod_categories = data.prod_categories;
				let desc = data.desc;
				let price = data.price;
				let product_img = data.product_img;
				let NewDataObj = {
					objIndex,
					name,
					prod_categories,
					desc,
					price,
					product_img,
				};

				commit('EditOneProduct', NewDataObj);
			});
	},
	async DeleteOneProduct({ commit }, data) {
		let Tok = JSON.parse(localStorage.getItem('Auth')).Token;
		axios
			.delete(`${URL_backend}/products/${data._id}`, data, {
				headers: { 'x-auth-token': Tok },
			})
			.then((res) => {
				console.log('Deleted product successfully', res.data);
				let newArrDel = state.ProductsList.filter((x) => {
					return x.id != data.ID;
					// return x._id != data._id;
				});
				commit('ResetAndDelete', newArrDel);
			});
	},
};
const mutations = {
	// work with Products List
	setProducts: (state, newProdData) => (state.ProductsList = newProdData),
	// new prod
	NewProducts: (state, newProd) => state.ProductsList.unshift(newProd),
	// edit prod
	EditOneProduct: (state, NewDataObj) => (
		(state.ProductsList[NewDataObj.objIndex].name = NewDataObj.name),
		(state.ProductsList[NewDataObj.objIndex].prod_categories =
			NewDataObj.prod_categories),
		(state.ProductsList[NewDataObj.objIndex].desc = NewDataObj.desc),
		(state.ProductsList[NewDataObj.objIndex].price = NewDataObj.price),
		(state.ProductsList[NewDataObj.objIndex].product_img =
			NewDataObj.product_img)
	),
	// Could use setProducts operation for both ResetAndDelete and SetProdByPageNum - same code
	// delete prod
	ResetAndDelete: (state, newArrDel) => (state.ProductsList = newArrDel),
	// set prod by page num
	SetProdByPageNum: (state, NewProdDataArr) =>
		(state.ProductsList = NewProdDataArr),

	// does not do anything
	non: (state) => (state.non = ''),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

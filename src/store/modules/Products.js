const state = {
	ProductsList: [
		{
			id: "12",
			CatId: "11",
			name: "i Phone 11 Pro s",
			desc: "iphoe 11 pro back",
			price: "599",
			imgSrc:
				"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
		},
		{
			id: "14",
			CatId: "22",
			name: "Huawei s hewr",
			desc: "Huawei Huawei",
			price: "1000",
			imgSrc:
				"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
		},
		{
			id: "16",
			CatId: "33",
			name: "Nike shirt s",
			desc: "red Nike shirt",
			price: "12",
			imgSrc:
				"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
		},
		{
			id: "18",
			CatId: "44",
			name: "Timberland shirt",
			desc: "black templerland shirt",
			price: "20",
			imgSrc:
				"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],gory[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
		},
		{
			id: "20",
			CatId: "55",
			name: "Addidas shirt",
			desc: "Addidas wight shirt",
			price: "13",
			imgSrc:
				"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
		},
		{
			id: "24",
			CatId: "66",
			name: "Nike shoes",
			desc: "black Nike shoes",
			price: "50",
			imgSrc:
				"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
		},
		{
			id: "26",
			CatId: "77",
			name: "Nikon Camera",
			desc: "Nikon camera description",
			price: "2400",
			imgSrc:
				"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
		},
		{
			id: "28",
			CatId: "88",
			name: "Samsung Watch",
			desc: "Samsung Glaxey Watch",
			price: "5",
			imgSrc:
				"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
		},
	],
	// ProdListByPageNum: [],
	non: "",
};

const getters = {
	AllProducts: (state) => state.ProductsList,
};

const actions = {
	async GetProducts({ commit }) {
		const newProdData = [
			{
				id: "12",
				CatId: "11",
				name: "N i Phone 11 Pro s",
				desc: "iphoe 11 pro back",
				price: "599",
				imgSrc:
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
			},
			{
				id: "14",
				CatId: "22",
				name: "N Huawei s hewr",
				desc: "Huawei Huawei",
				price: "1000",
				imgSrc:
					"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
			},
			{
				id: "16",
				CatId: "33",
				name: "N Nike shirt s",
				desc: "red Nike shirt",
				price: "12",
				imgSrc:
					"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
			},
			{
				id: "18",
				CatId: "44",
				name: "N Timberland shirt",
				desc: "black templerland shirt",
				price: "20",
				imgSrc:
					"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],gory[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
			},
			{
				id: "20",
				CatId: "55",
				name: "N Addidas shirt",
				desc: "Addidas wight shirt",
				price: "13",
				imgSrc:
					"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
			},
			{
				id: "24",
				CatId: "66",
				name: "N Nike shoes",
				desc: "black Nike shoes",
				price: "50",
				imgSrc:
					"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
			},
			{
				id: "26",
				CatId: "77",
				name: "N Nikon Camera",
				desc: "Nikon camera description",
				price: "2400",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
			},
			{
				id: "28",
				CatId: "88",
				name: "N Samsung Watch",
				desc: "Samsung Glaxey Watch",
				price: "5",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
			},
		];
		commit("setProducts", newProdData);
	},
	async GetProdById({ commit }, ID) {
		let itemINDEX = state.ProductsList.filter((x) => x.id == ID);
		commit("non");
		return itemINDEX;
	},
	async GetProdByPageNum({ commit }, pageNum) {
		console.log("pn", pageNum);
		const NewProdDataArr = [
			{
				id: "12",
				CatId: "11",
				name: "PN i Phone 11 Pro s",
				desc: "iphoe 11 pro back",
				price: "599",
				imgSrc:
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
			},
			{
				id: "14",
				CatId: "22",
				name: "PN Huawei s hewr",
				desc: "Huawei Huawei",
				price: "1000",
				imgSrc:
					"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
			},
			{
				id: "16",
				CatId: "33",
				name: "PN Nike shirt s",
				desc: "red Nike shirt",
				price: "12",
				imgSrc:
					"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
			},
			{
				id: "18",
				CatId: "44",
				name: "PN Timberland shirt",
				desc: "black templerland shirt",
				price: "20",
				imgSrc:
					"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],gory[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
			},
			{
				id: "20",
				CatId: "55",
				name: "PN Addidas shirt",
				desc: "Addidas wight shirt",
				price: "13",
				imgSrc:
					"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
			},
			{
				id: "24",
				CatId: "66",
				name: "PN Nike shoes",
				desc: "black Nike shoes",
				price: "50",
				imgSrc:
					"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
			},
			{
				id: "26",
				CatId: "77",
				name: "PN Nikon Camera",
				desc: "Nikon camera description",
				price: "2400",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
			},
			{
				id: "28",
				CatId: "88",
				name: "PN Samsung Watch",
				desc: "Samsung Glaxey Watch",
				price: "5",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
			},
		];
		commit("SetProdByPageNum", NewProdDataArr);
	},
	async ADD_NEW_PRODUCT({ commit }, data) {
		let NewDataArr = {};
		let newId = Math.floor(Math.random() * 50) + 10;
		NewDataArr = {
			id: newId,
			name: data.name,
			CatId: data.CatId,
			desc: data.desc,
			price: data.price,
			imgSrc: data.imgSrc,
		};

		commit("NewProducts", NewDataArr);
	},
	async EditOneProduct({ commit }, data) {
		let objIndex = state.ProductList.findIndex((obj) => obj.id == data.id);
		let name = data.name;
		let CatId = data.CatId;
		let desc = data.desc;
		let price = data.price;
		let imgSrc = data.imgSrc;
		let NewDataObj = { objIndex, name, CatId, desc, price, imgSrc };

		commit("EditOneProduct", NewDataObj);
	},
	async DeleteOneProd({ commit }, data) {
		let newArrDel = state.ProductsList.filter((x) => {
			return x.id != data.id;
		});
		commit("ResetAndDelete", newArrDel);
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
		(state.ProductsList[NewDataObj.objIndex].CatId = NewDataObj.CatId),
		(state.ProductsList[NewDataObj.objIndex].desc = NewDataObj.desc),
		(state.ProductsList[NewDataObj.objIndex].price = NewDataObj.price),
		(state.ProductsList[NewDataObj.objIndex].imgSrc = NewDataObj.imgSrc)
	),
	// Could use setProducts operation for both ResetAndDelete and SetProdByPageNum - same code
	// delete prod
	ResetAndDelete: (state, newArrDel) => (state.ProductsList = newArrDel),
	// set prod by page num
	SetProdByPageNum: (state, NewProdDataArr) =>
		(state.ProductsList = NewProdDataArr),

	// does not do anything
	non: (state) => (state.non = ""),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

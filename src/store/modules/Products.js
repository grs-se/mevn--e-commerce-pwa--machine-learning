const state = {
	ProductsList: [
		{
			id: "12",
			name: "i Phone 11 Pro s",
			desc: "iphoe 11 pro back",
			price: "599",
			imgSrc:
				"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
		},
		{
			id: "14",
			name: "Huawei s hewr",
			desc: "Huawei Huawei",
			price: "1000",
			imgSrc:
				"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
		},
		{
			id: "16",
			name: "Nike shirt s",
			desc: "red Nike shirt",
			price: "12",
			imgSrc:
				"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
		},
		{
			id: "18",
			name: "Timberland shirt",
			desc: "black templerland shirt",
			price: "20",
			imgSrc:
				"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],gory[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
		},
		{
			id: "20",
			name: "Addidas shirt",
			desc: "Addidas wight shirt",
			price: "13",
			imgSrc:
				"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
		},
		{
			id: "24",
			name: "Nike shoes",
			desc: "black Nike shoes",
			price: "50",
			imgSrc:
				"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
		},
		{
			id: "26",
			name: "Nikon Camera",
			desc: "Nikon camera description",
			price: "2400",
			imgSrc:
				"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
		},
		{
			id: "28",
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
				name: "X i Phone 11 Pro s",
				desc: "iphoe 11 pro back",
				price: "599",
				imgSrc:
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
			},
			{
				id: "14",
				name: "X Huawei s hewr",
				desc: "Huawei Huawei",
				price: "1000",
				imgSrc:
					"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
			},
			{
				id: "16",
				name: "X Nike shirt s",
				desc: "red Nike shirt",
				price: "12",
				imgSrc:
					"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
			},
			{
				id: "18",
				name: "X Timberland shirt",
				desc: "black templerland shirt",
				price: "20",
				imgSrc:
					"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],gory[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
			},
			{
				id: "20",
				name: "X Addidas shirt",
				desc: "Addidas wight shirt",
				price: "13",
				imgSrc:
					"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
			},
			{
				id: "24",
				name: "X Nike shoes",
				desc: "black Nike shoes",
				price: "50",
				imgSrc:
					"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
			},
			{
				id: "26",
				name: "X Nikon Camera",
				desc: "Nikon camera description",
				price: "2400",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
			},
			{
				id: "28",
				name: "X Samsung Watch",
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
				name: "PN i Phone 11 Pro s",
				desc: "iphoe 11 pro back",
				price: "599",
				imgSrc:
					"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
			},
			{
				id: "14",
				name: "PN Huawei s hewr",
				desc: "Huawei Huawei",
				price: "1000",
				imgSrc:
					"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
			},
			{
				id: "16",
				name: "PN Nike shirt s",
				desc: "red Nike shirt",
				price: "12",
				imgSrc:
					"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
			},
			{
				id: "18",
				name: "PN Timberland shirt",
				desc: "black templerland shirt",
				price: "20",
				imgSrc:
					"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],gory[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
			},
			{
				id: "20",
				name: "PN Addidas shirt",
				desc: "Addidas wight shirt",
				price: "13",
				imgSrc:
					"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
			},
			{
				id: "24",
				name: "PN Nike shoes",
				desc: "black Nike shoes",
				price: "50",
				imgSrc:
					"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
			},
			{
				id: "26",
				name: "PN Nikon Camera",
				desc: "Nikon camera description",
				price: "2400",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
			},
			{
				id: "28",
				name: "PN Samsung Watch",
				desc: "Samsung Glaxey Watch",
				price: "5",
				imgSrc:
					"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
			},
		];
		commit("SetProdByPageNum", NewProdDataArr);
	},
};

const mutations = {
	// work with Products List
	setProducts: (state, newProdData) => (state.ProductsList = newProdData),
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

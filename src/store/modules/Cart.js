const state = {
	OriginalCartListData: [],
	non: "",
};

const getters = {
	AllCartItems: (state) => state.OriginalCartListData,
};

// Get // let FavData = JSON.parse(localStorage.getItem('Fav'));

// Set // localStorage.setItem('Fav', JSON.stringify(data));

// Remove // localStorage.removeItem('Fav');

const actions = {
	async GetCartItem({ commit }) {
		if (localStorage.getItem("Cart")) {
			const CartDataInLocalStorage = JSON.parse(localStorage.getItem("Cart"));
			commit("SetNew", CartDataInLocalStorage);
		} else {
			let emptyArr = [];
			const CartDataInLocalStorage = localStorage.setItem(
				"Cart",
				JSON.stringify(emptyArr)
			);
			commit("SetNew", CartDataInLocalStorage);
		}
	},
	async SetNewCartItem({ commit }, ID) {
		let defaultQuantity = 1;

		if (localStorage.getItem("Cart")) {
			let newItem = { id: ID, quantity: defaultQuantity };
			let CartData = JSON.parse(localStorage.getItem("Cart"));
			let ItemData = CartData.findIndex((obj) => obj.id == ID);
			if (ItemData !== -1) {
				let objIndex = CartData.findIndex((obj) => obj.id == ID);
				CartData[objIndex].quantity++;
				localStorage.setItem("Cart", JSON.stringify(CartData));
			} else {
				CartData.push(newItem);
				localStorage.setItem("Cart", JSON.stringify(CartData));
			}
			commit("SetNew", CartData);
		} else {
			let newItemDataArr = [{ id: ID, quantity: defaultQuantity }];
			localStorage.setItem("Cart", JSON.stringify(newItemDataArr));
			commit("SetNew", newItemDataArr);
		}
	},
	async ChangeItemQuantity({ commit }, data) {
		if (localStorage.getItem("Cart")) {
			let CartData = JSON.parse(localStorage.getItem("Cart"));
			let ItemData = CartData.findIndex((obj) => obj.id == data.ID);
			if (ItemData !== -1) {
				let objIndex = CartData.findIndex((obj) => obj.id == data.ID);
				CartData[objIndex].quantity = data.quantity;
				localStorage.setItem("Cart", JSON.stringify(CartData));
				commit("SetNew", CartData);
			}
		}
	},
	async RemoveItemFromCart({ commit }, ID) {
		if (localStorage.getItem("Cart")) {
			let CartData = JSON.parse(localStorage.getItem("Cart"));
			let ItemData = CartData.findIndex((obj) => obj.id == ID);
			if (ItemData !== -1) {
				CartData = CartData.filter((x) => {
					return x.id !== ID;
				});
				localStorage.setItem("Cart", JSON.stringify(CartData));
				commit("SetNew", CartData);
			}
		}
	},
	async CheckIfInCart({ commit }, ID) {
		if (localStorage.getItem("Cart")) {
			let CartData = JSON.parse(localStorage.getItem("Cart"));
			let ItemData = CartData.findIndex((obj) => obj.id == ID);

			let IsInCart;
			if (ItemData !== -1) {
				IsInCart = true;
			}
			if (ItemData == -1) {
				IsInCart = false;
			}
			commit("non");
			return IsInCart;
		}
	},
};

const mutations = {
	SetNew: (state, CartItems) => (state.OriginalCartListData = CartItems),
	non: (state) => (state.non = ""),
};

export default {
	state,
	getters,
	actions,
	mutations,
};

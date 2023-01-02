import { createStore } from "vuex";

import Products from "./modules/Products";
import Categories from "./modules/Categories";
import CartView from "./modules/Cart";
import Authentication from "./modules/Authentication";
import UserMovement from "./modules/UserMovement";

const store = createStore({
	modules: {
		Products,
		Categories,
		CartView,
		Authentication,
		UserMovement,
	},
});

export default store;

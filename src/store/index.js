import { createStore } from "vuex";

import Products from "./modules/Products";
import Categories from "./modules/Categories";
import Cart from "./modules/Cart";

const store = createStore({
	modules: {
		Products,
		Categories,
		Cart,
	},
});

export default store;

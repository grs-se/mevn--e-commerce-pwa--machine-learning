import { createStore } from "vuex";

import Products from "./modules/Products";
import Categories from "./modules/Categories";

const store = createStore({
	modules: {
		Products,
		Categories,
	},
});

export default store;

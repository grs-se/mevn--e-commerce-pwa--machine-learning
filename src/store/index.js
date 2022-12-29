import { createStore } from "vuex";

import Products from "./modules/Products";

const store = createStore({
	modules: {
		Products,
	},
});

export default store;

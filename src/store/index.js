import { createStore } from "vuex";

import Products from "./modules/Products";
import Categories from "./modules/Categories";
import Cart from "./modules/Cart";
import Authentication from "./modules/Authentication";
import UserMovement from "./modules/UserMovement";
import Users from "./modules/Users";

const store = createStore({
	modules: {
		Products,
		Categories,
		Cart,
		Authentication,
		UserMovement,
		Users,
	},
});

export default store;

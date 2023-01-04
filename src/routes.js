import { createRouter, createWebHistory } from "vue-router";

const Main = () => import("./components/Home/Main.vue");
const SpecificItem = () => import("./components/SpecificItem/SpecificItem.vue");
const Cart = () => import("./components/Cart/Cart.vue");
const LoginRegister = () =>
	import("./components/LoginRegister/LoginRegister.vue");
const UserProfile = () => import("./components/UserProfile/UserProfile.vue");
const SearchProduct = () =>
	import("./components/SearchProduct/SearchProduct.vue");
const Admin = () => import("./components/Admin/Admin.vue");
// import Categories from "./components/Admin/Categories.vue";
// const Cart = () => import("./components/Admin/Cart.vue");
// import Users from "./components/Admin/Users.vue";

import AuthGuard from "./Guards/AuthGuard.js";
import AdminGuard from "./Guards/AdminGuard.js";
import LoginRegGuard from "./Guards/LoginRegGuard.js";

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
	},
	{
		path: "/SpecificItem",
		name: "SpecificItem",
		component: SpecificItem,
	},
	{
		path: "/Cart",
		name: "Cart",
		component: Cart,
	},
	{
		path: "/LoginRegister",
		name: "LoginRegister",
		component: LoginRegister,
		beforeEnter: (to, from, next) => {
			LoginRegGuard(to, from, next);
		},
	},
	{
		path: "/UserProfile",
		name: "UserProfile",
		component: UserProfile,
		beforeEnter: (to, from, next) => {
			AuthGuard(to, from, next);
		},
	},
	{
		path: "/SearchProduct",
		name: "SearchProduct",
		component: SearchProduct,
	},
	{
		path: "/Admin",
		name: "Admin",
		component: Admin,
		beforeEnter: (to, from, next) => {
			AdminGuard(to, from, next);
		},
	},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

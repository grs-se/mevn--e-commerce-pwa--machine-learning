import { createRouter, createWebHistory } from "vue-router";

const Main = () => import("./components/Home/Main.vue");
const SpecificItem = () => import("./components/SpecificItem/SpecificItem.vue");
const Cart = () => import("./components/Cart/Cart.vue");
const LoginRegister = () =>
	import("./components/LoginRegister/LoginRegister.vue");

const routes = [
	{
		path: "/Main",
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
	},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

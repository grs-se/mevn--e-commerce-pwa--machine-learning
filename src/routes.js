import { createRouter, createWebHistory } from "vue-router";

const Main = () => import("./components/Home/Main.vue");
const SpecificItem = () => import("./components/SpecificItem/SpecificItem.vue");
const Cart = () => import("./components/Cart/Cart.vue");

const routes = [
	{
		path: "/main",
		name: "Main",
		component: Main,
	},
	{
		path: "/item",
		name: "SpecificItem",
		component: SpecificItem,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

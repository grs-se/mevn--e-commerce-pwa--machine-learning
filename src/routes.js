import { createRouter, createWebHistory } from "vue-router";

const MainView = () => import("@/components/home/Main.vue");
const SpecificItem = () => import("@/components/SpecificItem/SpecificItem.vue");

const routes = [
	{
		path: "/main",
		name: "Main",
		component: MainView,
	},
	{
		path: "/item",
		name: "SpecificItem",
		component: SpecificItem,
	},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

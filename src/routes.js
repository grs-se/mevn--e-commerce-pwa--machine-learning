import { createRouter, createWebHistory } from "vue-router";

const MainView = () => import("@/components/home/MainView.vue");

const routes = [
	{
		path: "/main",
		name: "Main",
		component: MainView,
	},
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

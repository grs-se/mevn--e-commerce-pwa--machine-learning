import { createRouter, createWebHashHistory } from "vue-router";

const MainView = () => import("@/components/home/MainView.vue");

const routes = [
	{
		path: "/main",
		name: "Main",
		component: MainView,
	},
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;

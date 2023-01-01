<template>
	<div id="app">
		<header-view />
		<router-view />
	</div>
</template>

<script>
import HeaderView from "./components/Header/Header.vue";
import { mapActions } from "vuex";
export default {
	name: "App",
	components: {
		HeaderView,
		// ...mapGetters(["AllProducts"]),
	},
	created() {
		// console.log("app vue Getters", this.AllProducts);
		this.GetCartItem();
	},
	methods: {
		...mapActions(["GetCartItem"]),
	},
};
</script>

<style>
.clear {
	width: 100%;
	height: 1px;
	clear: both;
	display: block;
}

.xp {
	padding: 10px;
	margin: 5% auto;
}

/* animation fade mode start here */

/* .fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
} */
</style>

<template>
	<div id="app">
		<header-view />
		<router-view />
	</div>
</template>

<script>
import HeaderView from "./components/Header/Header.vue";
// import { mapGetters, mapActions } from "vuex";
export default {
	name: "App",
	components: {
		HeaderView,
		// ...mapGetters(["AllProducts"]),
	},
	created() {
		// console.log("app vue Getters", this.AllProducts);
		// this.GetProducts();
	},
	// methods: {
	// 	...mapActions(["GetProducts"]),
	// },
};
</script>

<style></style>

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

<style></style>

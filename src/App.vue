<template>
	<div id="app">
		<h5>app component</h5>
		<router-view />
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	name: "App",
	computed: {
		...mapGetters(["AllProducts"]),
	},
	created() {
		console.log("app vue Getters", this.AllProducts);
		this.GetProducts();
	},
	methods: {
		...mapActions(["GetProducts"]),
	},
};
</script>

<style></style>

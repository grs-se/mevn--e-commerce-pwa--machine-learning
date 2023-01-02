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

/* slide */
.slide-enter {
	opacity: 0;
}

.slide-enter-active {
	animation: slide-in 1s ease-in forwards;
	transition: opacity 1s;
}

.slide-leave-active {
	animation: slide-in 1s ease-in forwards;
	transition: opacity 0s;
	opacity: 0;
	position: absolute;
}

@keyframes slide-in {
	from {
		/* transform: translateY(30px); */
		transform: translateX(30px);
	}
	to {
		transform: translateY(0);
		transform: translateX(0);
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
		transform: translateX(0);
	}
	to {
		/* transform: translateY(30px); */
		transform: translateX(30px);
	}
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

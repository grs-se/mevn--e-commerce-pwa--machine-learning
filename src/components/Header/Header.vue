<template>
	<div>
		<!-- Start of the navBar -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link to="/" class="navbar-brand">The App</router-link>

			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				@click="isActive = !isActive"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div
				:class="[
					isActive
						? 'collapse navbar-collapse show'
						: 'collapse navbar-collapse',
				]"
			>
				<ul class="navbar-nav mr-auto"></ul>
				<form class="form-inline my-2 my-lg-0">
					<!-- search start -->
					<search-view />
					<!-- search end -->

					<router-link to="/LoginRegister">
						<button class="btn btn-outline-primary my-2 my-sm-2 m-2">
							Login | Register
						</button></router-link
					>

					<button class="btn btn-outline-danger my-2 my-sm-2 m-2">
						Logout
					</button>

					<router-link to="/Cart">
						<button class="btn btn-outline-warning my-2 my-sm-2 m-2">
							Cart
						</button>
					</router-link>

					<router-link to="/Admin">
						<button class="btn btn-outline-danger my-2 my-sm-2 m-2">
							Admin
						</button>
					</router-link>

					<router-link to="/UserProfile">
						<button class="btn btn-outline-dark my-2 my-sm-2 m-2">
							Profile
						</button></router-link
					>
				</form>
			</div>
		</nav>
		<!-- end off the navbar  -->
	</div>
</template>

<script>
import SearchView from "./Search";
// import Cart from "../Cart/Cart";

export default {
	name: "HeaderView",
	// components: { Cart },
	components: {
		SearchView,
	},
	data() {
		return {
			isActive: false,
			auth: { isUserLoggedIn: false, isUserAdmin: false },
		};
	},
};
</script>

<style scoped>
.userWords {
	width: 80%;
	background-color: #f8f9fa !important;
	margin: 5px auto;
	font-style: italic;
	color: #007bff;
	padding: 10px;
}
</style>

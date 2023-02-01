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

					<router-link v-if="!auth.isUserLoggedIn" to="/LoginRegister">
						<button class="btn btn-outline-primary my-2 my-sm-2 m-2">
							Login | Register
						</button></router-link
					>

					<button
						v-if="auth.isUserLoggedIn"
						class="btn btn-outline-danger my-2 my-sm-2 m-2"
						@click="LogOutUser"
					>
						Logout
					</button>

					<router-link to="/Cart">
						<button class="btn btn-outline-warning my-2 my-sm-2 m-2">
							Cart
						</button>
					</router-link>

					<router-link v-if="auth.isUserLoggedIn" to="/Admin">
						<button class="btn btn-outline-danger my-2 my-sm-2 m-2">
							Admin
						</button>
					</router-link>

					<router-link v-if="auth.isUserLoggedIn" to="/UserProfile">
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
import SearchView from './Search';
import { mapGetters, mapActions } from 'vuex';

// import Cart from "../Cart/Cart";

export default {
	name: 'HeaderView',
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
	computed: {
		...mapGetters(['UserAuth']),
	},
	created() {
		this.GetUserData();
		// watch data changes
		this.$store.watch((state) => {
			console.log('storeChange', state);
			this.StoreDataChange(state);
		});
	},
	methods: {
		// vuex get Cat
		...mapActions(['GetUserAuth', 'SetUserAuth']),
		//
		GetUserData() {
			this.GetUserAuth();
			//rememper map get has UserAuth as object
			this.auth.isUserLoggedIn = this.UserAuth.isLoggedIn;
			this.auth.isUserAdmin = this.UserAuth.isAdmin;
			console.log('Auth from store', this.auth);
		},
		LogOutUser() {
			let data = { isLoggedIn: false, isAdmin: false };
			this.auth = { isUserLoggedIn: false, isUserAdmin: false };
			this.SetUserAuth(data);
		},
		StoreDataChange(state) {
			let data = state.Authentication.isAuthenticated;
			this.auth = {
				isUserLoggedIn: data.isLoggedIn,
				isUserAdmin: data.isAdmin,
			};
		},
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

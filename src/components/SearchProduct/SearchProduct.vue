<template>
	<center>
		<div>
			<h3>
				Searching for :
				<small>{{ SearchData }}</small>
			</h3>

			<div class="col-md-9">
				<div class="container">
					<div class="card-group">
						<transition-group name="fade" tag="div" class="row">
							<div
								v-for="item in ResultItems"
								:key="item._id"
								class="card col-md-4"
							>
								<img
									class="card-img-top"
									:src="item.product_img"
									alt="Card image cap"
								/>
								<div class="card-body">
									<h6>Price: £{{ item.price }}</h6>
									<h5 class="card-title">Card title</h5>
									<router-link
										:to="{ path: '/SpecificItem', query: { ID: item._id } }"
										class="card-title"
										>{{ item.name }}</router-link
									>
									<!-- <button class="btn btn-danger">
										<small> Add to cart</small>
									</button> -->
								</div>
							</div>
						</transition-group>
					</div>
				</div>
			</div>
		</div>
	</center>
</template>

<script>
import { mapActions } from 'vuex';

import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

export default {
	data() {
		return {
			SearchData: '',
			ResultItems: [],
		};
	},
	watch: {
		$route(to, from) {
			this.SearchData = to.query.SData;
			this.runSearch();
			from;
		},
	},
	mounted() {
		this.SearchData = this.$route.query.SData;
		this.runSearch();
	},
	methods: {
		...mapActions(['SetUserMovementSearch']),
		runSearch() {
			const token = JSON.parse(localStorage.getItem('Auth')).Token;
			if (token) {
				axios
					.get(`${URL_backend}/search/user/${this.SearchData}`, {
						headers: { 'x-auth-token': token },
					})
					.then((res) => {
						this.ResultItems = res.data;
					});
			} else {
				axios.get(`${URL_backend}/search/${this.SearchData}`).then((res) => {
					this.ResultItems = res.data;
				});
			}
			this.SetUserMovementSearch(this.ResultItems);
		},
	},
};
</script>

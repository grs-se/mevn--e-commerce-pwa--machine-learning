<template>
	<div>
		<sug-products />

		<hr />

		<center>
			<div class="col-md-2" style="float: left; margin: 1px 2%">
				<categories-view @check-cat="CheckCategory" />
			</div>
			<div class="col-md-3"></div>

			<div class="col-md-9">
				<div class="container">
					<div class="card-group">
						<div v-if="isLoaded" class="row">
							<!-- <transition-group name="fade" tag="div" class="row"> -->

							<div
								v-for="(item, index) in items"
								:key="item._id"
								class="card col-md-4"
							>
								<img
									class="card-img-top"
									:src="item.product_img"
									:alt="item.name"
								/>
								<div class="card-body">
									<h6>£{{ item.price }}</h6>

									<router-link
										:to="{ path: '/SpecificItem', query: { ID: item._id } }"
									>
										<h5 class="card-title vx">{{ MaxName(item.name) }}</h5>
									</router-link>

									<button
										v-if="!item.isInCart"
										class="btn btn-danger"
										@click="RemoveFromCart(item._id, index)"
									>
										<small>Remove From Cart</small>
									</button>
									<button
										v-else
										class="btn btn-primary"
										@click="AddToCart(item._id, index)"
									>
										Add To Cart
									</button>
								</div>
							</div>
						</div>
						<!-- </transition-group> -->
					</div>
				</div>

				<hr />
				<div class="container wid">
					<div class="row">
						<nav aria-label="Page navigation  ">
							<ul class="pagination">
								<li class="page-item">
									<button class="page-link" @click="NextPrevPage(false)">
										<span aria-hidden="true">&laquo;</span>
										<span class="sr-only">Previous</span>
									</button>
								</li>

								<li
									v-for="(page, index) in PageArray"
									:key="index"
									class="page-item"
								>
									<button
										:class="
											PageSelected === page ? 'page-link active' : 'page-link'
										"
										@click="ChangePage(page)"
									>
										{{ page }}
									</button>
								</li>

								<li class="page-item">
									<button class="page-link" @click="NextPrevPage(true)">
										<span aria-hidden="true">&raquo;</span>
										<span class="sr-only">Next</span>
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<!-- <hr> -->
			<!-- <div class="clear xp"></div> -->
		</center>
		<div class="clear xp"></div>
	</div>
</template>

<script>
import CategoriesView from './Categories.vue';
import SugProducts from './SugProducts.vue';
import { mapActions, mapGetters } from 'vuex';

import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

export default {
	name: 'MainView',
	components: {
		CategoriesView,
		SugProducts,
	},
	data() {
		return {
			items: [],
			PageArray: [],
			PageSelected: 3,
			CheckedCat: [],
			isLoaded: true,
		};
	},
	computed: {
		...mapGetters(['AllProducts']),
	},
	created() {
		this.GetProducts();
	},
	mounted() {
		// push route start
		if (!this.$route.query.page) {
			this.$router
				.push({
					path: '/',
					name: 'Main',
					query: {
						page: 1,
					},
				})
				.catch(() => {});
		}
		this.PageSelected = parseInt(this.$route.query.page);

		this.getProdData();
		this.Pagination();
	},
	methods: {
		// vuex
		...mapActions([
			'GetProducts',
			'GetProdByPageNum',
			'CheckIfInCart',
			'SetNewCartItem',
			'RemoveItemFromCart',
		]),
		// vuex end
		getProdData() {
			if (this.CheckedCat.length !== 0) {
				axios
					.post(`${URL_backend}/products/ProdByCat/${this.PageSelected}`, {
						cat: this.CheckedCat,
					})
					.then((res) => {
						if (res.data.length) {
							this.items = res.data;
							console.log('data after cat check', res.data);
							this.CheckIf_inCart();
						}
					});
			} else {
				axios
					.get(`${URL_backend}/products/ProdByPage/${this.PageSelected}`)
					.then((res) => {
						if (res.data.length) {
							this.items = res.data;
							console.log('data without cat', res.data);
							this.CheckIf_inCart();
						}
					});
			}
		},
		CheckIf_inCart() {
			let newData = [];
			for (let index = 0; index < this.items.length; index++) {
				const element = this.items[index];
				let CartData = JSON.parse(localStorage.getItem('Cart'));
				let objIndex = CartData.findIndex((obj) => obj.id == element._id);
				if (objIndex !== -1) {
					element.isInCart = false;
				} else {
					element.isInCart = true;
				}
				newData.push(element);
			}
			this.isLoaded = true;
		},
		AddToCart(id, index) {
			this.isLoaded = false;
			this.items[index].isInCart = true;
			this.isLoaded = true;
			this.SetNewCartItem(id);
			this.getProdData();
		},
		RemoveFromCart(id, index) {
			this.isLoaded = false;
			this.items[index].isInCart = false;
			this.isLoaded = true;
			this.RemoveItemFromCart(id);
			this.getProdData();
		},
		MaxName(val) {
			if (val.length < 12) return val;
			return val.slice(0, 12) + '...';
		},
		Pagination() {
			this.PageArray = [];
			let scale = this.PageSelected + 3;
			for (let index = this.PageSelected; index < scale; index++) {
				this.PageArray.push(index);
			}
			console.log('Pagination', this.PageArray);
			this.getProdData();
		},
		ChangePage(page) {
			this.GetProdByPageNum(page);
			this.PageSelected = page;
			this.$router.push({
				path: '/',
				name: 'Main',
				query: {
					page: page,
				},
			});
			this.getProdData();
		},
		NextPrevPage(con) {
			if (con == false && this.PageSelected == 1) {
				console.log('non');
			}
			if (con == false && this.PageSelected !== 1) {
				this.PageSelected = this.PageSelected - 1;
				this.ChangePage(this.PageSelected);
				this.Pagination();
				this.getProdData();
				console.log('n', this.PageSelected);
			}
			if (con == true) {
				this.PageSelected = this.PageSelected + 1;
				this.ChangePage(this.PageSelected);
				this.Pagination();
				this.getProdData();
				console.log('n ', this.PageSelected);
			}
		},
		CheckCategory(cat) {
			console.log('MainView cat id', cat);
			if (this.CheckedCat.indexOf(cat) === -1) {
				this.CheckedCat.push(cat);
			} else {
				this.CheckedCat = this.CheckedCat.filter((e) => e !== cat);
			}
			// console.log('cat id list', this.CheckedCat);
			axios
				.post(`${URL_backend}/products/ProdByCat/${this.PageSelected}`, {
					cat: this.CheckedCat,
				})
				.then((res) => {
					if (res.data.length !== 0) {
						this.items = res.data;
						this.CheckIf_inCart();
					}
				}),
				(this.items = []);
		},
	},
};
</script>

<style scoped>
.card {
	/* padding: 1%; */
	margin: 1% auto;
}
.wid {
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}

.active,
.active:hover {
	background-color: #f44336;
	color: white;
}

.vx:hover {
	cursor: pointer;
	color: darkred;
}
.card > img {
	width: auto;
	height: 12rem;
	margin: 3px auto !important;
}
</style>

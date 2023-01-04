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
								:key="item.id"
								class="card col-md-4"
							>
								<img class="card-img-top" :src="item.imgSrc" :alt="item.name" />
								<div class="card-body">
									<h6>£{{ item.price }}</h6>

									<router-link
										:to="{ path: '/SpecificItem', query: { ID: item.id } }"
									>
										<h5 class="card-title vx">{{ MaxName(item.name) }}</h5>
									</router-link>

									<button
										v-if="item.IsInCart"
										class="btn btn-danger"
										@click="RemoveFromCart(item.id, index)"
									>
										<small>Remove From Cart</small>
									</button>
									<button
										v-else
										class="btn btn-primary"
										@click="AddToCart(item.id, index)"
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
import CategoriesView from "./Categories.vue";
import SugProducts from "./SugProducts.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	name: "MainView",
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
		...mapGetters(["AllProducts"]),
	},
	created() {
		this.GetProducts();
	},
	mounted() {
		// push route start
		if (!this.$route.query.page) {
			this.$router
				.push({
					path: "/",
					name: "Main",
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
			"GetProducts",
			"GetProdByPageNum",
			"CheckIfInCart",
			"SetNewCartItem",
			"RemoveItemFromCart",
		]),
		// vuex end
		getProdData() {
			this.isLoaded = false;
			let data = [];
			data = this.AllProducts;
			for (let index = 0; index < data.length; index++) {
				const ElId = data[index].id;
				this.CheckIfInCart(ElId).then((res) => {
					console.log("d", res);
					let objIndex = data.findIndex((obj) => obj.id == ElId);
					data[objIndex].IsInCart = res;
					this.isLoaded = true;
				});
			}
			console.log("data", data);
			this.items = data;
		},
		AddToCart(id, index) {
			this.isLoaded = false;
			this.items[index].IsInCart = true;
			this.isLoaded = true;
			this.SetNewCartItem(id);
			this.getProdData();
		},
		RemoveFromCart(id, index) {
			this.isLoaded = false;
			this.items[index].IsInCart = false;
			this.isLoaded = true;
			this.RemoveItemFromCart(id);
			this.getProdData();
		},
		MaxName(val) {
			if (val.length < 12) return val;
			return val.slice(0, 12) + "...";
		},
		Pagination() {
			this.PageArray = [];
			let scale = this.PageSelected + 3;
			for (let index = this.PageSelected; index < scale; index++) {
				this.PageArray.push(index);
			}
			console.log("Pagination", this.PageArray);
			this.getProdData();
		},
		ChangePage(page) {
			this.GetProdByPageNum(page);
			this.PageSelected = page;
			this.$router.push({
				path: "/",
				name: "Main",
				query: {
					page: page,
				},
			});
			this.getProdData();
		},
		NextPrevPage(con) {
			if (con == false && this.PageSelected == 1) {
				console.log("non");
			}
			if (con == false && this.PageSelected !== 1) {
				this.PageSelected = this.PageSelected - 1;
				this.ChangePage(this.PageSelected);
				this.Pagination();
				this.getProdData();
				console.log("n", this.PageSelected);
			}
			if (con == true) {
				this.PageSelected = this.PageSelected + 1;
				this.ChangePage(this.PageSelected);
				this.Pagination();
				this.getProdData();
				console.log("n ", this.PageSelected);
			}
		},
		CheckCategory(cat) {
			console.log("MainView cat id", cat);
			if (this.CheckedCat.indexOf(cat) === -1) {
				this.CheckedCat.push(cat);
			} else {
				this.CheckedCat = this.CheckedCat.filter((e) => e !== cat);
			}
			console.log("cat id list", this.CheckedCat);
			this.items = [
				{
					id: "12",
					name: "Cat i Phone 11 Pro s",
					desc: "iphoe 11 pro back",
					price: "599",
					imgSrc:
						"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
				},
				{
					id: "14",
					name: "Cat Huawei s",
					desc: "Huawei Huawei",
					price: "1000",
					imgSrc:
						"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
				},
				{
					id: "16",
					name: "Cat Nike shirt s",
					desc: "red Nike shirt",
					price: "12",
					imgSrc:
						"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
				},
				{
					id: "18",
					name: "Cat Timberland shirt",
					desc: "black templerland shirt",
					price: "20",
					imgSrc:
						"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
				},
				{
					id: "20",
					name: "Cat Addidas shirt",
					desc: "Addidas wight shirt",
					price: "13",
					imgSrc:
						"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
				},
				{
					id: "24",
					name: "Cat Nike shoes",
					desc: "black Nike shoes",
					price: "50",
					imgSrc:
						"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
				},
				{
					id: "26",
					name: "Cat Nikon Camera",
					desc: "Nikon camera description",
					price: "2400",
					imgSrc:
						"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
				},
				{
					id: "28",
					name: "Cat Samsung Watch",
					desc: "Samsung Glaxey Watch",
					price: "5",
					imgSrc:
						"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
				},
			];
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

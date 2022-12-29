<template>
	<div>
		<!-- <Sugproducts /> -->

		<hr />

		<center>
			<div class="col-md-2" style="float: left; margin: 1px 2%">
				<!-- <categorys v-on:CheckCat="checkTheCat"/> -->
			</div>
			<div class="col-md-3"></div>

			<div class="col-md-9">
				<div class="container">
					<div class="card-group">
						<div class="row">
							<!-- <transition-group name="fade" tag="div" class="row"> -->

							<div class="card col-md-4" v-for="item in items" :key="item.id">
								<img class="card-img-top" :src="item.imgSrc" :alt="item.name" />
								<div class="card-body">
									<h6>Price: ${{ item.price }}</h6>

									<h5 class="card-title vx">{{ item.name }}</h5>

									<button class="btn btn-danger">
										<small>Remove From Cart</small>
									</button>
									<button class="btn btn-primary">Add To Cart</button>
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
									<button class="page-link" @click="nextPrevPage(false)">
										<span aria-hidden="true">&laquo;</span>
										<span class="sr-only">Previous</span>
									</button>
								</li>

								<li
									v-for="(page, index) in pageArray"
									:key="index"
									class="page-item"
								>
									<button
										:class="
											pageSelected === page ? 'page-link active' : 'page-link'
										"
										@click="changePage(page)"
									>
										{{ page }}
									</button>
								</li>

								<li class="page-item">
									<button class="page-link" @click="nextPrevPage(true)">
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
export default {
	name: "MainView",
	data() {
		return {
			items: [],
			pageArray: [],
			pageSelected: 3,
		};
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
		this.pageSelected = parseInt(this.$route.query.page);

		this.getProductData();
		this.pagination();
	},
	methods: {
		getProductData() {
			(this.items = [
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
					name: "Cat nike shirt s",
					desc: "red nike shirt",
					price: "12",
					imgSrc:
						"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
				},
				{
					id: "18",
					name: "Cat temperland shirt",
					desc: "black templerland shirt",
					price: "20",
					imgSrc:
						"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
				},
				{
					id: "20",
					name: "Cat addidas shirt",
					desc: "addidas wight shirt",
					price: "13",
					imgSrc:
						"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
				},
				{
					id: "24",
					name: "Cat nike shose",
					desc: "black nike shose",
					price: "50",
					imgSrc:
						"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
				},
				{
					id: "26",
					name: "Cat nikon Camera",
					desc: "nikon camera description",
					price: "2400",
					imgSrc:
						"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
				},
				{
					id: "28",
					name: "Cat Samsong Watch",
					desc: "samsong Glaxey Watch",
					price: "5",
					imgSrc:
						"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
				},
			]),
				console.log("page num", this.pageSelected);
		},
		pagination() {
			this.pageArray = [];
			let scale = this.pageSelected + 3;
			for (let index = this.pageSelected; index < scale; index++) {
				this.pageArray.push(index);
			}
			console.log("pagination", this.pageArray);
			this.getProductData();
		},
		changePage(page) {
			this.pageSelected = page;
			this.$router.push({
				path: "/",
				name: "Main",
				query: {
					page: page,
				},
			});
		},
		nextPrevPage(con) {
			if (con == false && this.pageSelected == 1) {
				console.log("none");
			}
			if (con == false && this.pageSelected !== 1) {
				this.pageSelected = this.pageSelected - 1;
				this.changePage(this.pageSelected);
				this.pagination();
				this.getProductData();
				console.log("n", this.pageSelected);
			}
			if (con == true) {
				this.pageSelected = this.pageSelected + 1;
				this.changePage(this.pageSelected);
				this.pagination();
				this.getProductData();
				console.log("n", this.pageSelected);
			}
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

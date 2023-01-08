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
								:key="item.id"
								class="card col-md-4"
							>
								<img
									class="card-img-top"
									:src="item.imgSrc"
									alt="Card image cap"
								/>
								<div class="card-body">
									<h6>Price: £{{ item.price }}</h6>
									<h5 class="card-title">Card title</h5>
									<button class="btn btn-danger">
										<small> Add to cart</small>
									</button>
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
import { mapActions } from "vuex";

export default {
	data() {
		return {
			SearchData: "",
			ResultItems: [],
		};
	},
	watch: {
		$route(to, from) {
			this.SearchData = to.query.SData;
			from;
		},
	},
	mounted() {
		this.SearchData = this.$route.query.SData;
	},
	methods: {
		...mapActions(["SetUserMovementSearch"]),
		runSearch() {
			this.ResultItems = [
				{
					id: "12",
					CatId: "11",
					name: "i Phone 11 Pro s",
					desc: "iphoe 11 pro back",
					price: "599",
					imgSrc:
						"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
				},
				{
					id: "14",
					CatId: "22",
					name: "Huawei s hewr",
					desc: "Huawei Huawei",
					price: "1000",
					imgSrc:
						"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
				},
				{
					id: "16",
					CatId: "33",
					name: "Nike shirt s",
					desc: "red Nike shirt",
					price: "12",
					imgSrc:
						"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
				},
			];
			let data = this.SearchData;
			this.SetUserMovementSearch(data);
			this.runSearch();
		},
	},
};
</script>

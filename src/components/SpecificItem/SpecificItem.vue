<template>
	<div>
		<center>
			<div class="card">
				<img
					class="card-img-top"
					:src="ResultItems.imgSrc"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h4 class="card-title">{{ ResultItems.name }}</h4>
					<p class="card-text">{{ ResultItems.desc }}</p>
					<h4>Price : £{{ ResultItems.price }}</h4>
					<h4><i class="fas fa-tags"></i> : {{ ResultItems.CatName }}</h4>
					<a v-if="ResultItems.InCart" class="btn btn-primary"> Add To Card</a>
					<a v-if="!ResultItems.InCart" class="btn btn-danger">
						Remove From Card</a
					>
				</div>
			</div>
		</center>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "SpecificItem",
	data() {
		return {
			ResultItems: {
				id: 1,
				imgSrc: "",
				name: "",
				price: null,
				desc: "",
				CatName: "",
				// InCart: true,
			},
		};
	},
	created() {
		// let prodId = this.$route.query.ID;
		// let data = {
		// 	id: "12",
		// 	name: "i Phone 11 Pro s",
		// 	desc: "iphoe 11 pro back",
		// 	price: "599",
		// 	catName: "phone",
		// 	imgSrc:
		// 		"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
		// };
		// this.ResultItems.id = prodId;
		// this.ResultItems.name = data.name;
		// this.ResultItems.desc = data.desc;
		// this.ResultItems.price = data.price;
		// this.ResultItems.imgSrc = data.imgSrc;
		// this.ResultItems.catName = data.catName;
		// console.log("item.id", prodId, "item data", this.ResultItems);
		this.GetRouteData();
	},
	methods: {
		...mapActions(["GetProdById", "GetCatById", "GetCategories"]),

		async GetRouteData() {
			this.GetCategories();
			let ProdId = this.$route.query.ID;
			await this.GetProdById(ProdId).then((res) => {
				console.log("specific item", res);
				this.ResultItems.id = ProdId;
				this.ResultItems.name = res[0].name;
				this.ResultItems.desc = res[0].desc;
				this.ResultItems.price = res[0].price;
				this.ResultItems.CatName = res[0].CatName;
				this.ResultItems.imgSrc = res[0].imgSrc;
				this.GetCatById(res[0].CatId).then((res) => {
					console.log("res", res);
					this.ResultItems.CatName = res[0].name;
				});
			});
		},
	},
};
</script>

<style scoped>
.card {
	width: 40%;
	text-align: center;
}

.card > img {
	width: 70% !important;
	margin: 1px auto !important;
}
</style>

<template>
	<div>
		<center>
			<div class="card">
				<img
					class="card-img-top"
					:src="resultItems.imgSrc"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h4 class="card-title">{{ resultItems.name }}</h4>
					<p class="card-text">{{ resultItems.desc }}</p>
					<h4>Price : £{{ resultItems.price }}</h4>
					<h4><i class="fas fa-tags"></i> : {{ resultItems.catName }}</h4>
					<a v-if="resultItems.inCart" class="btn btn-primary"> Add To Card</a>
					<a v-if="!resultItems.inCart" class="btn btn-danger">
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
			resultItems: {
				id: 1,
				imgSrc: "",
				name: "",
				desc: "",
				catName: "",
				inCart: true,
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
		// this.resultItems.id = prodId;
		// this.resultItems.name = data.name;
		// this.resultItems.desc = data.desc;
		// this.resultItems.price = data.price;
		// this.resultItems.imgSrc = data.imgSrc;
		// this.resultItems.catName = data.catName;
		// console.log("item.id", prodId, "item data", this.resultItems);
		this.GetRouteData();
	},
	methods: {
		...mapActions(["GetProdById"]),

		async GetRouteData() {
			let ProdId = this.$route.query.ID;
			await this.GetProdById(ProdId).then((res) => {
				console.log("specific item", res);
				this.resultItems.id = ProdId;
				this.resultItems.name = res[0].name;
				this.resultItems.desc = res[0].desc;
				this.resultItems.price = res[0].price;
				this.resultItems.imgSrc = res[0].imgSrc;
				this.resultItems.catName = res[0].catName;
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

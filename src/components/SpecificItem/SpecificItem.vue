<template>
	<div>
		<center>
			<div v-if="isLoaded" class="card">
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
					<a
						v-if="!ResultItems.InCart"
						class="btn btn-primary"
						@click="ChangeItemStatus"
					>
						Add To Card</a
					>
					<a
						v-if="ResultItems.InCart"
						class="btn btn-danger"
						@click="ChangeItemStatus"
					>
						Remove From Card</a
					>
				</div>
			</div>
		</center>
	</div>
</template>

<script>
// import { booleanLiteral } from "@babel/types";
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
			isLoaded: Boolean,
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
		...mapActions([
			"GetProdById",
			"GetCatById",
			"GetCategories",
			"CheckIfInCart",
			"SetNewCartItem",
			"RemoveItemFromCart",
		]),

		async GetRouteData() {
			this.isLoaded = false;
			//
			this.GetCategories();
			let ProdID = this.$route.query.ID;
			await this.GetProdById(ProdID).then((res) => {
				console.log("specific item", res);
				this.ResultItems.id = ProdID;
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
			// check if in cart
			await this.CheckIfInCart(ProdID).then((res) => {
				this.ResultItems.InCart = res;
				console.log("res X", res);
				this.isLoaded = true;
			});
		},
		async ChangeItemStatus() {
			this.isLoaded = false;
			this.ResultItems.InCart = !this.ResultItems.InCart;
			let ProdID = this.$route.query.ID;

			if (!this.ResultItems.InCart) {
				this.SetNewCartItem(ProdID);
				this.isLoaded = true;
			} else {
				this.isLoaded = true;
				this.RemoveItemFromCart(ProdID);
			}
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

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
import { mapActions } from "vuex";

export default {
	name: "SpecificItem",
	data() {
		return {
			ResultItems: {
				id: "",
				imgSrc: "",
				name: "",
				price: null,
				desc: "",
				CatName: "",
				InCart: true,
			},
			isLoaded: Boolean,
		};
	},
	created() {
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
			"SetUserMovementItem",
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

			// Set user movement
			this.SetUserMovementItem(ProdID);
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

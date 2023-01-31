<template>
	<div>
		<center>
			<div class="card">
				<img
					class="card-img-top"
					:src="ResultItems.product_img"
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
import { mapActions } from 'vuex';

import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

export default {
	name: 'SpecificItem',
	data() {
		return {
			ResultItems: {
				id: '',
				imgSrc: '',
				name: '',
				price: null,
				desc: '',
				CatName: '',
				InCart: true,
			},
			itemData: '',
			isLoaded: Boolean,
		};
	},
	created() {
		this.GetRouteData();
	},
	methods: {
		...mapActions([
			'GetProdById',
			'GetCatById',
			'GetCategories',
			'CheckIfInCart',
			'SetNewCartItem',
			'RemoveItemFromCart',
			'SetUserMovementItem',
			'SetUserMovementCart',
		]),

		async GetRouteData() {
			let ProdID = this.$route.query.ID;
			await axios.get(`${URL_backend}/products/${ProdID}`).then((res) => {
				this.ResetDataAndGetCat(res.data);
			});
			// check if in cart
			await this.CheckIfInCart(ProdID).then((res) => {
				this.ResultItems.InCart = res;
				this.isLoaded = true;
				this.AddToUserMovement();
			});
		},
		//  reset data
		ResetDataAndGetCat(data) {
			// set item data
			this.ResultItems.id = data['_id'];
			this.ResultItems.imgSrc = data['product_img'];
			this.ResultItems.name = data['name'];
			this.ResultItems.price = data['price'];
			this.ResultItems.desc = data['desc'];
			// get set item cat
			let catId = data['prod_categories']._id;
			axios.get(`${URL_backend}/categories/${catId}`).then((res) => {
				this.ResultItems.CatName = res.data.name;
			});
		},
		AddToUserMovement() {
			this.SetUserMovementItem(this.ResultItems.id);
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
			this.SetUserMovementCart(ProdID);
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

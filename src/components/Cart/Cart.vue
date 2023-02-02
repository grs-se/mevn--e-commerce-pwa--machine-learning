<template>
	<div>
		<center>
			<!-- <div style="display: flex; justify-content: center"> -->
			<div class="col-sm-12 col-md-9 col-md-offset-1">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th class="text-center">Price</th>
							<th class="text-center">Total</th>
							<th></th>
						</tr>
					</thead>

					<!-- <tbody v-if="dataLoaded"></tbody> -->
					<tbody>
						<tr v-for="item in items" :key="item._id">
							<td class="col-sm-8 col-md-6">
								<div class="media">
									<a class="thumbnail pull-left" href="#">
										<img
											:src="item.product_img"
											class="media-object"
											style="width: 72px; height: 72px"
										/>
									</a>
									<div class="media-body">
										<h4 class="media-heading">
											<a class="ab" @click="MoveToDetails(item._id)">{{
												NameFilters(item.name)
											}}</a>
										</h4>
										<span>Desc : </span>
										<span class="text-primary">
											<strong> {{ DescFilters(item.desc) }}</strong>
										</span>
									</div>
								</div>
							</td>
							<td class="col-sm-2 col-md-2" style="text-align: center">
								<input
									id="exampleInputEmail1"
									v-model="item.quantity"
									type="number"
									class="form-control"
									@change="CheckNewQuantity(item._id, $event)"
								/>
							</td>
							<td class="col-sm-1 col-md-1 text-center">
								<strong>£ {{ item.price }} </strong>
							</td>
							<td class="col-sm-1 col-md-1 text-center">
								<strong>£{{ item.price * item.quantity }}</strong>
							</td>
							<td class="col-sm-1 col-md-1">
								<button
									type="button"
									class="btn btn-danger"
									@click="RemoveItem(item._id)"
								>
									<span class="fa fa-remove"></span> Remove
								</button>
							</td>
						</tr>

						<tr>
							<td><h3>Total</h3></td>
							<td class="text-right">
								<h3>
									<strong>£{{ TotalItemsPrice }}</strong>
								</h3>
							</td>
						</tr>

						<tr>
							<td>
								<button type="button" class="btn btn-default">
									<span class="fa fa-shopping-cart"></span> Continue Shopping
								</button>
							</td>
							<td>
								<button type="button" class="btn btn-success">
									Checkout <span class="fa fa-play"></span>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- </div> -->
		</center>
	</div>
</template>

<script>
import axios from 'axios';
const URL_backend = `https://olx-vue.herokuapp.com/api`;
// const port = process.env.PORT || 3000;
// const URL_backend = `http://localhost:${port}/api`;

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'CartView',
	data() {
		return {
			TotalItemsPrice: 0,
			items: [],
			// dataLoaded: Boolean,
		};
	},
	computed: {
		...mapGetters(['AllCartItems']),
	},
	watch: {
		items: function () {
			this.TotalPrice();
		},
	},
	created() {
		this.GetProductsInCart();
	},
	mounted() {
		//  this.TotalPrice();
	},
	methods: {
		...mapActions([
			'ChangeItemQuantity',
			'RemoveItemFromCart',
			'GetProdById',
			'GetCartItem',
			'SetUserMovementCart',
		]),
		//
		GetProductsInCart: function () {
			this.GetCartItem();

			// this.dataLoaded = false;
			let arr = this.AllCartItems;
			let newArr = [];

			for (let index = 0; index < arr.length; index++) {
				const data = arr[index];
				axios.get(`${URL_backend}/products/${data.id}`).then((res) => {
					let objectIndex = this.AllCartItems.findIndex(
						(obj) => obj.id == res.data._id
					);

					let Qu = this.AllCartItems[objectIndex].quantity;
					res.data.quantity = Qu;
					newArr.push(res.data);
				});
			}
			this.items = newArr;
			// console.log('Prod cart list', this.items);
		},
		CheckNewQuantity: function (Id, e) {
			if (e.target.value == 0) {
				let newData = this.items.map((el) => {
					if (el._id == Id) return Object.assign({}, el, { quantity: 1 });
					return el;
				});
				this.items = newData;
			} else {
				let newData = this.items.map((el) => {
					if (el._id == Id)
						return Object.assign({}, el, {
							quantity: e.target.value,
						});
					return el;
				});
				// change quantity on cart store
				let NewD = { ID: Id, quantity: Number(e.target.value) };
				this.ChangeItemQuantity(NewD);
				// end cart
				this.items = newData;
			}
		},
		MoveToDetails: function (Id) {
			this.$router
				.push({
					path: '/SpecificItem',
					name: 'SpecificItem',
					query: {
						ID: Id,
					},
				})
				.catch(() => {});
		},
		RemoveItem: function (Id) {
			let newArr = this.items.filter((x) => {
				return x._id != Id;
			});
			this.items = newArr;

			this.RemoveItemFromCart(Id);
			this.AddToUserMovements(Id);
		},
		TotalPrice: function () {
			const arrData = [];
			for (let index = 0; index < this.items.length; index++) {
				let total =
					parseInt(this.items[index].price) *
					parseInt(this.items[index].quantity);
				arrData.push(parseInt(total));
			}
			let lastNumber = arrData.reduce(function (a, b) {
				return a + b;
			}, 0);
			this.TotalItemsPrice = lastNumber;
		},
		AddToUserMovements: function (id) {
			this.SetUserMovementCart(id);
		},
		DescFilters(value) {
			return (
				value.split(' ')[0] +
				'' +
				value.split(' ')[1] +
				' ' +
				value.split(' ')[2] +
				'...'
			);
		},
		NameFilters(value) {
			if (value.split(' ')[1]) {
				return value.split(' ')[0] + '' + value.split(' ')[1];
			} else {
				return value.split(' ')[0];
			}
		},
	},
};
</script>

<style scoped>
.thumbnail {
	margin-right: 20px;
}

.ab {
	cursor: pointer;
}
</style>

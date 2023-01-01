<template>
	<div>
		<center>
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

					<tbody v-if="dataLoaded">
						<tr v-for="item in items" :key="item.id">
							<td class="col-sm-8 col-md-6">
								<div class="media">
									<a class="thumbnail pull-left" href="#">
										<img
											:src="item.imgSrc"
											class="media-object"
											style="width: 72px; height: 72px"
										/>
									</a>
									<div class="media-body">
										<h4 class="media-heading">
											<a class="ab" @click="MoveToDetails(item.id)">{{
												item.name
											}}</a>
										</h4>
										<span>Desc : </span>
										<span class="text-primary">
											<strong> {{ item.desc }}</strong>
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
									@change="CheckNewQuantity(item.id, $event)"
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
									@click="RemoveItem(item.id)"
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
		</center>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	name: "CartView",
	data() {
		return {
			TotalItemsPrice: 0,
			items: [],
			dataLoaded: Boolean,
		};
	},
	computed: {
		...mapGetters(["AllCartItems"]),
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
			"ChangeItemQuantity",
			"RemoveItemFromCart",
			"GetProdById",
			"GetCartItem",
		]),
		//
		GetProductsInCart: function () {
			// this.dataLoaded = false;
			this.GetCartItem();
			let arr = this.AllCartItems;
			let newArr = [];

			for (let index = 0; index < arr.length; index++) {
				const data = arr[index];
				this.GetProdById(data.id).then((res) => {
					res[0].quantity = data.quantity;
					newArr.push(res[0]);
				});
			}
			this.items = newArr;
			this.dataLoaded = true;
			console.log("Prod cart list", this.items);
		},
		DescFilters(value) {
			return (
				value.split(" ")[0] +
				"" +
				value.split(" ")[1] +
				" " +
				value.split(" ")[2] +
				"..."
			);
		},
		NameFilters(value) {
			if (value.split(" ")[1]) {
				return value.split(" ")[0] + "" + value.split(" ")[1];
			} else {
				return value.split(" ")[0];
			}
		},
		CheckNewQuantity: function (Id, e) {
			if (e.target.value == 0) {
				let newData = this.items.map((el) => {
					if (el.id == Id)
						return Object.assign({}, el, { quantity: e.target.value });
					return el;
				});
				this.items = newData;
			}
		},
		MoveToDetails(id) {
			this.$router
				.push({
					path: "/item",
					name: "SpecificItem",
					query: {
						ID: id,
					},
				})
				.catch(() => {});
		},
		RemoveItem: function (Id) {
			let newArr = this.items.filter((x) => {
				return x.id != Id;
			});
			this.items = newArr;

			this.RemoveItemFromCart(Id);
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

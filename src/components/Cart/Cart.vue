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

					<tbody>
						<tr>
							<td class="col-sm-8 col-md-6">
								<div class="media">
									<a class="thumbnail pull-left" href="#">
										<img
											class="media-object"
											style="width: 72px; height: 72px"
										/>
									</a>
									<div class="media-body">
										<h4 class="media-heading">
											<a class="ab"> name</a>
										</h4>
										<span>Desc : </span>
										<span class="text-primary">
											<strong> desc </strong>
										</span>
									</div>
								</div>
							</td>
							<td class="col-sm-2 col-md-2" style="text-align: center">
								<input
									id="exampleInputEmail1"
									type="number"
									class="form-control"
								/>
							</td>
							<td class="col-sm-1 col-md-1 text-center">
								<strong>$ item price </strong>
							</td>
							<td class="col-sm-1 col-md-1 text-center">
								<strong>$ 500</strong>
							</td>
							<td class="col-sm-1 col-md-1">
								<button type="button" class="btn btn-danger">
									<span class="fa fa-remove"></span> Remove
								</button>
							</td>
						</tr>

						<tr>
							<td><h3>Total</h3></td>
							<td class="text-right">
								<h3><strong>$TotalItemsPrice</strong></h3>
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
	name: "Cart",
	data() {
		return {
			items: [],
		};
	},
	computed: {
		...mapGetters(["AllCartItems"]),
	},
	created() {
		this.GetProductsInCart();
	},
	methods: {
		...mapActions(["ChangeItemQuantity", "GetProdById", "RemoveItemFromCart"]),
		//
		GetProductsInCart: function () {
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
			console.log("Prod cart list", this.items);
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

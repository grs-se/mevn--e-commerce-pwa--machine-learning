<template>
	<div>
		<!-- <h1>Admin</h1> -->
		<center>
			<div class="container">
				<div class="row">
					<div class="col-md-3 df">
						<div class="list-group">
							<a
								:class="[
									'list-group-item',
									'list-group-item-action',
									'v',
									ChangeClassAndComponent('Users') ? 'active' : '',
									,
								]"
								@click="ChangePage('Users')"
							>
								Users
							</a>
							<a
								:class="[
									'list-group-item',
									'list-group-item-action',
									'v',
									ChangeClassAndComponent('Categories') ? 'active' : '',
								]"
								@click="ChangePage('Categories')"
							>
								Categories
							</a>
							<a
								:class="[
									'list-group-item',
									'list-group-item-action',
									'v',
									ChangeClassAndComponent('Products') ? 'active' : '',
								]"
								@click="ChangePage('Products')"
							>
								Products
							</a>
							<a
								:class="[
									'list-group-item',
									'list-group-item-action',
									'v',
									ChangeClassAndComponent('Cart') ? 'active' : '',
								]"
								@click="ChangePage('Cart')"
							>
								Cart
							</a>
						</div>
					</div>

					<div class="col-md-9">
						<Users
							v-if="ChangeClassAndComponent('Users') ? 'active' : ''"
							key="Users"
						/>
						<Categories
							v-if="ChangeClassAndComponent('Categories')"
							key="Categories"
						/>
						<Cart v-if="ChangeClassAndComponent('Cart')" key="Cart" />
						<Products
							v-if="ChangeClassAndComponent('Products')"
							key="Products"
						/>
					</div>
				</div>
			</div>
		</center>
	</div>
</template>

<script>
import Categories from "./Categories.vue";
import Cart from "./Cart.vue";
import Products from "./Products.vue";
import Users from "./Users.vue";

export default {
	name: "AdminView",
	components: {
		Categories,
		Cart,
		Products,
		Users,
	},
	data() {
		return {
			Data: [
				{ name: "Users", val: true },
				{ name: "Categories", val: false },
				{ name: "Cart", val: false },
				{ name: "Products", val: false },
			],
		};
	},
	methods: {
		ChangeClassAndComponent: function (PName) {
			for (let index = 0; index < this.Data.length; index++) {
				const element = this.Data[index];
				if (PName == element.name) {
					return element.val;
				}
			}
		},
		ChangePage: function (PageName) {
			let newData = [];
			for (let index = 0; index < this.Data.length; index++) {
				const element = this.Data[index];
				if (PageName == element.name) {
					element.val = !element.val;
					newData.push(element);
				} else {
					element.val = false;
					newData.push(element);
				}
			}
			this.Data = newData;
		},
	},
};
</script>

<style>
.d {
	font-family: cursive;
	border: 1px solid #2f4f4f1f;
	margin: 1% auto;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

df {
	border: 1px solid #2f4f4f1f;
	margin: 1% auto;
}
.v {
	cursor: pointer;
}
</style>

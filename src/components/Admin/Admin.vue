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
									ChangeClassAndComponent('MainProd') ? 'active' : '',
								]"
								@click="ChangePage('MainProd')"
							>
								Products
							</a>
							<a
								:class="[
									'list-group-item',
									'list-group-item-action',
									'v',
									ChangeClassAndComponent('Chart') ? 'active' : '',
								]"
								@click="ChangePage('Chart')"
							>
								Chart
							</a>
						</div>
					</div>

					<transition-group tag="div" name="slide" class="col-md-9 d">
						<Users
							v-if="ChangeClassAndComponent('Users') ? 'active' : ''"
							key="Users"
						/>
						<Categories
							v-if="ChangeClassAndComponent('Categories')"
							key="Categories"
						/>
						<Chart v-if="ChangeClassAndComponent('Chart')" key="Chart" />
						<MainProd
							v-if="ChangeClassAndComponent('MainProd')"
							key="MainProd"
						/>
					</transition-group>
				</div>
			</div>
		</center>
	</div>
</template>

<script>
import Categories from './Categories.vue';
import Chart from './Chart.vue';
import MainProd from './Products/MainProd.vue';
import Users from './Users.vue';

export default {
	name: 'AdminView',
	components: {
		Categories,
		Chart,
		MainProd,
		Users,
	},
	data() {
		return {
			Data: [
				{ name: 'Users', val: true },
				{ name: 'Categories', val: false },
				{ name: 'Chart', val: false },
				{ name: 'MainProd', val: false },
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

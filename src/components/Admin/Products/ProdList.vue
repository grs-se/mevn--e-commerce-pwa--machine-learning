<template>
	<div class="">
		<div v-if="!EDIT" class="">
			<div v-for="data in ProductsList" :key="data.id" class="">
				<div class="card d">
					<img class="card-img-top" :src="data.product_img" :alt="data.name" />
					<div class="card-body">
						<h5 class="card-title">Name: {{ data.name }}</h5>
						<p class="card-text">Desc: {{ data.desc }}</p>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item">Price: {{ data.price }}</li>
						<li class="list-group-item danger">
							Category: {{ data.prod_categories.name }}
						</li>
					</ul>
					<div class="card-body">
						<a class="card-link btn btn-danger" @click="EditProd(data._id)"
							>Edit</a
						>
					</div>
				</div>
			</div>

			<hr />
			<pagination
				component-name="ProductsComponent"
				@new-products-data="changePagination"
			/>
		</div>

		<edit-prod
			v-if="EDIT"
			key="EditProd"
			:prod-id="EditProdID"
			@save-done="SaveDoneFunc"
		/>
	</div>
</template>

<script>
import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

import EditProd from './EditProd.vue';
import Pagination from '../PaginationStore.vue';

export default {
	name: 'ProdList',
	components: {
		Pagination,
		EditProd,
	},
	data() {
		return {
			ProductsList: [],
			EDIT: false,
			EditProdID: '',
		};
	},
	created() {
		this.GetProdListFromStore();
	},
	methods: {
		GetProdListFromStore: function () {
			axios.get(`${URL_backend}/products/ProdByPage/${1}`).then((res) => {
				this.ProductsList = res.data;
			});
		},
		changePagination(non, page) {
			console.log('non', non);
			axios.get(`${URL_backend}/products/ProdByPage/${page}`).then((res) => {
				this.ProductsList = res.data;
			});
		},
		EditProd(prodID) {
			this.EditProdID = prodID;
			this.EDIT = !this.EDIT;
		},
		SaveDoneFunc() {
			this.GetProdListFromStore();
			this.EDIT = !this.EDIT;
		},
	},
};
</script>

<style scoped>
.d {
	font-family: cursive;
	border: 1px solid #2f4f4f1f;
	margin: 3% 1%;
	padding: 2%;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.card > img {
	/* width: 100px; */
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}
</style>

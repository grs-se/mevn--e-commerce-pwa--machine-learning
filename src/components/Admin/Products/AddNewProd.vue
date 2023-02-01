<template>
	<div class="">
		<button
			class="btn btn-success form-group bn"
			@click="CreateNew ? (CreateNew = !CreateNew) : (CreateNew = !CreateNew)"
		>
			New Product
		</button>

		<form v-if="CreateNew" class="d">
			<div class="form-row">
				<div class="col-md-12">
					<img class="ii" :src="NewProdData.product_img" />

					<div class="fileUpload">
						<input
							type="file"
							class="upload"
							enctype="multipart/form-data"
							@change="onFileNewImg($event)"
						/>
						<small>Upload Img</small>
					</div>
				</div>
				<div class="form-group col-md-6">
					<label>Name</label>
					<input
						v-model="NewProdData.name"
						type="text"
						class="form-control"
						placeholder="Product name"
					/>
				</div>
				<div class="form-group col-md-6">
					<label>Price</label>
					<input
						v-model="NewProdData.price"
						type="number"
						class="form-control"
						placeholder="Product Price"
					/>
				</div>
			</div>
			<div class="form-group">
				<label>Desc</label>
				<input
					v-model="NewProdData.desc"
					type="text"
					class="form-control"
					placeholder="Description"
				/>
			</div>

			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="inputCategories">Categories</label>
					<select
						v-model="NewProdData.prod_categories"
						class="form-control"
						@change="ChangeNewProdCat($event)"
					>
						<option
							v-for="CatData in CategoriesList"
							:key="CatData._id"
							:value="CatData._id"
						>
							{{ CatData.name }}
						</option>
					</select>
				</div>
			</div>

			<button
				type="submit"
				class="btn btn-primary"
				@click="AddNewProduct($event)"
			>
				Add
			</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

export default {
	name: 'AddNewProd',
	emits: ['new-data'],
	data() {
		return {
			data: [],
			CreateNew: false,
			NewProdData: {
				name: '',
				desc: '',
				price: '',
				product_img: '',
				prod_categories: '',
			},
			files: null,
			CategoriesList: [],
		};
	},
	created() {
		this.GetCatListFromStore();
	},
	methods: {
		GetCatListFromStore: function () {
			axios.get(`${URL_backend}/categories/All`).then((res) => {
				this.CategoriesList = res.data;
			});
		},
		ChangeNewProdCat(e) {
			this.NewProdData.prod_categories = e.target.value;
		},
		AddNewProduct(e) {
			e.preventDefault();
			if (
				!this.NewProdData.name ||
				!this.NewProdData.desc ||
				!this.NewProdData.price ||
				!this.NewProdData.product_img ||
				!this.NewProdData.prod_categories
			) {
				alert('Please Complete From Data');
			} else {
				const PostData = new FormData();
				PostData.append('name', this.NewProdData.name);
				PostData.append('desc', this.NewProdData.desc);
				PostData.append('price', this.NewProdData.price);
				PostData.append('prod_categories', this.NewProdData.prod_categories);

				for (const i of Object.keys(this.files)) {
					PostData.append('image', this.files[i]);
				}
				// http request
				let Tok = JSON.parse(localStorage.getItem('Auth')).Token;
				axios
					.post(`${URL_backend}/products`, PostData, {
						headers: { 'x-auth-token': Tok },
					})
					.then((res) => {
						console.log('new prod data', res.data);
						this.$emit('new-data');
						this.CreateNew = !this.CreateNew;
					})
					.catch((err) => {
						alert(err.response.data);
					});
			}
		},
		onFileNewImg(e) {
			this.NewProdData.product_img = URL.createObjectURL(e.target.files[0]);

			this.files = e.target.files;
		},
	},
};
</script>

<style scoped>
.bn {
	margin: 5px;
}

.d {
	font-family: cursive;
	border: 1px solid #2f4f4f1f;
	margin: 3% 1%;
	padding: 2%;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.ii {
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}

.fileUpload {
	background: #00bcbe;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
	color: #fff;
	font-size: 1em;
	font-weight: bold;
	margin: 1.25em auto; /*20px/16px 0*/
	overflow: hidden;
	padding: 0.875em; /*14px/16px*/
	position: relative;
	text-align: center;
	width: 120px;
	cursor: pointer;
}
.fileUpload:hover,
.fileUpload:active,
.fileUpload:focus {
	background: #00a2a4;
	cursor: pointer;
}
.fileUpload input.upload {
	position: absolute;
	top: 0;
	right: 0;
	margin: 0;
	padding: 0;
	font-size: 20px;
	cursor: pointer;
	opacity: 0;
	filter: alpha(opacity=0);
	width: 148px;
	height: 46px;
	cursor: pointer;
}
</style>

<template>
	<div class="">
		<form class="d">
			<div class="form-row">
				<div class="col-md-12">
					<img class="ii" :src="Data.product_img" />

					<div class="fileUpload">
						<input
							type="file"
							class="upload"
							enctype="multipart/form-data"
							@change="onFileChange($event)"
						/>
						<span>Upload</span>
					</div>
				</div>
				<div class="form-group col-md-6">
					<label>Name</label>
					<input
						v-model="DataArr.name"
						type="text"
						class="form-control"
						placeholder="Product name"
					/>
				</div>
				<div class="form-group col-md-6">
					<label>Price</label>
					<input
						v-model="DataArr.price"
						type="number"
						class="form-control"
						placeholder="Product Price"
					/>
				</div>
			</div>
			<div class="form-group">
				<label>Desc</label>
				<input
					v-model="DataArr.desc"
					type="text"
					class="form-control"
					placeholder="Description"
				/>
			</div>

			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="inputCategories">Categories</label>
					<select
						class="form-control"
						@change="ChangeProductCat($event, DataArr._id)"
					>
						<option
							v-for="catData in CategoriesList"
							:key="catData._id"
							:selected="CheckTheCat(catData._id)"
							:value="catData._id"
						>
							{{ catData.name }}
						</option>
					</select>
				</div>
			</div>

			<button class="btn btn-primary" @click="SaveData($event)">Save</button>

			<button class="btn btn-success" @click="Delete(DataArr._id)">
				Delete
			</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

export default {
	name: 'EditProd',
	props: {
		prodId: {
			type: String,
			default: '',
		},
	},
	emits: ['save-done'],
	data() {
		return {
			DataArr: [],
			prodID: this.ProdID,
			files: null,
			CategoriesList: [],
		};
	},
	created() {
		this.DataFunc();
		this.GetCatListFromStore();
	},
	methods: {
		GetCatListFromStore: function () {
			axios.get(`${URL_backend}/categories/All`).then((res) => {
				this.CategoriesList = res.data;
			});
		},
		DataFunc: function () {
			axios.get(`${URL_backend}/products/${this.prodID}`).then((res) => {
				let data = {
					_id: res.data._id,
					desc: res.data.desc,
					name: res.data.name,
					product_img: res.data.product_img,
					price: res.data.price,
					catName: res.data.prod_categories.name,
					catId: res.data.prod_categories._id,
				};
				this.DataArr = data;
			});
		},
		SaveData(e) {
			e.preventDefault();

			if (
				!this.DataArr.name ||
				!this.DataArr.desc ||
				!this.DataArr.price ||
				!this.DataArr.product_img
			) {
				alert('Please complete form data');
			} else {
				const PostData = new FormData();
				PostData.append('name', this.DataArr.name);
				PostData.append('desc', this.DataArr.desc);
				PostData.append('price', this.DataArr.price);
				PostData.append('prod_categories', this.DataArr.prod_categories);
				PostData.append('product_img', this.DataArr.product_img);

				if (this.files !== null) {
					for (const i of Object.keys(this.files)) {
						PostData.append('image', this.files[i]);
					}
				}
				// http request
				let Tok = JSON.parse(localStorage.getItem('Auth')).Token;
				axios
					.put(`${URL_backend}/products/${this.DataArr._id}`, PostData, {
						headers: { 'x-auth-token': Tok },
					})
					.then((res) => {
						console.log('new prod data ', res.data);
						this.$emit('save-done');
					})
					.catch((err) => {
						console.log('errX', err.response);
						alert(err.response.data);
					});
			}
		},
		onFileNewImg(e) {
			this.DataArr.product_img = URL.createObjectURL(e.target.files[0]);

			this.files = e.target.files;
		},
		CheckCat(CatId) {
			let dataArr = this.DataArr.catId;
			if (String(dataArr) === String(CatId)) {
				return true;
			} else {
				return false;
			}
		},
		ChangeProductCat(e) {
			this.DataArr.catId = e.target.value;
		},
		Delete(e, id) {
			e.preventDefault();
			let Tok = JSON.parse(localStorage.getItem('Auth')).Token;
			axios
				.delete(`${URL_backend}/products/${id}`, {
					headers: {
						'x-auth-token': Tok,
					},
				})
				.then((res) => {
					console.log('del res', res);
					this.$emit('save-done');
				})
				.catch((err) => {
					console.log('er', err.response.data.msg);
				});
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

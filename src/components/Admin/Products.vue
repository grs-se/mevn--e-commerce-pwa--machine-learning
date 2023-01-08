<template>
	<center>
		<div>
			<h5 class="btn-danger">Products</h5>
			<!-- add new product start -->

			<button
				class="btn btn-success form-group bn"
				@click="CreateNew ? (CreateNew = !CreateNew) : (CreateNew = !CreateNew)"
			>
				New Product
			</button>

			<form v-if="CreateNew" class="d">
				<div class="form-row">
					<div class="col-md-12">
						<img class="ii" :src="NewProdData.imgSrc" />

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
							v-model="NewProdData.CatId"
							class="form-control"
							@change="ChangeNewProdCat($event)"
						>
							<option
								v-for="CatData in CategoriesList"
								:key="CatData.id"
								:value="CatData.id"
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

			<!-- add new product end -->
			<div v-if="!CreateNew">
				<!-- <i  v-if="EditMode" > -->
				<div v-for="data in NewProductsList" :key="data.id">
					<!-- edit mode start -->
					<form v-if="data.isEdit" class="d">
						<div class="form-row">
							<div class="col-md-12">
								<img class="ii" :src="data.imgSrc" />

								<div class="fileUpload">
									<input
										type="file"
										class="upload"
										enctype="multipart/form-data"
										@change="onFileChange($event, data.id)"
									/>
									<span>Upload</span>
								</div>
							</div>
							<div class="form-group col-md-6">
								<label>Name</label>
								<input
									v-model="data.name"
									type="text"
									class="form-control"
									placeholder="Product name"
								/>
							</div>
							<div class="form-group col-md-6">
								<label>Price</label>
								<input
									v-model="data.price"
									type="number"
									class="form-control"
									placeholder="Product Price"
								/>
							</div>
						</div>
						<div class="form-group">
							<label>Desc</label>
							<input
								v-model="data.desc"
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
									@change="ChangeProductCat($event, data.id)"
								>
									<option
										v-for="catData in CategoriesList"
										:key="catData.id"
										:selected="CheckTheCat(catData.id, data.id)"
										:value="catData.id"
									>
										{{ catData.name }}
									</option>
								</select>
							</div>
						</div>

						<button
							class="btn btn-primary"
							@click="SaveData($event, data.id, data)"
						>
							Save
						</button>

						<button class="btn btn-success" @click="Delete(data.id)">
							Delete
						</button>
					</form>
					<!-- edit mode end -->

					<!-- show mode start -->
					<div v-if="!data.isEdit" class="card d">
						<img class="card-img-top" :src="data.imgSrc" :alt="data.name" />
						<div class="card-body">
							<h5 class="card-title">Name: {{ data.name }}</h5>
							<p class="card-text">Desc: {{ data.desc }}</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Price: {{ data.price }}</li>
							<li class="list-group-item danger">
								Category: {{ GetCatById(data.CatId) }}
							</li>
						</ul>
						<div class="card-body">
							<a
								class="card-link btn btn-danger"
								@click="data.isEdit = !data.isEdit"
								>Edit</a
							>
						</div>
					</div>

					<!-- show mode end -->
				</div>
			</div>

			<hr />
			<pagination
				v-if="!CreateNew"
				component-name="ProductsComponent"
				@new-products-data="NewProductsData"
			/>
		</div>
	</center>
</template>

<script>
import Pagination from "./PaginationStore.vue";
import { mapGetters, mapActions } from "vuex";
export default {
	name: "ProductsView",
	components: { Pagination },
	data() {
		return {
			ProductsList: [],
			NewProductsList: [],
			CategoriesList: [],
			NewProdData: {
				id: "",
				CatId: "",
				name: "",
				desc: "",
				price: "",
				imgSrc: "",
				isEdit: false,
			},
			selected: "",
			CreateNew: false,
			PageNumber: null,
		};
	},
	computed: {
		...mapGetters(["AllProducts", "AllCategories"]),
	},
	mounted() {
		this.GetProdListFromStore();
		this.GetCatListFromStore();
		this.AddEditToProductsList();
	},
	created() {
		this.GetProducts();
		this.GetCategories();
	},
	methods: {
		...mapActions([
			"GetProducts",
			"ADD_NEW_PRODUCT",
			"EditOneProduct",
			"DeleteOneProduct",
			"GetCategories",
		]),
		GetProdListFromStore: function () {
			this.ProductsList = this.AllProducts;
		},
		GetCatListFromStore: function () {
			this.CategoriesList = this.AllCategories;
		},
		AddEditToProductsList: function () {
			let newData = [];
			for (let index = 0; index < this.ProductsList.length; index++) {
				let id = this.ProductsList[index]["id"];
				let name = this.ProductsList[index]["name"];
				let price = this.ProductsList[index]["price"];
				let desc = this.ProductsList[index]["desc"];
				let CatId = this.ProductsList[index]["CatId"];
				let imgSrc = this.ProductsList[index]["imgSrc"];

				newData.push({ id, name, CatId, price, imgSrc, desc, isEdit: false });
			}
			this.NewProductsList = [];
			this.NewProductsList = newData;
		},
		GetCatById(CatId) {
			let el = this.CategoriesList.find((el) => el.id == CatId);
			// console.log(el);
			// FIXME el.name returning undefined
			return el;
		},
		CheckTheCat(CatId, ProductId) {
			let Pdata = this.NewProductsList.find((Pdata) => Pdata.id == ProductId);
			if (CatId === Pdata.CatId) {
				return true;
			} else {
				return false;
			}
		},
		ChangeProductCat(e, prodId) {
			let newDataArr = [];
			for (let index = 0; index < this.NewProductsList.length; index++) {
				let element = this.NewProductsList[index];
				if (element.id === prodId) {
					element["CatId"] = e.target.value;
					newDataArr.push(element);
				} else {
					newDataArr.push(element);
				}
			}
			this.NewProductsList = newDataArr;
		},
		SaveData(e, ProdId, newData) {
			e.preventDefault();
			let data = {
				id: ProdId,
				name: newData.name,
				CatId: newData.CatId,
				price: newData.price,
				desc: newData.desc,
				imgSrc: newData.imgSrc,
			};
			this.EditOneProduct(data);
			this.AddEditToProductsList();
		},
		onFileChange(e, prodId) {
			let newDataArr = [];
			for (let index = 0; index < this.NewProductsList.length; index++) {
				let element = this.NewProductsList[index];
				if (prodId === element.id) {
					let reader = new FileReader();
					reader.readAsDataURL(e.target.files[0]);
					reader.onload = () => {
						element["imgSrc"] = reader.result;
					};
					newDataArr.push(element);
				} else {
					newDataArr.push(element);
				}
			}
			this.NewProductsList = newDataArr;
		},
		Delete(ID) {
			let data = { id: ID };
			this.DeleteOneProduct(data);
			this.GetCatListFromStore();
			this.AddEditToProductsList();
		},
		ChangeNewProdCat(e) {
			this.NewProdData.CatId = e.target.value;
		},
		onFileNewImg(e) {
			let reader = new FileReader();
			reader.readAsDataURL(e.target.files[0]);
			reader.onload = () => {
				this.NewProdData.imgSrc = reader.result;
			};
		},
		AddNewProduct(e) {
			e.preventDefault();
			if (
				!this.NewProdData.name ||
				!this.NewProdData.desc ||
				!this.NewProdData.price ||
				!this.NewProdData.imgSrc ||
				!this.NewProdData.CatId
			) {
				alert("Please Complete From Data");
			} else {
				this.ADD_NEW_PRODUCT(this.NewProdData);
				this.AddEditToProductsList();
				this.CreateNew = !this.CreateNew;
			}
		},
		NewProductsData(data, page) {
			this.PageNumber = page;
			this.ProductsList = data;
			this.CategoriesList = this.AllCategories;
			this.AddEditToProductsList();
		},
	},
};
</script>

<style scoped>
.userimg {
	max-width: 10%;
	border-radius: 50%;
}
.m {
	margin: 10px auto;
}

.wid {
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}
.z {
	font-size: 14px;
	font-weight: bold;
}

.bn {
	margin: 5px;
}

.im {
	max-width: 10%;
	border-radius: 50%;
}

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

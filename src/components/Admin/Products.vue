<template>
	<center>
		<div>
			<h5 class="btn-danger">Products</h5>
			<!-- add new product start -->

			<button class="btn btn-success form-group bn">New Product</button>

			<form class="d">
				<div class="form-row">
					<div class="col-md-12">
						<img class="ii" />

						<div class="fileUpload">
							<input type="file" class="upload" enctype="multipart/form-data" />
							<small>Upload Img</small>
						</div>
					</div>
					<div class="form-group col-md-6">
						<label>Name</label>
						<input
							type="text"
							class="form-control"
							placeholder="Product name"
						/>
					</div>
					<div class="form-group col-md-6">
						<label>Price</label>
						<input
							type="number"
							class="form-control"
							placeholder="Product Price"
						/>
					</div>
				</div>
				<div class="form-group">
					<label>Desc</label>
					<input type="text" class="form-control" placeholder="Description" />
				</div>

				<div class="form-row">
					<div class="form-group col-md-4">
						<label for="inputCategories">Categories</label>
						<select class="form-control">
							<option>Catname</option>
						</select>
					</div>
				</div>

				<button type="submit" class="btn btn-primary">Add</button>
			</form>

			<!-- add new product end -->
			<div>
				<!-- <i  v-if="EditMode" > -->
				<div>
					<!-- edit mode start -->
					<form class="d">
						<div class="form-row">
							<div class="col-md-12">
								<img class="ii" src="" />

								<div class="fileUpload">
									<input
										type="file"
										class="upload"
										enctype="multipart/form-data"
									/>
									<span>Upload</span>
								</div>
							</div>
							<div class="form-group col-md-6">
								<label>Name</label>
								<input
									type="text"
									class="form-control"
									placeholder="Product name"
								/>
							</div>
							<div class="form-group col-md-6">
								<label>Price</label>
								<input
									type="number"
									class="form-control"
									placeholder="Product Price"
								/>
							</div>
						</div>
						<div class="form-group">
							<label>Desc</label>
							<input
								type="text"
								class="form-control"
								placeholder="Description"
							/>
						</div>

						<div class="form-row">
							<div class="form-group col-md-4">
								<label for="inputCategories">Categories</label>
								<select class="form-control">
									<option>name</option>
								</select>
							</div>
						</div>

						<button class="btn btn-primary">Save</button>

						<button class="btn btn-success">Delete</button>
					</form>
					<!-- edit mode end -->

					<!-- show mode start -->
					<div class="card d">
						<img class="card-img-top" />
						<div class="card-body">
							<h5 class="card-title">Name</h5>
							<p class="card-text">Desc</p>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">Price:</li>
							<li v class="list-group-item danger">Category</li>
						</ul>
						<div class="card-body">
							<a class="card-link btn btn-danger">Edit</a>
						</div>
					</div>

					<!-- show mode end -->
				</div>
			</div>
		</div>
	</center>
</template>

<script>
export default {
	name: "ProductsView",
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

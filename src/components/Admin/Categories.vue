<template>
	<center>
		<div>
			<h5 class="btn-danger">Categories</h5>
			<!-- add new Cat start -->
			<input class="form-group bn" type="text" placeholder="Category Name" />
			<button class="btn btn-success form-group bn">New Category</button>
			<!-- add new cat end -->
			<ul class="list-group m">
				<li
					class="z list-group-item d-flex justify-content-between align-items-center"
				>
					<input type="text" />
					Cat Name 1
					<div class="form-group">
						<button class="form-control btn btn-primary">Edit</button>
						<button class="form-control btn btn-success">Save</button>
						<!-- delete item -->
						<button class="form-control btn btn-danger">Delete</button>
					</div>
				</li>
				<li
					class="z list-group-item d-flex justify-content-between align-items-center"
				>
					<input type="text" />
					Cat Name 2
					<div class="form-group">
						<button class="form-control btn btn-primary">Edit</button>
						<button class="form-control btn btn-success">Save</button>
						<!-- delete item -->
						<button class="form-control btn btn-danger">Delete</button>
					</div>
				</li>
			</ul>
		</div>
	</center>
</template>

<script>
export default {
	name: "CategoriesView",
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
</style>

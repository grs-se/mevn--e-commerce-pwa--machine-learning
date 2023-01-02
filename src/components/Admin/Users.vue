<template>
	<center>
		<div>
			<h5 class="btn-danger">Users</h5>

			<ul class="list-group m">
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					<img class="userimg" alt="" />
					<span class="badge badge-primary badge-pill">User</span>
					<span class="badge badge-warning badge-pill">Admin</span>
					name
					<div class="form-group">
						<select class="form-control" id="exampleFormControlSelect1">
							<option class="btn btn-primary">User</option>
							<option class="btn btn-warning">Admin</option>
						</select>
					</div>
				</li>
			</ul>
		</div>
	</center>
</template>

<script>
export default {
	name: "UsersView",
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
</style>

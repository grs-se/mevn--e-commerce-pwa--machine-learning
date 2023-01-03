<template>
	<center>
		<div>
			<h5 class="btn-danger">Users</h5>
			<ul v-for="data in UsersList" :key="data.id" class="list-group m">
				<li
					class="list-group-item d-flex justify-content-between align-items-center"
				>
					<img class="userimg" alt="" :src="data.imgSrc" />
					<span v-if="!data.isAdmin" class="badge badge-primary badge-pill"
						>User</span
					>
					<span v-if="data.isAdmin" class="badge badge-warning badge-pill"
						>Admin</span
					>
					{{ data.name }}
					<div class="form-group">
						<select
							id="exampleFormControlSelect1"
							v-model="data.isAdmin"
							class="form-control"
							@change="ChangeUserRole(data.id, data.isAdmin)"
						>
							<option :value="false" class="btn btn-primary">User</option>
							<option :value="true" class="btn btn-warning">Admin</option>
						</select>
					</div>
				</li>
			</ul>

			<pagination-store
				component-name="UsersComponent"
				@new-UserData="NewUserData"
			></pagination-store>
		</div>
	</center>
</template>

<script>
import PaginationStore from "./PaginationStore.vue";
import { mapActions, mapGetters } from "vuex";
export default {
	name: "UsersView",
	components: { PaginationStore },
	data() {
		return {
			UsersList: [],
			PageNumber: null,
		};
	},
	computed: {
		...mapGetters(["AllUsers"]),
	},
	created() {
		this.GetUserList();
		this.GetUsersListFromStore();
	},
	methods: {
		...mapActions(["GetUserList", "EditOneUser", "GetUserByPageNum"]),
		GetUsersListFromStore: function () {
			this.UsersList = this.AllUsers;
		},
		ChangeUserRole: function (id, role) {
			let data = { ID: id, isAdmin: role };
			this.EditOneUser(data);
		},
		NewUserData(data, page) {
			this.PageNumber = page;
			this.UsersList = data;
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
</style>

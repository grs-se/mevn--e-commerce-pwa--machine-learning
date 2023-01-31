<template>
	<center>
		<div>
			<h5 class="btn-danger">Categories</h5>
			<!-- add new Cat start -->
			<input
				v-model="NewAddedCat"
				class="form-group bn"
				type="text"
				placeholder="Category Name"
			/>
			<button class="btn btn-success form-group bn" @click="AddNewCat">
				New Category
			</button>
			<!-- add new cat end -->
			<ul v-for="data in NewCatList" :key="data._id" class="list-group m">
				<li
					class="z list-group-item d-flex justify-content-between align-items-center"
				>
					<input v-if="data.isEdit" v-model="data.name" type="text" />
					{{ data.name }}
					<div class="form-group">
						<button
							v-if="!data.isEdit"
							class="form-control btn btn-primary"
							@click="data.isEdit = !data.isEdit"
						>
							Edit
						</button>
						<button
							v-if="data.isEdit"
							class="form-control btn btn-success"
							@click="SaveAfterEdit(data._id, data)"
						>
							Save
						</button>
						<!-- delete item -->
						<button
							v-if="!data.isEdit"
							class="form-control btn btn-danger"
							@click="Delete(data._id)"
						>
							Delete
						</button>
					</div>
				</li>
			</ul>

			<hr />
			<pagination-store
				component-name="CategoriesComponent"
				@new-category-data="NewCatListPageData"
			></pagination-store>
		</div>
	</center>
</template>

<script>
import PaginationStore from './PaginationStore.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'CategoriesView',
	components: { PaginationStore },
	data() {
		return {
			CatList: [],
			NewCatList: [], // the main data arr
			NewAddedCat: '',
			PageNumber: null,
		};
	},
	computed: {
		...mapGetters(['AllCategories']),
	},
	mounted() {
		this.GetCatListFromStore();
		this.AddEditToCatList();
	},
	created() {
		this.GetCategories();
		this.$store.watch((state) => {
			console.log('store change cat.vue', state);
			this.GetCatListFromStore();
			this.AddEditToCatList();
		});
	},
	methods: {
		...mapActions([
			'ADD_NEW_CAT',
			'EditOneCat',
			'DeleteOneCat',
			'GetCategories',
		]),
		GetCatListFromStore: function () {
			this.CatList = this.AllCategories;
		},
		SaveAfterEdit: function (ID, ProjectData) {
			// console.log('id', ID, ProjectData);
			let data = { ID, NewCatName: ProjectData['name'] };
			this.EditOneCat(data);
			this.AddEditToCatList();
		},
		AddNewCat() {
			let data = { NewCatName: this.NewAddedCat };
			this.ADD_NEW_CAT(data);
			this.AddEditToCatList();
		},
		Delete: function (ID) {
			let data = { ID };
			this.DeleteOneCat(data);
			this.GetCatListFromStore();
			this.AddEditToCatList();
		},
		NewCatListPageData(data, page) {
			this.PageNumber = page;
			this.CatList = data;
			this.AddEditToCatList();
		},
		AddEditToCatList() {
			// add isEdit to the array
			let newData = [];
			for (let index = 0; index < this.CatList.length; index++) {
				let _id = this.CatList[index]['_id'];
				let name = this.CatList[index]['name'];
				newData.push({ _id, name, isEdit: false });
			}
			this.NewCatList = []; // empty the arr
			this.NewCatList = newData;
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
</style>

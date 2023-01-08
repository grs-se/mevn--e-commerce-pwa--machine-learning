<template>
	<div class="container wid">
		<div class="row">
			<nav aria-label="Page navigation  ">
				<ul class="pagination">
					<li class="page-item">
						<button class="page-link" @click="NextPrevPage(false)">
							<span aria-hidden="true">&laquo;</span>
							<span class="sr-only">Previous</span>
						</button>
					</li>

					<li v-for="(Page, index) in PageArray" :key="index" class="page-item">
						<button
							:class="PageSelected === Page ? 'page-link active' : 'page-link'"
							@click="ChangePage(Page)"
						>
							{{ Page }}
						</button>
					</li>

					<li class="page-item">
						<button class="page-link" @click="NextPrevPage(true)">
							<span aria-hidden="true">&raquo;</span>
							<span class="sr-only">Next</span>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	name: "PaginationStore",
	props: {
		componentName: {
			type: String,
			default: "UsersComponent",
		},
	},
	emits: ["new-user-data", "new-category-data"],
	data() {
		return {
			PageSelected: "",
			PageArray: [],
		};
	},
	computed: {
		...mapGetters(["AllUsers", "AllCategories", "AllProducts"]),
	},
	mounted() {
		if (!this.$route.query.page) {
			this.$router
				.push({
					path: "/",
					name: "Admin",
					query: {
						page: 1,
					},
				})
				.catch(() => {});
		}
		this.PageSelected = parseInt(this.$route.query.page);
		this.Pagination();
	},
	methods: {
		...mapActions(["GetUserByPageNum", "GetCatByPageNum", "GetProdByPageNum"]),
		ChangePage(page) {
			if (this.componentName == "UsersComponent") {
				this.GetUserByPageNum(page);
				let newData = this.AllUsers;
				this.$emit("new-user-data", newData, page);
			}
			if (this.componentName == "CategoriesComponent") {
				this.GetCatByPageNum(page);
				let newData = this.AllCategories;
				this.$emit("new-category-data", newData, page);
			}
			if (this.componentName == "ProductsComponent") {
				this.GetProdByPageNum(page);
				let newData = this.AllProducts;
				this.$emit("new-products-data", newData, page);
			}
			this.PageSelected = page;
			this.$router
				.push({
					path: "/",
					name: "Admin",
					query: {
						page: page,
					},
				})
				.catch(() => {});
		},
		Pagination() {
			this.PageArray = [];
			let Scale = this.PageSelected + 3;
			for (let index = this.PageSelected; index < Scale; index++) {
				this.PageArray.push(index);
			}
		},
		NextPrevPage(con) {
			if (con == false && this.PageSelected == 1) {
				console.log("non");
			}
			if (con == false && this.PageSelected !== 1) {
				this.PageSelected = this.PageSelected - 1;
				this.ChangePage(this.PageSelected);
				this.Pagination();
			}
			if (con == true) {
				this.PageSelected = this.PageSelected + 1;
				this.ChangePage(this.PageSelected);
				this.Pagination();
			}
		},
	},
};
</script>

<style scoped>
.wid {
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}
</style>

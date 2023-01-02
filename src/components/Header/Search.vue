<template>
	<i>
		<input
			v-model="SearchData"
			class="form-control mr-sm-0"
			type="search"
			placeholder="Search"
			aria-label="Search"
		/>
		<button
			class="btn btn-outline-success my-2 my-sm-2"
			@click="Search($event)"
		>
			Search
		</button>
	</i>
</template>

<script>
export default {
	name: "SearchView",
	data() {
		return {
			SearchData: "",
		};
	},
	methods: {
		Search(e) {
			e.preventDefault();
			this.$router
				.push({
					path: "/SearchProduct",
					name: "SearchProduct",
					query: {
						SData: this.SearchData,
					},
				})
				.catch(() => {});
		},
	},
};
</script>

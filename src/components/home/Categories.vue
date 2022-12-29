<template>
	<div>
		<ul class="list-group list-group-flush">
			<li v-for="item in categoriesList" :key="item.id" class="list-group-item">
				<!-- Default checked -->
				<div class="custom-control custom-checkbox">
					<input
						:id="item.id"
						type="checkbox"
						class="custom-control-input"
						@change="checkCat(item.id)"
					/>
					<label class="custom-control-label" :for="item.id">{{
						item.name
					}}</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "CategoriesView",
	data() {
		return {
			categoriesList: [
				{ id: 1, name: "phone" },
				{ id: 2, name: "laptop" },
				{ id: 3, name: "cameras" },
				{ id: 4, name: "shirts" },
				{ id: 5, name: "shoes" },
			],
		};
	},
	methods: {
		checkCat(cat) {
			console.log("cat id", cat);
			this.$emit("checkCat", cat);
		},
	},
};
</script>

<style scoped>
.act {
	background-color: gainsboro;
}
</style>

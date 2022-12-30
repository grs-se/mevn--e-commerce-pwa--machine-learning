<template>
	<div>
		<ul class="list-group list-group-flush">
			<li v-for="item in CategoriesList" :key="item.id" class="list-group-item">
				<!-- Default checked -->
				<div class="custom-control custom-checkbox">
					<input
						:id="item.id"
						type="checkbox"
						class="custom-control-input"
						@change="CheckCategory(item.id)"
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
import { mapGetters, mapActions } from "vuex";
export default {
	name: "CategoriesView",
	emits: ["CheckCategory"],
	data() {
		return {
			CategoriesList: [],
		};
	},
	computed: {
		...mapGetters(["AllCategories"]),
	},
	created() {
		this.GetCategories();
	},
	mounted() {
		this.CategoriesList = this.AllCategories;
	},

	methods: {
		// vuex
		...mapActions(["GetCategories"]),
		// vuex end
		CheckCategory(cat) {
			console.log("cat id", cat);
			this.$emit("CheckCategory", cat);
		},
	},
};
</script>

<style scoped>
.act {
	background-color: gainsboro;
}
</style>

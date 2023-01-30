<template>
	<div>
		<ul class="list-group list-group-flush">
			<li
				v-for="item in CategoriesList"
				:key="item._id"
				class="list-group-item"
			>
				<!-- Default checked -->
				<div class="custom-control custom-checkbox">
					<input
						:id="item._id"
						type="checkbox"
						class="custom-control-input"
						@change="CheckCategory(item._id)"
					/>
					<label class="custom-control-label" :for="item._id">{{
						item.name
					}}</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'CategoriesView',
	emits: ['CheckCategory'],
	data() {
		return {
			CategoriesList: [],
		};
	},
	computed: {
		...mapGetters(['allCategories']),
	},
	created() {
		this.GetCategories();
		this.$store.watch(() => {
			this.GetCatListFromStore();
		});
	},
	mounted() {
		this.CategoriesList = this.allCategories;
	},

	methods: {
		// vuex
		...mapActions(['GetCategories']),
		// vuex end
		CheckCategory(cat) {
			console.log('cat id', cat);
			this.$emit('CheckCategory', cat);
		},
		GetCatListFromStore: function () {
			this.CategoriesList = this.allCategories;
		},
	},
};
</script>

<style scoped>
.act {
	background-color: gainsboro;
}
</style>

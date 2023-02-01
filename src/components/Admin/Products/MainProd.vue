<template>
	<div class="">
		<div class="">
			<AddNewProd key="AddNew" @new-data="RestData" />

			<ProdList key="ProdList" ref="child" />
		</div>
	</div>
</template>

<script>
import AddNewProd from './AddNewProd.vue';
import ProdList from './ProdList.vue';

export default {
	name: 'MainProd',
	components: { AddNewProd, ProdList },
	methods: {
		RestData() {
			console.log('any main prod');
			this.$refs.child.GetProdListFromStore();
		},
	},
};
</script>

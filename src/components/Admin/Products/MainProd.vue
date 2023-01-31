<template>
	<div class="">
		<div class="">
			<AddNewProd key="AddNew" />
			<ProdList key="ProdList" />
		</div>
	</div>
</template>

<script>
import AddNewProd from './AddNewProd.vue';
import ProdList from './ProdList.vue';

export default {
	name: 'MainProd',
	components: { AddNewProd, ProdList },
};
</script>

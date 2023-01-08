<template>
	<div>
		<h1>Chart</h1>
		<pie-chart :data="pieData"></pie-chart>
		<area-chart :data="areaData"></area-chart>
	</div>
</template>
<script>
export default {
	name: "ChartView",
	data() {
		return {
			pieData: [],
			areaData: {},
		};
	},
	mounted() {
		this.InitGetData();
	},
	methods: {
		InitGetData() {
			// in real life data from http server
			this.areaData = {
				"2021-8-6": 290,
				"2021-8-7": 178,
				"2021-8-8": 360,
				"2021-8-9": 580,
				"2021-8-10": 200,
				"2021-8-11": 610,
			};
			this.pieData = [
				["blueberry", 55],
				["strawberry", 24],
				["mango", 88],
			];
		},
	},
};
</script>

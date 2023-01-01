<template>
	<div>
		<center>
			<h3 v-if="BigData.length > 0" class="hS">Items that You may Like</h3>
		</center>
		<div v-if="isLoad" class="container">
			<transition-group v-if="isLoad" name="fade" tag="div" class="row">
				<div v-for="item in BigData" :key="item.id" class="col">
					<div class="card">
						<img class="card-img-top" :src="item.imgSrc" />
						<div class="card-block">
							<router-link :to="{ path: '/item', query: { ID: item.id } }">
								<h6 class="card-title vx">{{ MaxName(item.name) }}</h6>
							</router-link>

							<p class="card-text">£{{ item.price }}</p>
						</div>
					</div>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			BigData: [],
			isLoad: Boolean,
		};
	},
	created() {
		setTimeout(() => {
			let Arr = [
				{
					id: "12",
					name: "Cat i Phone 11 Pro s",
					desc: "iphoe 11 pro back",
					price: "599",
					imgSrc:
						"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418",
				},
				{
					id: "14",
					name: "Cat Huawei s",
					desc: "Huawei Huawei",
					price: "1000",
					imgSrc:
						"https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg",
				},
				{
					id: "16",
					name: "Cat Nike shirt s",
					desc: "red Nike shirt",
					price: "12",
					imgSrc:
						"https://www.marni.com/dw/image/v2/AAPK_PRD/on/demandware.static/-/Library-Sites-marni-shared/default/dwc934330e/Veja%20x%20Marni/01_FLYOUT_VEJA_300_225.jpg?sw=1500",
				},
				{
					id: "18",
					name: "Cat Timberland shirt",
					desc: "black templerland shirt",
					price: "20",
					imgSrc:
						"https://lp2.hm.com/hmgoepprod?set=source[/53/50/5350856a7ed6b4ed6617418a0fbbcef78cc6e6b2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]",
				},
				{
					id: "20",
					name: "Cat Addidas shirt",
					desc: "Addidas wight shirt",
					price: "13",
					imgSrc:
						"https://cache.net-a-porter.com/images/products/1009804/1009804_in_2000_q80.jpg",
				},
				{
					id: "24",
					name: "Cat Nike shoes",
					desc: "black Nike shoes",
					price: "50",
					imgSrc:
						"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682",
				},
				{
					id: "26",
					name: "Cat Nikon Camera",
					desc: "Nikon camera description",
					price: "2400",
					imgSrc:
						"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRaTX9QMs46bmzI8t4I6LJq5qeFdWFPsYsF7DvLY48ydRVUDSsyAG39YTEcBK6l&usqp=CAc",
				},
				{
					id: "28",
					name: "Cat Samsung Watch",
					desc: "Samsung Glaxey Watch",
					price: "5",
					imgSrc:
						"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLR0-Y4VqlhggjclgAfxSXaNEWKDc311lw9480NKAt727IplX1XqHqbVFOcsgfdg4LNhhwswRAFKp0&usqp=CAc",
				},
			];

			const shuffled = Arr.sort(() => 0.5 - Math.random());
			let selected = shuffled.slice(0, 5);
			this.BigData = selected;
			this.isLoad = true;
			console.log("data x", this.BigData);
		}, 5000);
	},
	methods: {
		MaxName(value) {
			if (value.length < 12) return value;
			return value.slice(0, 12) + "...";
		},
	},
};
</script>

<style scoped>
.card {
	width: 10rem;
	padding: 20px;
}

.card > img {
	height: 100px;
	width: 100px;
}

.col {
	margin: 1%;
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}

.vx:hover {
	cursor: pointer;
	color: darkred;
}

.hS {
	background: beige;
	padding: 3px;
	font-family: monospace;
	font-style: oblique;
}
</style>

<template>
	<div>
		<center>
			<h3 v-if="BigData.length > 0" class="hS">Items that You may Like</h3>
		</center>
		<div class="container">
			<transition-group v-if="isLoad" name="fade" tag="div" class="row">
				<div v-for="item in BigData" :key="item._id" class="col">
					<div class="card">
						<img class="card-img-top" :src="item.product_img" />
						<div class="card-block">
							<router-link
								:to="{ path: '/SpecificItem', query: { ID: item._id } }"
							>
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
import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

export default {
	data() {
		return {
			BigData: [],
			isLoad: Boolean,
		};
	},
	created() {
		let Arr = [];
		let token = JSON.parse(localStorage.getItem('Auth')).Token;

		if (token) {
			axios
				.get(`${URL_backend}/machine_learning/All`, {
					headers: { 'x-auth-token': token },
				})
				.then((res) => {
					for (let index = 0; index < res.data.length; index++) {
						const element = res.data[index];
						Arr.push(element);
					}

					if (Arr.length > 4) {
						const shuffled = Arr.sort(() => 0.5 - Math.random());
						let selected = shuffled.slice(0, 5);
						this.BigData = selected;
						this.isLoad = true;
					} else {
						this.BigData = Arr;
						this.isLoad = true;
					}
				});
		}
	},
	methods: {
		MaxName(value) {
			if (value.length < 12) return value;
			return value.slice(0, 12) + '...';
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

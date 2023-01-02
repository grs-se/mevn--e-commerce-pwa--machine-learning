<template>
	<center>
		<div>
			<h3>
				Searching for :
				<small>{{ SearchData }}</small>
			</h3>

			<div class="col-md-9">
				<div class="container">
					<div class="card-group">
						<div class="row">
							<div class="card col-md-4">
								<img
									class="card-img-top"
									src="https://priceintanzania.com/wp-content/uploads/2020/09/Huawei-Enjoy-20-5G.jpg"
									alt="Card image cap"
								/>
								<div class="card-body">
									<h6>Price: $1000</h6>
									<h5 class="card-title">Card title</h5>
									<button class="btn btn-danger">
										<small> Add to cart</small>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</center>
</template>

<script>
export default {
	data() {
		return {
			SearchData: "",
		};
	},
	watch: {
		$route(to, from) {
			this.SearchData = to.query.SData;
			from;
		},
	},
	mounted() {
		this.SearchData = this.$route.query.SData;
	},
};
</script>

<template>
	<div>
		<section class="contact-from pt-4">
			<div class="container">
				<div class="row mt-12">
					<!-- Register  -->
					<div class="col-md-6 mx-auto register">
						<div class="form-wrapper">
							<div class="row">
								<div class="col-md-12">
									<h4>Register</h4>
								</div>
							</div>
							<form>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.FName"
												type="text"
												class="form-control"
												placeholder="First name"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.LName"
												type="text"
												class="form-control"
												placeholder="Last name"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.Email"
												type="email"
												class="form-control"
												placeholder="Email"
											/>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<div class="form-check form-check-inline">
												<input
													id="inlineRadio1"
													v-model="RegisterData.GenderMale"
													class="form-check-input"
													type="radio"
													name="inlineRadioOptions"
													value="true"
												/>
												<label class="form-check-label" for="inlineRadio1"
													>Male</label
												>
											</div>
											<div class="form-check form-check-inline">
												<input
													id="inlxineRadio2"
													v-model="RegisterData.GenderFemale"
													class="form-check-input"
													type="radio"
													name="inlineRadioOptions"
													value="true"
												/>
												<label class="form-check-label" for="inlineRadio1"
													>Female</label
												>
											</div>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.Pass"
												type="password"
												class="form-control"
												placeholder="Password"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.confirmPass"
												type="password"
												class="form-control"
												placeholder="Confirm Password"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.UserDate"
												type="date"
												class="form-control"
											/>
										</div>
									</div>
								</div>
								<div class="mt-3">
									<button class="btn btn-primary" @click="Register($event)">
										Register
									</button>
								</div>
							</form>
						</div>
					</div>

					<!-- Login -->
					<div class="col-md-6 mx-auto login">
						<div class="form-wrapper">
							<div class="row">
								<div class="col-md-12">
									<h4>Login</h4>
								</div>
							</div>
							<form>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="LoginData.Email"
												type="email"
												class="form-control"
												placeholder="Email"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="LoginData.Password"
												type="password"
												class="form-control"
												placeholder="Password"
											/>
										</div>
									</div>
								</div>
								<div class="mt-3">
									<button class="btn btn-primary" @click="Login($event)">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "LoginRegister",
	data() {
		return {
			RegisterData: {
				FName: "",
				LName: "",
				Email: "",
				GenderMale: false,
				GenderFemale: false,
				Pass: "",
				confirmPass: "",
				UserDate: [],
			},
			LoginData: {
				Email: "",
				Password: "",
			},
		};
	},
	methods: {
		...mapActions(["SetUserAuth"]),
		Register: function (e) {
			e.preventDefault();
			console.log("reg", this.RegisterData);
			let data = { isLoggedIn: true, isAdmin: true };
			this.SetUserAuth(data);
			this.$router.push({ path: "/UserProfile" });
		},
		Login: function (e) {
			e.preventDefault();
			console.log("Log", this.LoginData);
			let data = { isLoggedIn: true, isAdmin: true };
			this.SetUserAuth(data);
			this.$router.push({ path: "/UserProfile" });
		},
	},
};
</script>

<style scoped>
.register {
	background: #9e9e9e26;
	padding: 15px;
}

.login {
	background: #007bff0a;
	padding: 15px;
}
</style>

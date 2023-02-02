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
									<div
										v-if="RegisterError !== ''"
										class="alert alert-danger"
										role="alert"
									>
										{{ RegisterError }}
									</div>
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
												class="form-control reg-email"
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
												class="form-control reg-pass"
												placeholder="Password "
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="RegisterData.confirmPass"
												type="password"
												class="form-control confirm-pass"
												placeholder="Confirm Password "
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
									<button
										class="btn btn-primary register-input"
										@click="Register($event)"
									>
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
									<div
										v-if="LoginError"
										class="alert alert-danger"
										role="alert"
									>
										Invalid username or password
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="LoginData.Email"
												type="email"
												class="form-control email-input"
												placeholder="Email"
											/>
										</div>
									</div>

									<div class="col-md-6">
										<div class="form-group">
											<input
												v-model="LoginData.Password"
												type="password"
												class="form-control pass-input"
												placeholder="Password"
											/>
										</div>
									</div>
								</div>
								<div class="mt-3">
									<button
										class="btn btn-primary login-btn"
										@click="Login($event)"
									>
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
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
const URL_backend = `https://olx-vue.herokuapp.com/api`;
// const port = process.env.PORT || 3000;
// const URL_backend = `http://localhost:${port}/api`;

export default {
	name: 'LoginRegister',
	data() {
		return {
			RegisterData: {
				FName: '',
				LName: '',
				Email: '',
				GenderMale: false,
				GenderFemale: false,
				Pass: '',
				confirmPass: '',
				UserDate: [],
			},
			LoginData: {
				Email: '',
				Password: '',
			},
			LoginError: false,
			RegisterError: '',
		};
	},
	computed: {
		...mapGetters(['UserAuth']),
	},
	methods: {
		...mapActions(['SetUserAuth']),
		Register: function (e) {
			e.preventDefault();
			let userData;
			// check if user male or female
			if (this.RegisterData.GenderMale == 'true') {
				this.RegisterData.GenderMale = false;
				userData = {
					first_name: String(this.RegisterData.FName),
					last_name: String(this.RegisterData.LName),
					email: String(this.RegisterData.Email),
					password: String(this.RegisterData.confirmPass),
					gender: 'male',
					birth_day: String(this.RegisterData.UserDate),
				};
			} else {
				this.RegisterData.GenderFemale = false;
				userData = {
					first_name: String(this.RegisterData.FName),
					last_name: String(this.RegisterData.LName),
					email: String(this.RegisterData.Email),
					password: String(this.RegisterData.confirmPass),
					gender: 'female',
					birth_day: String(this.RegisterData.UserDate),
				};
			}

			// check if password is matched
			if (this.RegisterData.Pass !== this.RegisterData.confirmPass) {
				this.RegisterError = 'Password not matched';
				this.RegisterData.Pass = '';
				this.RegisterData.confirmPass = '';
			} else {
				axios
					.post(`${URL_backend}/users`, userData)
					.then((res) => {
						console.log('Register res', res);
						this.LoginData.Email = res.data.email;
						this.LoginData.Password = this.RegisterData.confirmPass;
						this.RegisterError = '';
					})
					.catch((err) => (this.RegisterError = err.response.data));
			}
			// console.log('reg', this.RegisterData);
			// let data = { isLoggedIn: true, isAdmin: true };
			// this.SetUserAuth(data);
			// this.$router.push({ path: '/UserProfile' });
		},
		Login: function (e) {
			e.preventDefault();
			console.log('Log', this.LoginData);
			// if operation is successful
			let userData = {
				email: String(this.LoginData.Email),
				password: String(this.LoginData.Password),
			};
			axios
				.post(`${URL_backend}/auth`, userData)
				.then((res) => {
					getUserData(res);
					this.LoginError = false;
				})
				.catch((err) => {
					this.LoginError = true;
					console.log('err', err.response.data.msg);
				});

			const getUserData = (Token) => {
				axios
					.get(`${URL_backend}/users/UserData`, {
						headers: { 'x-auth-token': String(Token.data) },
					})
					.then((res) => {
						let data = {
							isLoggedIn: true,
							isAdmin: res.data.isAdmin,
							Token: String(Token.data),
						};
						this.SetUserAuth(data);
						this.$router.push({ path: '/UserProfile' });
					});
			};
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

<template>
	<div>
		<center>
			<h4 class="s">
				UserProfile
				<button v-if="EditMode" class="btn btn-danger" @click="EditData">
					Edit
				</button>
				<button v-if="!EditMode" class="btn btn-info" @click="SaveData">
					Save
				</button>
			</h4>
			<!-- show mode -->
			<div v-if="EditMode">
				<img class="img col col-sm-2" alt="" :src="UserData.imgSrc" />
				<div class="container">
					<div class="row">
						<div class="col-md-8 d">
							<h3>
								First Name :
								<strong class="s">{{ UserData.firstName }}</strong>
							</h3>
							<h3>
								Last Name :
								<strong class="s">{{ UserData.lastName }}</strong>
							</h3>
							<h3>
								Email :
								<strong class="s">{{ UserData.Email }}</strong>
							</h3>
							<h3>
								Gender :
								<strong class="s">{{ UserData.Gender }}</strong>
							</h3>
							<h3>
								Birth Day :
								<strong class="s">{{ UserData.BDay }}</strong>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<!-- show mode end -->
			<!-- edit mode start -->
			<div v-if="!EditMode">
				<img class="img col" :src="UserData.imgSrc" alt="" />
				<div class="fileUpload">
					<input
						type="file"
						class="upload"
						enctype="multipart/form-data"
						@change="onFileChange"
					/>
					<span>Upload</span>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-8 d">
							<h3>
								First Name :
								<strong class="s">{{ UserData.firstName }}</strong>
								<input
									v-model="UserData.firstName"
									class="form-control"
									placeholder="first name"
									type="text"
								/>
							</h3>
							<h3>
								Last Name :
								<strong class="s">{{ UserData.lastName }}</strong>
								<input
									v-model="UserData.lastName"
									class="form-control"
									placeholder="last name"
									type="text"
								/>
							</h3>
							<h3>
								Email :
								<strong class="s">{{ UserData.Email }}</strong>
								<input
									v-model="UserData.Email"
									class="form-control"
									placeholder="email"
									type="email"
									disabled
								/>
							</h3>
							<h3>
								Gender :
								<strong class="s">{{ UserData.Gender }}</strong>
								<select v-model="UserData.Gender" class="form-control">
									<option>male</option>
									<option>fmale</option>
								</select>
							</h3>
							<h3>
								Birth Day :
								<strong class="s">{{ UserData.Bday }}</strong>
								<div class="col-md-6">
									<div class="form-group">
										<input
											v-model="UserData.BDay"
											type="date"
											class="form-control"
										/>
									</div>
								</div>
							</h3>
						</div>
					</div>
				</div>
			</div>
			<!-- edit mode end -->
			<button class="btn btn-danger" @click="DelAccount">Delete Account</button>
		</center>
	</div>
</template>

<script>
import axios from 'axios';
const port = process.env.PORT || 3000;
const URL_backend = `http://localhost:${port}/api`;

import { mapActions } from 'vuex';

export default {
	name: 'UserProfile',
	data() {
		return {
			EditMode: true,
			UserData: {},
			files: null,
			fileReaderBase64: null,
		};
	},
	created() {
		// get user data from server
		const token = JSON.parse(localStorage.getItem('Auth')).Token;
		axios
			.get(`${URL_backend}/users/UserData`, {
				headers: { 'x-auth-token': token },
			})
			.then((res) => {
				let userData = res.data;
				let newArr = {
					userID: userData._id,
					firstName: userData.first_name,
					lastName: userData.last_name,
					Email: userData.email,
					Gender: userData.gender,
					BDay: userData.birth_day,
					imgSrc: userData.profile_img,
				};
				this.UserData = newArr;
			})
			.catch((err) => {
				console.log('err', err.response.data.msg);
			});
	},
	methods: {
		...mapActions(['SetUserAuth']),
		//
		SaveData: function () {
			this.EditMode = !this.EditMode;
			// console.log('Edit User Data', this.UserData);
			const token = JSON.parse(localStorage.getItem('Auth')).Token;

			const PostData = new FormData();
			PostData.append('first_name', this.UserData.firstName);
			PostData.append('last_name', this.UserData.lastName);
			PostData.append('email', this.UserData.Email);
			PostData.append('gender', this.UserData.Gender);
			PostData.append('birth_day', this.UserData.Bday);
			PostData.append('profile_img', this.UserData.imgSrc);

			if (this.files !== null) {
				for (const i of Object.keys(this.files)) {
					PostData.append('image', this.files[i]);
				}
			}

			axios
				.put(`${URL_backend}/users/`, PostData, {
					headers: {
						'x-auth-token': token,
						'Content-Type': 'multipart/form-data',
					},
				})
				.then((res) => {
					console.log('res updated user data', res.data);
				})
				.catch((err) => {
					console.log('err', err.response.data.msg);
				});
		},
		EditData: function () {
			this.EditMode = !this.EditMode;
		},
		onFileChange(e) {
			this.UserData.imgSrc = URL.createObjectURL(e.target.files[0]);
			this.files = e.target.files;
		},
		DelAccount() {
			const token = JSON.parse(localStorage.getItem('Auth')).Token;

			axios
				.delete(`${URL_backend}/users/`, {
					headers: {
						'x-auth-token': token,
					},
				})
				.then((res) => {
					console.log('Deleted user successfully', res.data);
					this.LogOutUser();
				})
				.catch((err) => {
					console.log('err', err.response.data.msg);
				});
		},
		LogOutUser() {
			let data = { isLoggedIn: false, isAdmin: false };
			// this.auth = { isUserLoggedIn: false, isUserAdmin: false };
			this.SetUserAuth(data);
			this.$router.push({ path: '/' });
		},
	},
};
</script>

<style scoped>
.iimg {
	margin-left: auto;
	margin-right: auto;
	width: 10em;
}
.d {
	font-family: cursive;
	border: 1px solid #2f4f4f1f;
	margin: 1% auto;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.s {
	color: darkslategrey;
	font-family: fantasy;
}

.fileUpload {
	background: #00bcbe;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	border-radius: 15px;
	color: #fff;
	font-size: 1em;
	font-weight: bold;
	margin: 1.25em auto; /*20px/16px 0*/
	overflow: hidden;
	padding: 0.875em; /*14px/16px*/
	position: relative;
	text-align: center;
	width: 120px;
	cursor: pointer;
}
.fileUpload:hover,
.fileUpload:active,
.fileUpload:focus {
	background: #00a2a4;
	cursor: pointer;
}
.fileUpload input.upload {
	position: absolute;
	top: 0;
	right: 0;
	margin: 0;
	padding: 0;
	font-size: 20px;
	cursor: pointer;
	opacity: 0;
	filter: alpha(opacity=0);
	width: 148px;
	height: 46px;
	cursor: pointer;
}

input[type='file'] {
	position: fixed;
	right: 100%;
	bottom: 100%;
}
.custom-file-upload {
	border: 1px solid #ccc;
	display: inline-block;
	padding: 6px 12px;
	cursor: pointer;
}
</style>

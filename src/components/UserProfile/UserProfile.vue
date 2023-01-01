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
				<img class="iimg col" alt="" />
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
				<img class="iimg col" :src="UserData.imgSrc" alt="" />
				<div class="fileUpload">
					<input
						type="file"
						class="upload"
						enctype="multipart/form-data"
						@change="OnFileChange"
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
			<button class="btn btn-danger">Delete Account</button>
		</center>
	</div>
</template>

<script>
export default {
	name: "UserProfile",
	data() {
		return {
			EditMode: true,
			UserData: {
				userId: "3",
				firstName: "Josh",
				lastName: "Smith",
				Email: "joshsmith@email.com",
				Gender: "male",
				Bday: "1-1-1992",
				imgSrc:
					"https://www.seekpng.com/png/full/356-3562377_personal-user.png",
			},
		};
	},
	methods: {
		SaveData: function () {
			this.EditMode = !this.EditMode;
			console.log("Edit User Data", this.UserData);
		},
		EditData: function () {
			this.EditMode = !this.EditMode;
		},
		OnFileChange(e) {
			this.UserData.imgSrc = URL.createObjectURL(e.target.files[0]);
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

input[type="file"] {
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

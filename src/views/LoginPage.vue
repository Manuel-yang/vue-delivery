<template>
<div class="body">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css'>
  <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'><link rel="stylesheet" href="./style.css">
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Log In</h4>
											<div class="form-group">
												<input v-model="userName" type="text" name="logemail" class="form-style" placeholder="手机号" id="logemail" autocomplete="off">
												<i class="input-icon uil uil-mobile-android"></i>
											</div>	
											<div class="form-group mt-2">
												<input v-model="userPwd" type="password" name="logpass" class="form-style" placeholder="密码" id="logpass" autocomplete="off">
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a @click="submit" class="btn mt-4">submit</a>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off">
												<i class="input-icon uil uil-user"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off">
												<i class="input-icon uil uil-at"></i>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off">
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a @click="submit" class="btn mt-4">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
const requests = axios.create({ baseURL: 'http://localhost:8081'})
export default {
  data() {
    return {
      userName:'',
      userPwd:'',
      userInfo:{},
    }
  },
  methods: {
    async submit() {
      this.userInfo.userName = this.userName;
      this.userInfo.userPwd = this.userPwd;
      let data = this.userInfo
      await requests.post('api/user/login', {data}).then((res) => {
        if (res.status === 200) {
          this.$session.set("studentId", res.data.object.studentId);
          this.$session.set("userName", this.userName);
          this.$router.push('/OrderPage')
        }
      }, (error) => {
        if (error.response.status === 400) {
          Toast.fail('输入的密码账户有误');
        }
      })
    }
  },
}
</script>

<style scoped>
@import '../assets/css/login.css';
</style>

<template>
<div class="body">
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css'>
  <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'><link rel="stylesheet">
	<div class="section">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span>登录 </span><span>注册</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">登录</h4>
											<div class="form-group">
												<input v-model="userPhone" type="name" name="logephone" class="form-style" placeholder="手机号" id="logephone" autocomplete="off">
												<i class="input-icon uil uil-mobile-android"></i>
											</div>	
											<div class="form-group mt-2">
												<input v-model="userPwd" type="password" name="logpass" class="form-style" placeholder="密码" id="logpass" autocomplete="off">
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a @click="submit" class="btn mt-4">提交</a>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">忘记密码?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3">注册</h4>
											<div class="form-group">
												<input v-model="newPhone" class="form-style" placeholder="手机号" id="logname" autocomplete="off">
												<i class="input-icon uil uil-mobile-android"></i>
											</div>	
											<div class="form-group mt-2">
												<input v-model="newStdId" class="form-style" placeholder="学生证号" id="logemail" autocomplete="off">
												<i class="input-icon uil uil-credit-card"></i>
											</div>	
											<div class="form-group mt-2">
												<input v-model="newPwd" type="password" name="logpass" class="form-style" placeholder="密码" id="logpass" autocomplete="off">
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<a @click="signUp" class="btn mt-4">提交</a>
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
const requests = axios.create({ baseURL:'http://110.42.145.177:8081'})
// const requests = axios.create({ baseURL:'http://localhost:8081'})
export default {
  data() {
    return {
      userPhone:'',
      userPwd:'',
      userInfo:{},
      newPhone:'',
      newStdId:'',
      newPwd:'',
      newInfo:{},
    }
  },
  methods: {
    async submit() {
      if(!this.isPhoneNumber(this.userPhone)) {
        Toast('输入的手机号有误');
        return;
      }
      this.userInfo.mobile = this.userPhone;
      this.userInfo.password = this.userPwd;
      let data = this.userInfo
      await requests.post('/api/user/login', data).then((res) => {
        if (res.data.status === 444) {
          Toast('该用户不存在');
          return;
        }
        if (res.data.status === 300) {
          Toast('密码错误');
          return;
        }
        if (res.status === 200) {
          // this.$session.set("studentId", res.data.object.studentId);
          this.$session.set("userPhone", this.userPhone);
          this.$session.set("password", this.userPwd)
          this.$router.push('/OrderPage')
        }
      }, (error) => {
        if (error.response.status === 400) {
          Toast.fail('输入的密码账户有误');
        }
      })
    },

    async signUp() {
      if(!this.isPhoneNumber(this.newPhone)) {
        Toast('输入的手机号有误');
        return;
      }

      if(this.newStdId.length>12 || this.newStdId.length<8) {
        Toast('输入的学生号有误');
        return;
      }

      this.newInfo.mobile = this.newPhone;
      this.newInfo.studentId = this.newStdId;
      this.newInfo.password = this.newPwd
      let data = this.newInfo
      await requests.post('/api/user/register', data).then((res) => {
        if (res.data.status === 444) {
          Toast('注册失败，请稍后再试');
          return;
        }
        if( res.data.status === 200) {
          Toast('注册成功');
          this.$session.set("studentId", this.newStdId);
          this.$session.set("userPhone", this.newPhone);
          this.$router.push('/OrderPage')
        }
      })
    },

    isPhoneNumber(tel) {
    if(!(/^1[34578]\d{9}$/.test(tel))){ 
        return false; 
    } 
    return true
}
  },
}
</script>

<style scoped>
@import '../assets/css/login.css';
</style>

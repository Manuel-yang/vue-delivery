<template>
<div class="wrapper">
	<div class="container">
		<h1>信大代拿</h1>
		
		<form class="form">
			<input type="text" v-model="userName" placeholder="学号">
			<input type="password" v-model="userPwd" placeholder="信息门户密码">
			<button type="submit" id="login-button" @click="submit">Login</button>
		</form>
	</div>
	
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
</template>

<script>
import axios from 'axios'

const requests = axios.create({ baseURL: 'http://localhost:3000'})
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
      await requests.post('/user/login', {data}).then((res) => {
        if (res.status === 200) {
          this.$session.set("userName", this.userName);
          console.log(this.$session.get("userName"))
          this.$router.push('/OrderPage')
        }
      }, (error) => {
        if (error.response.status === 400) {
          alert("您输入的账户密码有误")
        }
      })
    }
  },
}
</script>

<style scoped>
@import '../assets/css/login.css'
</style>

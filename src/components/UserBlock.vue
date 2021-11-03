<template>
  <div class="app-header-right">
    <button class="profile-btn">
      <img v-show="isLogin" src="../assets/user.png" />
      <!-- <span @click="login">{{!this.$session.exists()?"登录!加入我们吧!":this.$session.get("userName")}}</span>-->
    </button>
    <LogOutBt v-show="isLogin" @click="loginOut"/>
    <!-- <van-button v-show="isLogin" round type="info" @click="loginOut">退出</van-button> -->
  </div>
</template>

<script>
import LogOutBt from '../components/LogOutBt.vue';
export default {
  data() {
    return {
      isLogin:localStorage.getItem("studentId")!=null,
    }
  },
  components: {
    LogOutBt,
  },
  methods: {
    loginOut() {
      localStorage.clear()
      this.$router.push(this.$route.query.redirect || '/')
    },
    login() {
      if (localStorage.getItem("studentId")==null) {
         this.$router.push('/LoginPage')
      }
      else {
        return;
      }
    }
  },
}
</script>

<style scoped>
@import '../assets/css/style.css'
</style>
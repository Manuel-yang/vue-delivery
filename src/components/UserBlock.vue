<template>
<div class="head" align="right">
  <div class="headBox">
    <LogOutBt v-show="isLogin" @click="loginOut"/>
  </div>
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
      this.$router.push(this.$route.query.redirect || '/LoginPage')
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
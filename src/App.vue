<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  // mounted() {
  //   this.checkSession();
  // },
  name: 'App',
  methods: {
    // checkSession() {
    //   console.log(this.$session.getAll())
    //   if(!this.$session.exists()) {
    //     this.$router.push('/') 
    //     this.$router.push({name:''}) 
    //     this.$router.push({path:'/'})
    //     return;
    //   }
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body {
  background-color: #87AAAA;
}
</style>

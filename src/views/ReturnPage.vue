<template>
  
</template>

<script>
export default {
  mounted() {
    alert("支付成功");
    this.$router.push('/Dashboard') 
    this.$router.push({name:'Dashboard'}) 
    this.$router.push({path:'/Dashboard'})
  }
}
</script>
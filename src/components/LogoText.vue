<template>
  <div class="body">
    <h1 data-shadow='Delivery!'>Delivery!</h1>
  </div>
</template>

<script>
export default {
  components:{
     'remote-js': {
            render(createElement) {
              return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});            
            },
            props: {
            src: { type: String, required: true },
            },
        },
  }
}
</script>

<style scoped>
@import '../assets/css/logoText.css'
</style>


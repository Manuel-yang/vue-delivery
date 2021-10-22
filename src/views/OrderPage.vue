<template>
  <div>
    <OrderPage @submit="submit"/>
  </div>
  
  
</template>

<script>
import OrderPage from '../components/OrderPage.vue'
export default {
  components: {
    OrderPage,
  },
  methods: {
    submit(data) {
      console.log(data)
    }
  },
}
</script>

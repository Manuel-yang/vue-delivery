<template>
  <div>
    <OrderPage @submit="submit"/>
  </div>
  
  
</template>

<script>
import OrderPage from '../components/OrderPage.vue'
import axios from 'axios'

const requests = axios.create({ baseURL:'http://localhost:8081'})
export default {
  components: {
    OrderPage,
  },
  methods: {
    async submit(data) {
      console.log(data)
      await requests.post('api/order/createOrder', data).then((res) => {
        if(res.status === 200) {
          this.$router.push('/Dashboard') 
          this.$router.push({name:'Dashboard'}) 
          this.$router.push({path:'/Dashboard'})
        }
      })
    }
  },
}
</script>

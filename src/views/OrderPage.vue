<template>
  <div>
    <OrderPage @submit="submit"/>
    <div v-html="form">   
    </div>
  </div>
  
  
</template>

<script>
import OrderPage from '../components/OrderPage.vue'
import axios from 'axios'

const requests = axios.create({ baseURL:'http://110.42.145.177:8081'})
// const requests = axios.create({ baseURL:'http://localhost:8081'})
export default {
  mounted() {
    this.checkSession();
  },
  data() {
    return {
      form: '',
    }
  },
  components: {
    OrderPage,
  },
  methods: {
    async submit(data) {
      await requests.post(`api/order/createOrder//${localStorage.getItem("token")}`, data).then((res) => {
        if(res.status === 200) {
          this.form = res.data.object
          let div = document.createElement("divform")
          div.innerHTML = this.form
          document.body.appendChild(div)
          document.forms[0].submit();
        
          // this.$router.push('/Dashboard') 
          // this.$router.push({name:'Dashboard'}) 
          // this.$router.push({path:'/PayPage'})
        }
      })
    },
    checkSession() {
      if(localStorage.getItem("studentId")==null) {
        this.$router.push('/LoginPage') 
        this.$router.push({name:'LoginPage'}) 
        this.$router.push({path:'/LoginPage'})
        return;
      }
    }
  },
}
</script>

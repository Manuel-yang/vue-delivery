<template>
<div>
  <div class="app-container">
      <div class="app-header">
        <UserBlock/>
      </div>

      <div class="app-content">
        <div class="projects-section">
          <SectionHeader />
          <SectionLine :data="data" />
          <BoxBlock @deleteOrder="DeleteOrder" :data="data"/>
        </div>
      </div>
  </div>

<Bottom />
</div>

</template>
<script>
import MessageBox from '../components/MessageBox.vue'
import BoxBlock from '../components/BoxBlock.vue'
import Sidebar from '../components/Sidebar.vue'
import SectionLine from '../components/SectionLine.vue'
import SectionHeader from '../components/SectionHeader.vue'
import UserBlock from '../components/UserBlock.vue'
import SearchBlock from '../components/SearchBlock.vue'
import Bottom from '../components/Bottom.vue'
import axios from 'axios'

const requests = axios.create({ baseURL:'http://110.42.145.177:8081'})
// const requests = axios.create({ baseURL:'http://localhost:8081'})

export default {
  data() {
    return {
      data:[],
      preparedValue:0,
      deliveringValue:0,
      accomplishValue:0,
    }
  },
  components: {
    MessageBox,
    BoxBlock,
    Sidebar,
    SectionLine,
    SectionHeader,
    UserBlock,
    SearchBlock,
    Bottom,
    SearchBlock,
  },
  mounted() {
    this.checkSession();
    this.fetchData()
  },

  methods: {
    fetchData() {
      requests.get(`api/order/findByUserId/${localStorage.getItem("studentId")}`).then( res => {
        this.data =res.data.object;
        console.log(this.data)
        this.statusData();
      })
    },

    statusData() {
      for(let i = 0; i < this.data.length; i++)
      {
        if (this.data[i].status == "已下单") this.preparedValue++;
        if (this.data[i].status == "派送中") this.deliveringValue++;
        if (this.data[i].status == "已完成") this.accomplishValue++;
      }
      this.data.preparedValue = this.preparedValue;
      this.data.deliveringValue = this.deliveringValue;
      this.data.accomplishValue = this.accomplishValue;
    },

    DeleteOrder(orderId) {
      console.log(orderId);
      requests.delete(`api/order/${orderId}`).then((res) => {
        this.fetchData();
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

<style scoped>
@import '../assets/css/style.css'
</style>

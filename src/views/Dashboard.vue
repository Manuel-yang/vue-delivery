<template>
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
</template>
<script>
import MessageBox from '../components/MessageBox.vue'
import BoxBlock from '../components/BoxBlock.vue'
import Sidebar from '../components/Sidebar.vue'
import SectionLine from '../components/SectionLine.vue'
import SectionHeader from '../components/SectionHeader.vue'
import UserBlock from '../components/UserBlock.vue'
import SearchBlock from '../components/SearchBlock.vue'
import axios from 'axios'

const requests = axios.create({ baseURL: 'http://localhost:8081'})

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
  },
  mounted() {
    this.fetchData()
    this.getSession()
  },

  methods: {
    fetchData() {
      requests.get(`api/order/findByUserId/${this.$session.get("studentId")}`).then( res => {
        this.data =res.data.object;
        console.log(res.data.object)
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

    getSession() {
      if(!this.$session.exists()) {
        return;
      }
      else {
        console.log(this.$session.getAll())
      }
    },
    DeleteOrder(orderId) {
      console.log(orderId);
      requests.delete(`api/order/${orderId}`).then((res) => {
        this.fetchData();
        console.log(res)
      })
    }
  },
}
</script>

<style scoped>
@import '../assets/css/style.css'
</style>

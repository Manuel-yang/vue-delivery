<template>
<div>
  <div class="app-container">
      <div class="app-header">
        <UserBlock :studentId="studentId" :credit="credit"/>
      </div>

      <div class="app-content">
        <div class="projects-section">
          <SectionHeader />
          <SectionLine @filter="filter" :data="rawData" />
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
      rawData:[],
      preparedValue:0,
      deliveringValue:0,
      accomplishValue:0,
      credit:'',
      studentId:'',
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
    this.fetchData();
    this.getCredit();
  },

  methods: {
    fetchData() {
      requests.get(`api/order/findByUserId/${localStorage.getItem("studentId")}/${localStorage.getItem("token")}`).then( res => {
        this.data =res.data.object;
        this.rawData = this.data;
        this.statusData();
      })
    },

    statusData() {
      for(let i = 0; i < this.rawData.length; i++)
      {
        if (this.rawData[i].status == "待派送") this.preparedValue++;
        if (this.rawData[i].status == "派送中") this.deliveringValue++;
        if (this.rawData[i].status == "已完成") this.accomplishValue++;
      }
      this.rawData.preparedValue = this.preparedValue;
      this.rawData.deliveringValue = this.deliveringValue;
      this.rawData.accomplishValue = this.accomplishValue;
    },

    DeleteOrder(orderId) {
      requests.delete(`api/order/${orderId}/${localStorage.getItem("token")}`).then((res) => {
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
    },
    filter(flag) {
      this.data = [];
      let j = 0;
      if(flag == "待派送") {
        for(let i = 0; i < this.rawData.length;i++) {
          if (this.rawData[i].status == "待派送") this.data[j++] = this.rawData[i];
        } 
      }
      if(flag == "派送中") {
        for(let i = 0; i < this.rawData.length;i++) {
          if (this.rawData[i].status == "派送中") this.data[j++] = this.rawData[i];
        } 
      }
      if(flag == "已完成") {
        for(let i = 0; i < this.rawData.length;i++) {
          if (this.rawData[i].status == "已完成") this.data[j++] = this.rawData[i];
        } 
      }
      if(flag == "全部订单") {
        this.data = this.rawData;
      }
    },
    getCredit() {
      requests.get(`api/user/getPoint/${localStorage.getItem("studentId")}/${localStorage.getItem("token")}`).then( res => {
        this.credit = res.data.object;
        this.studentId = localStorage.getItem("studentId")
      })
    }
  },
}
</script>

<style scoped>
@import '../assets/css/style.css'
</style>

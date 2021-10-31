<template>
  <div>
    <Navbar/>
    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/custom-empty-image.png" 
      description="您还没有接任何单子哦" v-show="isShow"/>
    <BoxBlock :data="data"/>
    <Tarbar/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Tarbar from '../components/TarbarForTaker.vue'
import BoxBlock from '../components/BoxBlock.vue'
import axios from 'axios'

const requests = axios.create({ baseURL: 'http://localhost:8081'})

export default {
  data() {
    return {
      isShow: false,
      data: [],
      preparedValue:0,
      deliveringValue:0,
      accomplishValue:0,
    }
  },
  components: {
    Navbar,
    Tarbar,
    BoxBlock
  },
  mounted() {
    this.showOrdersToDo()
  },
  methods: {
    showOrdersToDo() {
      let takerId = 1
      requests.get(`/api/taker/getOrderByTakerId/${takerId}`).then( res => {
        this.data = res.data.object
        if (this.data.length == 0) {
          this.isShow = true
        }
        for(let i = 0; i < this.data.length; i++) {
          if (this.data[i].status == "prepared") this.preparedValue++;
          if (this.data[i].status == "delivering") this.deliveringValue++;
          if (this.data[i].status == "accomplish") this.accomplishValue++;
        }
        this.data.preparedValue = this.preparedValue;
        this.data.deliveringValue = this.deliveringValue;
        this.data.accomplishValue = this.accomplishValue;
      })
    }
  }
}
</script>

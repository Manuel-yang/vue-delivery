<template>
  <div>
    <Navbar/>
    <van-empty class="custom-image" image="https://img.yzcdn.cn/vant/custom-empty-image.png" 
      description="还没有订单可以接受" v-show="isShow"/>
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
  components: {
    Navbar,
    Tarbar,
    BoxBlock
  },
  data() {
    return {
      isShow: false,
      data:[],
      preparedValue:0,
      deliveringValue:0,
      accomplishValue:0,
    }
  },
  mounted() {
    this.showOrdersToTake()
  },
  methods: {
    showOrdersToTake() {
      requests.get(`/api/taker/getAllOrder`).then( res => {
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

<style>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>

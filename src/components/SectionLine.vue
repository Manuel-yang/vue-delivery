<template>
  <div class="projects-section-line">
    <div class="projects-status">
      <div class="item-status">
        <span class="status-number">{{data.preparedValue}}</span>
        <van-button size="small" plain type="primary">待派送</van-button>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.deliveringValue}}</span>
        <van-button size="small" plain type="primary">派送中</van-button>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.accomplishValue}}</span>
        <van-button size="small" plain type="primary">已完成</van-button>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.preparedValue+data.deliveringValue+data.accomplishValue}}</span>
        <van-button size="small" plain type="primary">全部订单</van-button>
      </div>

      <router-link to="/OrderPage">
        <div class="blank"></div>
        <van-button class="bt-order" round size="small" color="#7232dd" plain>一键下单</van-button>
      </router-link>
    </div>




  </div>
</template>
<style scoped>
@import '../assets/css/style.css'
</style>

<script>
export default {
  props: {
    data: Array
  },
  methods: {
  },
}
</script>
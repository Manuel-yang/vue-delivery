<template>
  <div class="projects-section-line">
    <div class="projects-status">
      <div class="item-status">
        <span class="status-number">4</span>
        <van-button @click="statusData" plain type="primary">待派送</van-button>
      </div>
      <div class="item-status">
        <span class="status-number">2</span>
        <van-button plain type="primary">派送中</van-button>
      </div>
      <div class="item-status">
        <span class="status-number">6</span>
        <van-button plain type="primary">已完成</van-button>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.length}}</span>
        <van-button plain type="primary">全部订单</van-button>
      </div>
    </div>
    <div class="view-actions">
      <router-link to="/OrderPage">
        <b-button variant="primary">一键下单</b-button>
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
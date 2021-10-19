<template>
  <div class="projects-section-line">
    <div class="projects-status">
      <div class="item-status">
        <span class="status-number">4</span>
        <span class="status-type">待派送</span>
      </div>
      <div class="item-status">
        <span class="status-number">2</span>
        <span class="status-type">派送中</span>
      </div>
      <div class="item-status">
        <span class="status-number">6</span>
        <span class="status-type">已完成</span>
      </div>
      <div class="item-status">
        <span class="status-number">12</span>
        <span class="status-type">全部订单</span>
      </div>
    </div>
    <div class="view-actions">
      <router-link to="/OrderPage">
        <b-button variant="primary" link-to="/OrderPage">一键下单</b-button>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
@import '../assets/css/style.css'
</style>
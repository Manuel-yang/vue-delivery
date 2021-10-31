<template>
  <div class="projects-section-line">
    <div class="projects-status">
      <div class="item-status">
        <span class="status-number">{{data.preparedValue}}</span>
        <div ontouchstart="">
          <button class="button-56" role="button">待派送</button>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.deliveringValue}}</span>
        <div ontouchstart="">
          <button class="button-56" role="button">派送中</button>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.accomplishValue}}</span>
        <div ontouchstart="">
          <button class="button-56" role="button">已完成</button>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.preparedValue+data.deliveringValue+data.accomplishValue}}</span>
        <div ontouchstart="">
          <button class="button-56" role="button">全部订单</button>
        </div>
      </div>

      <router-link to="/OrderPage">
        <Bell />
      </router-link>
    </div>




  </div>
</template>
<script>
import Bell from '../components/Bell.vue'
export default {
  props: {
    data: Array
  },
  methods: {
  },
  components: {
    Bell,
  }
}
</script>

<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/button.css'
</style>

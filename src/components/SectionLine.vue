<template>
  <div class="projects-section-line">
    <div class="projects-status">
      <div class="item-status">
        <span class="status-number">{{data.preparedValue}}</span>
        <div ontouchstart="">
          <div class="button">
            <a href="#">待派送</a>
          </div>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.deliveringValue}}</span>
        <div ontouchstart="">
          <div class="button">
            <a href="#">派送中</a>
          </div>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.accomplishValue}}</span>
        <div ontouchstart="">
          <div class="button">
            <a href="#">已完成</a>
          </div>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.preparedValue+data.deliveringValue+data.accomplishValue}}</span>
        <div ontouchstart="">
          <div class="button">
            <a href="#">全部订单</a>
          </div>
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

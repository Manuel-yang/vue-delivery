<template>
  <div class="projects-section-line">
    <div class="projects-status">
      <div class="item-status">
        <span class="status-number">{{data.preparedValue}}</span>
        <div ontouchstart="">
          <button @click="ready" class="button-56" role="button">待派送</button>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.deliveringValue}}</span>
        <div ontouchstart="">
          <button  @click="delivery" class="button-56" role="button">派送中</button>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.accomplishValue}}</span>
        <div ontouchstart="">
          <button  @click="accomplish" class="button-56" role="button">已完成</button>
        </div>
      </div>
      <div class="item-status">
        <span class="status-number">{{data.preparedValue+data.deliveringValue+data.accomplishValue}}</span>
        <div ontouchstart="">
          <button  @click="all" class="button-56" role="button">全部订单</button>
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
    ready() {
      let data = "待派送"
      this.$emit('filter', data);
    },
    delivery() {
      let data = "派送中"
      this.$emit('filter', data);
    },
    accomplish() {
      let data = "已完成"
      this.$emit('filter', data);
    },
    all() {
      let data = "全部订单"
      this.$emit('filter', data);
    },

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

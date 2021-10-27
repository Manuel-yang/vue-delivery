<template>
<div class="project-box-wrapper">
  <div class="project-box" style="background-color: #d5deff;">
    <div class="project-box-header">
      <div class="more-wrapper">
        <button class="project-btn-more">
        </button>
      </div>
    </div>
    <div class="project-box-content-header">
      <p class="box-content-header">{{data.company}}</p>
      <p class="box-content-subheader">下单时间:{{data.orderDate}}</p>
      <p class="box-content-subheader">状态:{{data.status}}</p>
    </div>
    <div class="box-progress-wrapper">
      <p class="box-progress-header">取件码:{{data.expressCode}}</p>
      <div class="box-progress-bar">
        <span class="box-progress" style="width: 40%; background-color: #4067f9"></span>
      </div>
      <p class="box-progress-percentage">40%</p>
    </div>
    <div class="project-box-footer">
      <div @click="change" id="menu-toggle" :class="crossValue">
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="cross">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/cross.css';
</style>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      crossValue: ""
    }
  },
  methods: {
    change() {
      if(this.crossValue=="") {
        this.crossValue = "open"
      }
      else {
        let orderId = this.data.orderId
        this.$emit('deleteOrder', orderId);
      }
    }
  },
}
</script>
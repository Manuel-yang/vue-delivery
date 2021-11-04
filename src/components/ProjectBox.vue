<template>
<div class="project-box-wrapper">
  <div class="project-box" :style="this.color">
    <div class="project-box-header">
      <div class="more-wrapper">
        <button class="project-btn-more">
        </button>
      </div>
    </div>
    <div class="project-box-content-header">
      <p class="box-content-header">{{value.company}}</p>
      <p class="box-content-subheader">{{value.orderDate}}</p>
      <p class="box-content-subheader">状态:{{value.status}}</p>
    </div>
    <div class="box-progress-wrapper">
      <p class="box-progress-header">取件码:{{value.expressCode}}</p>
      <div class="box-progress-bar">
        <span class="box-progress" :style="this.processBar" style=" background-color: #4067f9"></span>
      </div>
      <p class="box-progress-percentage">{{this.process}}</p>
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
  mounted() {
    this.check()
  },
  props: {
    value: Object,
  },
  data() {
    return {
      crossValue: "",
      process: '',
      processBar:'',
      color:'',
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
    },

    check() {
      if (this.value.status == "待派送") {
        this.process = "0%"
        this.processBar = "width: 0%;"
        this.color = "background-color: #d5deff;"
      }
      if (this.value.status == "派送中") {
        this.process = "60%"
        this.processBar = "width: 60%;"
        this.color = "background-color: #FED2AA;"
      }
      if (this.value.status == "已完成") {
        this.process = "100%"
        this.processBar = "width: 100%;"
        this.color = "background-color: #FF865E;"
      }
    }
  },
}
</script>

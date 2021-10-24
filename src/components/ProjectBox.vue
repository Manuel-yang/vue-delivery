<template>
<div class="project-box-wrapper">
  <div class="project-box" style="background-color: #d5deff;">
    <div class="project-box-header">
      <span>{{data.date}}</span>
      <div class="more-wrapper">
        <button class="project-btn-more">
         
        </button>
      </div>
    </div>
    <div class="project-box-content-header">
      <p class="box-content-header">物件:{{data.packageName}}</p>
      <p class="box-content-subheader">快递员:{{data.deliverName}}</p>
    </div>
    <div class="box-progress-wrapper">
      <p class="box-progress-header">Progress</p>
      <div class="box-progress-bar">
        <span class="box-progress" style="width: 40%; background-color: #4067f9"></span>
      </div>
      <p class="box-progress-percentage">40%</p>
    </div>
  </div>
</div>
</template>

<style scoped>
@import '../assets/css/style.css'
</style>

<script>
export default {
  props: {
    data: Object,
  }
}
</script>
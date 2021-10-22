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
    <div class="project-box-footer">
      <div class="participants">
        <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant">
        <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant">
        <button class="add-participant" style="color: #4067f9;">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
      <div class="days-left" style="color: #4067f9;">
        2 Days Left
      </div>
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
<template>
  <div class="project-boxes jsListView">
    <div v-for="item in data" :key="item.id">
      <ProjectBox :data="item"/>
    </div>
    
  </div>
</template>

<script>
import ProjectBox from './ProjectBox.vue'
export default {
  components: {
    ProjectBox,
  },
  props: {
    data: Array,
  }
}
</script>


<style scoped>
@import '../assets/css/style.css'
</style>

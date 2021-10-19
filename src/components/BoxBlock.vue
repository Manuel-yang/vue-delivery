<template>
  <div class="project-boxes jsGridView">
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
    <ProjectBox />
  </div>
</template>

<style scoped>
@import '../assets/css/style.css'
</style>

<script>
import ProjectBox from './ProjectBox.vue'
export default {
  components: {
    ProjectBox,
  },
}
</script>
<template>
  <div class="project-boxes jsListView">
    <div v-for="item in data" :key="item.id">
      <ProjectBox v-show="show" @deleteOrder="deleteOrder" :data="item"/>
    </div>
  </div>
</template>

<script>
import ProjectBox from './ProjectBox.vue'
export default {
  data() {
    return {
      show: true,
    }
  },
  components: {
    ProjectBox,
  },
  props: {
    data: Array,
  },
  methods: {
    deleteOrder(orderId) {
      this.show = false;
      this.$emit('deleteOrder', orderId)
    }
  },
}
</script>


<style scoped>
@import '../assets/css/style.css'
</style>

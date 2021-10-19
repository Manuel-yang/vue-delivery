<template>
  <div class="app-container">
      <div class="app-header">
        <SearchBlock />
        <UserBlock />
      </div>
    
      <div class="app-content">
        <Sidebar />
        <div class="projects-section">
          <SectionHeader />
          <SectionLine />
          <BoxBlock />
        </div>
        <MessageBox />
      </div>
  </div>
</template>
<script>
import MessageBox from '../components/MessageBox.vue'
import BoxBlock from '../components/BoxBlock.vue'
import Sidebar from '../components/Sidebar.vue'
import SectionLine from '../components/SectionLine.vue'
import SectionHeader from '../components/SectionHeader.vue'
import UserBlock from '../components/UserBlock.vue'
import SearchBlock from '../components/SearchBlock.vue'
export default {
  components: {
    MessageBox,
    BoxBlock,
    Sidebar,
    SectionLine,
    SectionHeader,
    UserBlock,
    SearchBlock,
  },
}
</script>

<style scoped>
@import '../assets/css/style.css'
</style>

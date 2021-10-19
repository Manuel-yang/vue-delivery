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
import MessageBox from './MessageBox.vue'
import BoxBlock from './BoxBlock.vue'
import Sidebar from './Sidebar.vue'
import SectionLine from './SectionLine.vue'
import SectionHeader from './SectionHeader.vue'
import UserBlock from './UserBlock.vue'
import SearchBlock from './SearchBlock.vue'
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
